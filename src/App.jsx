import React from "react";
import { Timeline } from "./components/ui/timeline";

export default function App() {
  const data = [
    {
      year: "Small You Era!!!",
      message:
        "Tiny toes, chubby cheeks, and nonstop giggles — peak cuteness unlocked.",
      imageCount: 10,
      titles: [
        "CuteAF",
        "Tiny You!!",
        "Chubby Cheeks",
        "Me Grabbing You Lol",
        "Hehehehehehe",
        "SweetAF",
        "Fav Cousins And Us",
        "Lol, You Used To Love That Pink Hat!!",
        "Mum n You",
        "Bundle of Joy",
      ],
    },
    {
      year: "Tween Years",
      message:
        "Selfie mode: always on. Slayin' fits, silly faces, and pure main character energy.",
      imageCount: 22,
      titles: [
        "Cutie Pie",
        "Sweet Smile",
        "Slay!!!!!!!!!!!!",
        "Cute heart",
        "Look At That Smile",
        "Laugh Out Loud",
        "Shenanigans",
        "Selfie Time",
        "Another Selfie",
        "Hehehehehee",
        "Lol",
        "HangTime",
        "Look Who Is Grinning Ear To Ear",
        "You And Me In The Snapchat Era",
        "Caught In The Wild!!",
        "Lmaoooo",
        "Smile!!!",
        "Look At Those Shiny Teeth",
        "You And Your Love For Cats",
        "Hit That Pose Shawty!!",
        "Oopsie Shot",
        "Growing Fast",
      ],
    },
    {
      year: "Teenage Adventures",
      message:
        "Walking icon, twinning hard, and serving looks. Absolute chaos, absolute legend.",
      imageCount: 22,
      titles: [
        "Lol You Forcing Me For A Pic Together",
        "Hehehehehehheeh",
        "You And The Color Red",
        "Caught in 4K",
        "Twinning",
        "You And Cats!!",
        "Grinning In White",
        "Weekend Mood",
        "You With The Gang",
        "Serving Looks!",
        "Laugh Attack",
        "Vibe Check",
        "Feeling Cute",
        "Look At That Sass!!",
        "Group Selfie Time!",
        "All Grown Now",
        "Veeeeeeeee",
        "PiggyBack Time",
        "Hehehhehehhehe",
        "That One Day",
        "Camera Roll Classic",
        "Feeling Cute",
      ],
    },
  ];

  return (
    <div className="bg-pink-50 text-center min-h-screen">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          Momento
        </h2>
        <p className="text-pink-600 text-sm md:text-base mx-auto max-w-md">
          Where every memory, is a keepsake!
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );

}
