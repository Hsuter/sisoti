import React, { useState, useEffect } from "react";
import { fximgs } from "../assets";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === fximgs.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the time interval as per your requirement (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [fximgs.length]);

  return (
    <div className="min-h-screen  gap-2 font-serif items-center flex flex-col mt-8  ">
      <img src={logo} className="w-32" />

      <div className="flex  ">
        {fximgs.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute sm:ml-96 top-0 border-2  border-yellow-200   left-0   sm:w-[50vw] w-full transition-opacity duration-500 mix-blend-overlay carousel ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="flex flex-col started text-white items-center mx-4 md:mt-96 mt-44">
        <p className="content-center m-2 text-yellow-200 text-[16px]">Hello</p>
        <p className="">
          Welcome to our trading platform where we can invest a great fortune
          and make huge profits within hours of trading with a proven record of
          99 % success rate.
        </p>
        <p>
          In this business we always balance the ups and downs so that we can
          finally make a profit from any trade.
        </p>
        <p className="decoration-clone ">
          We deal with binary options trading in which we buy and sell orders
          from various speculative market after in depth analysis.
        </p>

        <p className="mt-2 text-yellow-300">Do you want to partner with us ?</p>
      </div>
      <div className="flex justify-center z-999">
        <Link to="/signup">
          <button className=" border-2  bg-yellow-300 rounded-full p-2 bottom-0 m-8 flex ">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
