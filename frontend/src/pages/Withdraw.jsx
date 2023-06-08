import React, { useState } from "react";
import { useSelector } from "react-redux";
import AccountBal from "../components/AccountBal";
import { toast } from "react-toastify";

const Withdraw = () => {
  const auth = useSelector((state) => state.auth);

  const handleWithdraw = () => {
    if (auth._id) {
      toast.error(
        "Your account hass been suspended, Deposit 50 dollars to activate ",
        {
          position: "top-center",
        }
      );
    } else {
      toast.error("Log in to access your account", {
        position: "top-center",
      });
    }
  };

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
        <button
          className="text-yellow-400 bg-brown  border-2  w-36 rounded-full p-4"
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default Withdraw;
