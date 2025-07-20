import React from "react";

const generatePolaroids = (yearIndex) =>
  Array.from({ length: 7 }, (_, j) => ({
    title: `Image ${j + 1} - ${2006 + yearIndex}`,
    image: `https://source.unsplash.com/random/400x400?sig=${
      yearIndex * 10 + j
    }`,
    style: {
      top: `${Math.random() * 50}%`,
      left: `${Math.random() * 60}%`,
      transform: `rotate(${Math.random() * 30 - 15}deg)`,
    },
  }));

const PolaroidGroup = ({ yearIndex }) => {
  const polaroids = generatePolaroids(yearIndex);

  return (
    <div className="relative w-full h-[600px]">
      {polaroids.map((item, index) => (
        <div
          key={index}
          className="absolute w-36 bg-white shadow-xl rounded-sm p-2 text-center text-xs border border-gray-300"
          style={item.style}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto rounded-sm"
          />
          <p className="mt-1">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PolaroidGroup;
