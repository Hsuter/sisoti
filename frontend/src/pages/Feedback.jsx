import React from "react";
import { images } from "../assets";
import { videos } from "../assets";

const Feedback = () => {
  return (
    <div className="flex flex-wrap sm:flex-row flex-col  items-center justify-center  md:m-20 m-2 my-10">
      <div className="flex flex-wrap sm:flex-row flex-col gap-10 items-center justify-center">
        <>
          {videos.map((video, index) => (
            <video src={video} index={index} controls className="text-black">
              Your browser does not support the video tag.
            </video>
          ))}
          {images.map((image, index) => (
            <img
              src={image}
              key={index}
              alt={`Image ${index}`}
              className="w-50"
            />
          ))}
        </>
      </div>
    </div>
  );
};

export default Feedback;
