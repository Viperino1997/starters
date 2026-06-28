import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  { title: "Vite + React 19", desc: "Instant HMR, lean SPA build." },
  { title: "shadcn/ui", desc: "Accessible components you own." },
  { title: "@starters/design", desc: "Shared tokens across every shell." },
  { title: "Framer Motion", desc: "Route transitions and microinteractions." },
];

export function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Badge variant="secondary" className="w-fit">
          SPA starter
        </Badge>
        <h1 className="text-2xl font-semibold tracking-tight">
          Build fast, stay consistent
        </h1>
        <p className="text-muted-foreground">
          A lightweight React shell wired to the shared design layer. Visit
          Settings for a validated form.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((f) => (
          <Card key={f.title}>
            <CardHeader>
              <CardTitle className="text-base">{f.title}</CardTitle>
              <CardDescription>{f.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
