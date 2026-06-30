import { useState } from "react";
import { track } from "@vercel/analytics";

interface Props {
  whatsappNumber: string;
  brandName: string;
  timeSlots: string[];
  partySizes: number[];
}

/**
 * Reservation form → WhatsApp. Collects nombre/fecha/hora/personas and opens a
 * wa.me chat with a structured prefilled message. The venue owns the funnel.
 */
export function ReservationForm({ whatsappNumber, brandName, timeSlots, partySizes }: Props) {
  const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD, local
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [party, setParty] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !date || !time || !party) {
      setError("Completá todos los campos para enviar la reserva.");
      return;
    }
    setError("");
    track("reservation_submit", { source: "form", party });
    const message =
      `¡Hola ${brandName}! Quería reservar una mesa.\n` +
      `• Nombre: ${name.trim()}\n` +
      `• Fecha: ${date}\n` +
      `• Hora: ${time}\n` +
      `• Personas: ${party}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener",
    );
  };

  const fieldClass =
    "h-11 w-full rounded-md border bg-background px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40";
  const labelClass = "mb-1.5 block text-sm font-medium";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 text-left">
      <div>
        <label htmlFor="res-name" className={labelClass}>
          Nombre
        </label>
        <input
          id="res-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="A nombre de…"
          className={fieldClass}
          autoComplete="name"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="res-date" className={labelClass}>
            Fecha
          </label>
          <input
            id="res-date"
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="res-time" className={labelClass}>
            Hora
          </label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={fieldClass}
          >
            <option value="">Elegí</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="res-party" className={labelClass}>
            Personas
          </label>
          <select
            id="res-party"
            value={party}
            onChange={(e) => setParty(e.target.value)}
            className={fieldClass}
          >
            <option value="">Elegí</option>
            {partySizes.map((n) => (
              <option key={n} value={String(n)}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Enviar reserva por WhatsApp
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Se abre WhatsApp con tu pedido escrito. Confirmás vos.
      </p>
    </form>
  );
}
