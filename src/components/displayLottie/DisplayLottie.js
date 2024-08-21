import React from "react";
import Lottie from "lottie-react";

export default function DisplayLottie({ animationData }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return (
    <Lottie
      animationData={defaultOptions.animationData}
      loop={defaultOptions.loop}
    />
  );
}
