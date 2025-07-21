import React from "react";
import { Timeline } from "./components/ui/timeline";

export default function App() {
 const data = [
   {
     year: "Baby & Toddler",
     message: "Your first giggles and steps",
     imageCount: 12,
     titles: [
       "Tiny Toes",
       "First Giggle",
       "Cuddly Chaos",
       "Chubby Cheeks",
       "Nap Time",
       "Milk Drunk",
       "Peekaboo Pro",
       "First Steps",
       "Little Explorer",
       "Playpen Life",
       "Bundle of Joy",
       "Small but Mighty",
     ],
   },
   {
     year: "Tween Years",
     message: "Growing up so fast",
     imageCount: 22,
     titles: [
       "School Shenanigans",
       "Big Smiles",
       "New Discoveries",
       "Classroom Vibes",
       "Birthday Bash",
       "Laugh Out Loud",
       "Best Buds",
       "Selfie Time",
       "Art Attack",
       "Bike Rides",
       "Little Rebellion",
       "Snack Break",
       "Video Game Mode",
       "Caught Daydreaming",
       "Super Poses",
       "Socks & Slides",
       "Dance Moves",
       "Comic Nerd",
       "Cool Glasses",
       "Cringe Era",
       "Oopsie Shot",
       "Growing Fast",
     ],
   },
   {
     year: "Teenage Adventures",
     message: "Cool shoes and chaos",
     imageCount: 22,
     titles: [
       "Selfie Master",
       "Glow Up Era",
       "Squad Goals",
       "Caught in 4K",
       "Laugh Attack",
       "New Look, Who Dis?",
       "Peace & Pouts",
       "Weekend Mood",
       "Random Clicks",
       "Main Character Energy",
       "Teen Spirit",
       "Vibe Check",
       "Feeling Cute",
       "Late Night Feels",
       "Zero Filter",
       "All Grown Now",
       "Summer Chill",
       "Edgy Phase",
       "Retro Fit",
       "That One Day",
       "Camera Roll Classic",
       "Outfit Check",
     ],
   },
 ];

  return (
    <div className=" ">
      {" "}
     
        <Timeline data={data} />
    
    </div>
  );
}
