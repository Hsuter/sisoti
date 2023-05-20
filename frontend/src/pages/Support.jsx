import React from "react";
import { support1 } from "../assets";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ReactWhatsapp from "react-whatsapp";

const Support = () => {
  return (
    <div className="flex flex-col bg-white h-[100%] text-black">
      <div className="w-full">
        <img src={support1} alt="support" className="support w-[100%]" />
      </div>

      <div className="flex flex-col md:text-white text-black items-center gap-2 mt-20 mb-36 ">
        <button className="border-4 py-2 w-36 hover:text-yellow-400 hover:bg-brown ">
          Telegram
        </button>
        <ReactWhatsapp
          number="+254 769899804"
          message="Hello, Let's make some money"
        >
          <button className="border-4 py-2 w-36 hover:text-yellow-400 hover:bg-brown ">
            Whatsapp
          </button>
        </ReactWhatsapp>
      </div>
      <div className="flex flex-col bg-brown items-center ">
        <p className="text-white">
          <SupportAgentIcon />{" "}
          <span className="text-yellow-400">We offer 24hr support</span>
        </p>
        <div className="flex flex-row  justify-around gap-2 ">
          <p className="text-white flex gap-2 ">
            Help line:
            <span>
              <li className="list-none">(+1) 9235 723</li>
              <li className="list-none">(+1) 7373 542</li>
              <li className="list-none">(+1) 1350 152</li>
            </span>
          </p>
          <p className="text-white gap-2 flex">
            <MailOutlineIcon />
            <a>info@sisoto.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
