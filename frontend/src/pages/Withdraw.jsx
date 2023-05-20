import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AccountBal from "../components/AccountBal";

const Withdraw = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="h-[100%] flex flex-col items-center bg-white ">
      <AccountBal />
      <div className="flex flex-col gap-2 items-center">
        <h1 className="mb-2 border-b-2">
          Enter the following details to proceed
        </h1>
        <input
          className="border-2 p-2 w-[300px]"
          placeholder="Your wallet address "
        />
        <input
          className="border-2 p-2 w-[300px]"
          placeholder="Amount you wish to withdraw "
        />
        <button className="text-yellow-400 bg-brown  border-2  w-36 rounded-full p-4">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default Withdraw;
