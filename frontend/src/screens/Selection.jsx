import React, { useState } from "react";

import Header from "../common/Header.jsx";
import ProgressComponent from "../components/selectionComponents/ProgressComponent.jsx";
import FinishesComponent from "../components/selectionComponents/FinishesComponents.jsx";
import ImageSlider from "../components/selectionComponents/ImageSlider.jsx";

const Selection = () => {
  const [selectedImage, setSelectedImage] = useState({
    src: "./images/selection/Mask group.png",
    label: "Living Room",
  });
  const [selectedProgress, setSelectedProgress] = useState("FLOORPLAN");

  return (
    <>
      <Header />
      <div className="flex font-montserrat p-4 gap-10">
        <ProgressComponent setSelectedProgress={setSelectedProgress} />
        <FinishesComponent selectedImage={selectedImage} selectedProgress={selectedProgress} />
        <ImageSlider setSelectedImage={setSelectedImage} selectedProgress={selectedProgress} />
      </div>
    </>
  );
};

export default Selection;
