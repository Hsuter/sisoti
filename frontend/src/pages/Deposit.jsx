import React, { useState, useEffect } from "react";
import AccountBal from "../components/AccountBal";
import { useSelector } from "react-redux";

const Deposit = () => {
  const auth = useSelector((state) => state.auth);

  const handleRecharge = () => {};
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center">
        <AccountBal />
        {auth._id ? (
          <>
            <button
              className="text-yellow-400 bg-brown  border-2  mb-40 w-36 rounded-full"
              onClick={handleRecharge}
            >
              Recharge
            </button>
            <div></div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Deposit;
