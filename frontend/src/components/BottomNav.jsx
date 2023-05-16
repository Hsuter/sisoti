import React from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const BottomNav = () => {
  return (
    <div className="sticky bottom-0 bg-white text-black border  flex gap-2 justify-around shadow-brown py-2   ">
      <Link to="/">
        <HomeOutlinedIcon />
      </Link>
      <Link>
        <AccountBalanceWalletOutlinedIcon />
      </Link>
      <Link>
        <Person2OutlinedIcon />
      </Link>
    </div>
  );
};

export default BottomNav;
