import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AccountBal from "../components/AccountBal";

const Withdraw = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="h-[100%]">
      <AccountBal />
    </div>
  );
};

export default Withdraw;
