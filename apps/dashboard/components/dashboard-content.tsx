"use client";

import { MotionConfig, motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stats = [
  { label: "Revenue", value: "$48,210", delta: "+12.4%", up: true },
  { label: "Subscriptions", value: "2,340", delta: "+8.1%", up: true },
  { label: "Active now", value: "573", delta: "+5.0%", up: true },
  { label: "Churn", value: "1.9%", delta: "-0.4%", up: false },
];

const rows = [
  { id: "INV-1042", customer: "Acme Inc.", status: "Paid", amount: "$2,400" },
  { id: "INV-1041", customer: "Globex", status: "Pending", amount: "$1,200" },
  { id: "INV-1040", customer: "Initech", status: "Paid", amount: "$3,800" },
  { id: "INV-1039", customer: "Umbrella", status: "Overdue", amount: "$640" },
  { id: "INV-1038", customer: "Soylent", status: "Paid", amount: "$5,100" },
];

const statusVariant: Record<string, "default" | "secondary" | "destructive"> = {
  Paid: "default",
  Pending: "secondary",
  Overdue: "destructive",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export function DashboardContent() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6"
      >
        <motion.div
          variants={container}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={item}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {s.label}
                  </CardTitle>
                  <Badge variant={s.up ? "secondary" : "destructive"} className="gap-1">
                    {s.up ? (
                      <ArrowUpRight className="size-3" />
                    ) : (
                      <ArrowDownRight className="size-3" />
                    )}
                    {s.delta}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold tracking-tight">
                    {s.value}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle>Recent transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell className="font-medium">{r.id}</TableCell>
                      <TableCell>{r.customer}</TableCell>
                      <TableCell>
                        <Badge variant={statusVariant[r.status]}>{r.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{r.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
