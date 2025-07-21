/* eslint-disable no-unused-vars */
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

// Import your JSON data
import babyData from '../data/baby.json';
import tweenData from '../data/tween.json';
import teenData from '../data/teen.json';

const generateCards = (jsonData, titles = []) => {
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

  return jsonData.map((item, index) => ({
    title: titles[index] || item.title,
    image: item.url,
    className: `absolute ${positions[index % positions.length]} z-[${
      jsonData.length - index
    }] object-cover hover:z-50 transition-all duration-300 hover:scale-105`,
  }));
};

const CardSection = ({ items, message }) => {
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-pink text-pink-400 md:text-4xl dark:text-pink-800 font-primary">
        {message}
      </p>
      {[...items].reverse().map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <div className="bg-white shadow-xl rounded-md p-4 flex flex-col items-center space-y-3 dark:bg-neutral-200">
            <img
              src={item.image}
              alt={item.title}
              className="relative z-10 h-64 w-64 object-cover mb-4"
            />
            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-800 text-center font-primary">
              {item.title}
            </p>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
};

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Map the data to corresponding JSON files
  const jsonDataMap = [babyData, tweenData, teenData];

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
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-pink-500 dark:text-pink-500 ">
                {item.year}
              </h3>
            </div>

            {/* mobile ke liye hai bc */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-pink-500 dark:text-pink-500 ">
                {item.year}
              </h3>
              <CardSection
                items={generateCards(
                  jsonDataMap[index],
                  item.titles
                )}
                message={item.message}
              />
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-netural-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-pink-300 rounded-full bg-gradient-to-t from-pink-500 via-pink-300 to-transparent from-[0%] via-[10%]"
          />
        </div>
      </div>
    </div>
  );
};