import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopCryptos from "../components/TopCryptos";
import { Link } from "react-router-dom";
import { whatsapp } from "../assets";
import ReactWhatsapp from "react-whatsapp";
import { getUser, loadUser } from "../services/authSlice";
import LiveRecords from "../Records/LiveRecords";
import { pattners } from "../assets";
import axios from "axios";
import { url } from "../services/api";

const Home = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(getUser());
  }, []);

  return (
    <div className="w-full  flex flex-col items-center text-white">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-[15px]">Account Balance</h1>
        <span className="text-[50px] flex flex-row">
          <span className="text-yellow-400 flex flex-row">$</span>
          {auth.balance ? <p>{auth.balance}</p> : <p>0</p>}
        </span>
      </div>
      <div className="flex gap-2">
        <Link to="/deposit">
          <button className="py-2 rounded-lg bg-white text-black w-28 ">
            Invest
          </button>
        </Link>

        <Link to="/withdraw">
          <button className="py-2 rounded-lg bg-white text-black w-28">
            Withdraw
          </button>
        </Link>
      </div>
      <div className="mt-10  flex ">
        <LiveRecords />
      </div>
      <div className="flex flex-col bg-yellow-600 gap-4 mt-8 flex-wrap items-center  justify-around w-full pb-8">
        <h1 className="text-brown font-bold ">Our pattners</h1>
        <div className="flex flex-row gap-2 flex-wrap items-center justify-center w-full  ">
          {pattners.map((pattner, index) => (
            <>
              <div className="flex flex-row  bg-brown rounded-lg mx-2">
                <img
                  src={pattner}
                  alt="pattners"
                  className="md:w-[150px]  w-[80px] md:h[80px] h-[40px] "
                />
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-white w-[100%] rounded-t-3xl mt-10 ">
        <TopCryptos simplified />
      </div>
      <div className="z-10 absolute bottom-0 right-0 mb-10">
        <ReactWhatsapp
          number="+254 768471962"
          message="Hello, Let's make some money"
        >
          <img src={whatsapp} className="w-20 " />
        </ReactWhatsapp>
      </div>
    </div>
  );
};

export default Home;
