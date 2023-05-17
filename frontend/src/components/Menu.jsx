import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
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
      <div className="flex flex-row">
        <Link to="/"> BlackSails</Link>
        <div className="cursor-pointer">
          <span onClick={toggleMenu}>
            {menu ? <CloseOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
          </span>
          <div className={`${menu ? "flex" : "hidden"}`}>
            <ul className="text-[12px] ">
              <li>
                <Link to="/cryprocurrencies">
                  <CurrencyBitcoinTwoToneIcon />
                  Cryptocurrencies
                </Link>
              </li>
              <li>
                <Link to="/news">
                  <LightbulbOutlinedIcon />
                  News
                </Link>
              </li>
              <li>
                <Link to="/feedback">
                  <ChatBubbleOutlineOutlinedIcon />
                  Feedback
                </Link>
              </li>
              <li>
                <ContactSupportOutlinedIcon />
                Contact us
              </li>
              <li className="flex flex-row">
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

      <div className="text-white">Welcome {auth.name}</div>
    </div>
  );
};

export default Menu;
