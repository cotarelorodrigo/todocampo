"use client";
import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 23",
    Soja: 2890,
    Trigo: 2338,
  },
  {
    date: "Feb 23",
    Soja: 2756,
    Trigo: 2103,
  },
  {
    date: "Mar 23",
    Soja: 3323,
    Trigo: 2194,
  },
  {
    date: "Apr 23",
    Soja: 3470,
    Trigo: 2108,
  },
  {
    date: "May 23",
    Soja: 3475,
    Trigo: 1812,
  },
  {
    date: "Jun 23",
    Soja: 3129,
    Trigo: 1726,
  },
  {
    date: "Jul 23",
    Soja: 3490,
    Trigo: 1982,
  },
  {
    date: "Aug 23",
    Soja: 2903,
    Trigo: 2012,
  },
  {
    date: "Sep 23",
    Soja: 2643,
    Trigo: 2342,
  },
  {
    date: "Oct 23",
    Soja: 2837,
    Trigo: 2473,
  },
  {
    date: "Nov 23",
    Soja: 2954,
    Trigo: 3848,
  },
  {
    date: "Dec 23",
    Soja: 3239,
    Trigo: 3736,
  },
];

const dataFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

export function CotizacionLine() {
  return (
    <AreaChart
      className="h-80 bg-white"
      data={chartdata}
      index="date"
      categories={["Soja", "Trigo"]}
      colors={["indigo", "rose"]}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      showLegend={false}
    />
  );
}
