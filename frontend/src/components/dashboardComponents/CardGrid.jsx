// CardGrid.tsx
import React from "react";

const CardGrid = () => {
  const cards = [
    {
      title: "Specifications & Options",
      imgSrc: "./images/dashboard/group 954.png",
    },
    {
      title: "Walk-through",
      imgSrc: "./images/dashboard/group 956.png",
    },
    {
      title: "Impressions",
      imgSrc: "/images/dashboard/group 957.png",
    },
    {
      title: "My Choices",
      imgSrc: "./images/dashboard/group 953.png",
      info: "54% COMPLETION",
      infoIcon: "/images/dashboard/group 959.png",
    },
    {
      title: "Master Portal",
      imgSrc: "./images/dashboard/group 958.png",
    },
    {
      title: "Payments",
      imgSrc: "./images/dashboard/group 952.png",
    },
    {
      title: "Site Progress",
      imgSrc: "./images/dashboard/group 955.png",
    },
    {
      title: "My Unit",
      imgSrc: "./images/dashboard/group 951.png",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative bg-white shadow-lg rounded-lg "
        >
          <div className="relative">
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-full h-[120px] rounded-lg object-cover"
            />
            {card.info && (
              <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white text-xs font-medium">
                {card.info}
              </div>
            )}
          </div>

          {card.infoIcon && (
              <img src={card.infoIcon} alt="info" className="w-4 h-4 absolute right-[-4px] top-[-4px]" />
          )}

          <div className="h-[60px] py-2 px-4 flex items-center align-center justify-between">
            <h3 className="font-bold text-[12px] text-gray-800">
              {card.title}
            </h3>
            <img
              src="/images/dashboard/group 943.png"
              alt="arrow"
              className="w-[24px] h-[16px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
