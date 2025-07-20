import React from "react";
import { Timeline } from "./components/ui/timeline";

export default function App() {
  const years = [
    { year: "2006" },
    { year: "2007" },
    { year: "2008" },
    { year: "2009" },
    { year: "2010" },
    { year: "2011" },
    { year: "2012" },
    { year: "2013" },
    { year: "2014" },
    { year: "2015" },
    { year: "2016" },
    { year: "2017" },
    { year: "2018" },
    { year: "2019" },
    { year: "2020" },
    { year: "2021" },
    { year: "2022" },
    { year: "2023" },
    { year: "2024" },
    { year: "2025" },
  ];

  return (
    <div>
      <Timeline data={years} />
     
    </div>
  );
}
