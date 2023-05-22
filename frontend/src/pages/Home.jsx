import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopCryptos from "../components/TopCryptos";
import { Link } from "react-router-dom";
import { whatsapp } from "../assets";
import ReactWhatsapp from "react-whatsapp";
import { loadUser } from "../services/authSlice";
import LiveRecords from "../Records/LiveRecords";

const Home = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className="w-full  flex flex-col items-center text-white">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-[12px]">Account Balance</h1>
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
      <div className="mt-10">
        <LiveRecords />
      </div>
      <div className="flex flex-col bg-white w-[100%] rounded-t-3xl mt-10 ">
        <TopCryptos simplified />
      </div>
      <div className="z-10 absolute bottom-0 right-0 mb-10">
        <ReactWhatsapp
          number="+254 726833608"
          message="Hello, Let's make some money"
        >
          <img src={whatsapp} className="w-36" />
        </ReactWhatsapp>
      </div>
    </div>
  );
};

export default Home;
