import React, { useState } from "react";

import { Link } from "react-router-dom";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CurrencyBitcoinTwoToneIcon from "@mui/icons-material/CurrencyBitcoinTwoTone";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../services/authSlice";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { toast } from "react-toastify";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Menu = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.warning("You've logged out", { position: "top-center" });
  };

  

  return (
    <div className="w-[100%] p-5 flex text-white flex-row justify-between">
      <div className="flex flex-row ">
        <div className="flex cursor-pointer ">
          <span onClick={toggleMenu}>
            {menu ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
          </span>
          <div className={`${menu ? " mt-2  ml-2 " : "hidden"}`}>
            <ul className="text-[12px] text-yellow-300  ">
              <li className="border-2 p-1 rounded-lg">
                <Link to="/home">
                  <HomeOutlinedIcon />
                  Home
                </Link>
              </li>
              <li className="border-2 p-1 rounded-lg">
                <Link to="/cryprocurrencies">
                  <CurrencyBitcoinTwoToneIcon />
                  Cryptocurrencies
                </Link>
              </li>
              <li className="border-2 p-1 rounded-lg">
                <Link to="/news">
                  <LightbulbOutlinedIcon />
                  News
                </Link>
              </li>
              <li className="border-2 p-1 rounded-lg">
                <Link to="/feedback">
                  <ChatBubbleOutlineOutlinedIcon />
                  Testimonials
                </Link>
              </li>
              <li className="border-2 p-1 rounded-lg">
                <Link to="/support">
                  <ContactSupportOutlinedIcon />
                  Contact us
                </Link>
              </li>
              <li className="flex flex-row border-2 p-1 rounded-lg">
                <Link to="/login" className="flex flex-row">
                  <LoginTwoToneIcon />
                  {auth._id ? (
                    <p onClick={handleLogout}>Logout</p>
                  ) : (
                    <p>Login</p>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-white">Welcome {auth.name.split(" ")[0]}</div>
    </div>
  );
};

export default Menu;
