import React from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white text-black border flex justify-around shadow-brown py-2 ">
      <Link to="/home">
        <HomeOutlinedIcon />
      </Link>
    </div>
  );
};

export default BottomNav;
