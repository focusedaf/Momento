import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Polaroid from "./polaroid";

const folderNames = ["baby-toddler", "tween-teen1", "tween-teen2"];

const generatePolaroids = (folderIndex, imageCount) => {
  const positions = [
    "top-10 left-[20%] rotate-[-5deg]",
    "top-40 left-[25%] rotate-[-7deg]",
    "top-5 left-[40%] rotate-[8deg]",
    "top-32 left-[55%] rotate-[10deg]",
    "top-20 left-[35%] rotate-[2deg]",
    "top-24 left-[45%] rotate-[-7deg]",
    "top-8 left-[30%] rotate-[4deg]",
    "top-36 left-[28%] rotate-[12deg]",
    "top-12 left-[50%] rotate-[-3deg]",
    "top-28 left-[60%] rotate-[7deg]",
    "top-6 left-[45%] rotate-[-9deg]",
    "top-44 left-[40%] rotate-[5deg]",
  ];

  const folder = folderNames[folderIndex];

  
  const titles = [
    "Sweet Moments",
    "Growing Up",
    "Playing",
    "Learning",
    "Adventures",
    "Big Smiles",
    "First Steps",
    "Happy Days",
    "Memories",
    "Fun Times",
    "Special Day",
    "New Discovery",
    "Giggles",
    "Exploring",
    "Best Friends",
    "Silly Face",
    "Proud Moment",
    "Summer Fun",
    "Learning New Things",
    "Joy",
    "Cuddles",
    "Playtime",
  ];

  if (!folder || !imageCount) {
    console.log("Missing folder or imageCount:", {
      folderIndex,
      folder,
      imageCount,
    });
    return [];
  }

  return Array.from({ length: imageCount }, (_, j) => ({
    title: titles[j % titles.length],
    image: `/timeline/${folder}/img${j + 1}.jpg`,
    className: `absolute ${positions[j % positions.length]} z-[${
      imageCount - j
    }] object-cover hover:z-50 transition-all duration-300 hover:scale-105`,
  }));
};

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-pink-50 font-primary md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-xl mb-4 text-black dark:text-white max-w-4xl ">
          Momento
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm ">
          hehehhehe
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-pink-300 dark:bg-pink-500 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-pink-200 dark:bg-pink-800 border border-pink-300 dark:border-pink-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.year}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.year}
              </h3>
              <Polaroid
                items={generatePolaroids(index, item.imageCount || 6)}
                message={item.message}
              />
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-pink-300 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};


// bg-gradient-to-t from-indigo-500 via-pink-500 to-transparent from-[0%] via-[10%] 