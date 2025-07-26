// components/BeforeAfterSlider.js
"use client"; // if using Next.js 13+ app router

import React from "react";
import BeforeAfterSlider from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const BeforeAfterSliderComponent = ({ firstImage, secondImage }) => {
  const beforeImage = firstImage || "/assets/images/before_after/image_2.png";
  const afterImage = secondImage || "/assets/images/before_after/image_2-2.png";

  return (
    <div
      dir="ltr"
      className="rounded-lg overflow-hidden h-full"
      style={{
        direction: "ltr",
      }}
    >
      <BeforeAfterSlider firstImage={firstImage} secondImage={secondImage} />
    </div>
  );
};

export default BeforeAfterSliderComponent;
