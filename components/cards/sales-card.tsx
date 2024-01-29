"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Line, LineChart, ResponsiveContainer } from "recharts";

export default function SalesCard() {
  const data = [
    { count: 2000 },
    { count: 3500 },
    { count: 8500 },
    { count: 5000 },
    { count: 5500 },
    { count: 4500 },
    { count: 4000 },
    { count: 5000 },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-normal">Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">38,775</div>
        <div className="text-xs text-muted-foreground">
          +25.7% from last month
        </div>
        <div className="h-24">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="count"
                dot={{ fill: "hsl(var(--primary))" }}
                style={{ stroke: "hsl(var(--primary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
