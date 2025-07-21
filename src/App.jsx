import React from "react";
import { Timeline } from "./components/ui/timeline";

export default function App() {
 const data = [
   {
     year: "Baby & Toddler",
     message: "Your first giggles and steps",
     imageCount: 12,
   },
   {
     year: "Tween Years",
     message: "Growing up so fast",
     imageCount: 22,
   },
   {
     year: "Teenage Adventures",
     message: "Cool shoes and chaos",
     imageCount: 22,        
   },
 ];

  return (
    <div className=" ">
      {" "}
     
        <Timeline data={data} />
    
    </div>
  );
}
