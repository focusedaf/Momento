import React from "react";
import { Timeline } from "./components/ui/timeline";

export default function App() {
  const years = [
    { year: "2006", message: "Some cool memory from 2006" },
    { year: "2007", message: "Some cool memory from 2006" },
    { year: "2008", message: "Some cool memory from 2006" },
    { year: "2009", message: "Some cool memory from 2006" },
    { year: "2010", message: "Some cool memory from 2006" },
    { year: "2011", message: "Some cool memory from 2006" },
    { year: "2012", message: "Some cool memory from 2006" },
    { year: "2013", message: "Some cool memory from 2006" },
    { year: "2014", message: "Some cool memory from 2006" },
    { year: "2015", message: "Some cool memory from 2006" },
    { year: "2016", message: "Some cool memory from 2006" },
    { year: "2017", message: "Some cool memory from 2006" },
    { year: "2018", message: "Some cool memory from 2006" },
    { year: "2019", message: "Some cool memory from 2006" },
    { year: "2020", message: "Some cool memory from 2006" },
    { year: "2021", message: "Some cool memory from 2006" },
    { year: "2022", message: "Some cool memory from 2006" },
    { year: "2023", message: "Some cool memory from 2006" },
    { year: "2024", message: "Some cool memory from 2006" },
    { year: "2025", message: "Some cool memory from 2006" },
  ];

  return (
    <div className=" ">
      {" "}
     
        <Timeline data={years} />
    
    </div>
  );
}
