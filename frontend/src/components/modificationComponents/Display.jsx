import React from "react";

const Display = ({ selectedImage, selectedProgress }) => {
  const finishes = {
    FLOORPLAN: "FLOORS - FLOORING",
    WALLS: "WALLS",
    MAIN_DOOR: "MAIN DOOR",
  };

  return (
    <div className="relative flex flex-col items-left bg-white p-3 h-screen w-full gap-3">
      {/* Breadcrumb Section */}
      <div className="self-start mb-2 text-gray-500">
        <span className="font-light text-sm">
          Dashboard &gt;&gt; My Choices
        </span>
        <span className="font-normal text-sm"> &gt;&gt; Finishes</span>
      </div>

      {/* Title Section */}
      <div className="self-start mb-2 text-orange-600">
        <h1 className="font-bold text-xm md:text-3xl">Foyer</h1>
      </div>

      {/* Tabs Section */}
      <div className="flex gap-2 mb-2 items-left">
        <button className="bg-purple-100 text-purple-700 font-bold text-xs px-4 py-2 rounded-lg opacity-40">
          {finishes.FLOORPLAN}
        </button>
        <button className="bg-purple-100 text-purple-700 font-bold text-xs px-4 py-2 rounded-lg opacity-40">
          {finishes.WALLS}
        </button>
        <button className="bg-purple-100 text-purple-700 font-bold text-xs px-4 py-2 rounded-lg">
          {finishes.MAIN_DOOR}
        </button>
      </div>

      

      {/* Image Section */}
      <div className="relative w-full max-w-4xl mb-2">
        {/* Current Image Number */}
        <img
          src="./images/modification/display/Mask group.svg"
          alt="Current Selection"
          className="w-full h-96 rounded-md object-cover"
        />
      <div className="absolute top-[-40px] right-4 text-gray-500 text-xs font-bold">
        01 / 03
      </div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>

        {/* 360 Degree Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">
          <img src="./images/modification/display/Group 937.svg" alt="360" />
        </div>

        {/* Current Image Number */}
        <div className="absolute top-4 right-4 text-gray-500 text-xs font-bold">
          <img
            src="./images/modification/display/Group.svg"
            alt="full-screen"
          />
        </div>
      </div>

      {/* Live Results Section */}
      <div className="self-start text-white font-bold text-xs mb-2">
        LIVE RESULTS BASED ON SELECTION
      </div>

      {/* Bottom Navigation Section */}
      <div className="flex justify-between items-center w-full max-w-4xl">
        <button className="text-orange-500 font-bold text-xs text-nowrap">
          &#60;&#60; BACK
        </button>
        {/* Progress Bar Section */}
        <div className="w-full px-12 max-w-4xl">
          <img
            src="./images/modification/display/Group 940.svg"
            alt="Progress Bar"
            className="w-full"
          />
        </div>
        <button className="text-orange-500 font-bold text-xs text-nowrap">
          NEXT &#62;&#62;
        </button>
      </div>
    </div>
  );
};

export default Display;
