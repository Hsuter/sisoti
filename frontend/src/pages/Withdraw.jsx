import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Withdraw = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-[12px]">Account Balance</h1>
        <span className="text-[50px] flex flex-row">
          <span className="text-yellow-400 flex flex-row">$</span>
          {auth.balance ? <p>{auth.balance}</p> : <p>0</p>}
        </span>
      </div>
    </div>
  );
};

export default Withdraw;
