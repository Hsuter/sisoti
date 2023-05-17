import React, { useState } from "react";
import { useSelector } from "react-redux";
import TopCryptos from "../components/TopCryptos";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { whatsapp } from "../assets";
import ReactWhatsapp from "react-whatsapp";

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const [renderWhatsapp, setRenderWhatsapp] = useState(false);

  const handleWhatsapp = () => {
    setRenderWhatsapp(true);
    console.log("clicked");
  };

  return (
    <div className="w-full  flex flex-col items-center text-white">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-[12px]">Account Balance</h1>
        <span className="text-[50px] flex flex-row">
          <span className="text-yellow-400 flex flex-row">$</span>
          {auth.balance ? <p>{auth.balance}</p> : <p>0</p>}
        </span>
      </div>
      <div className="flex gap-2">
        <Link to="/deposit">
          <button className="p-2 rounded-lg bg-white text-black ">
            Deposit
          </button>
        </Link>

        <Link to="/withdraw">
          <button className="p-2 rounded-lg bg-white text-black ">
            Withdraw
          </button>
        </Link>
      </div>
      <div className="flex flex-col bg-white w-[100%] rounded-t-3xl mt-10 ">
        <TopCryptos simplified />
      </div>
      <div className="z-10 absolute bottom-0 right-0 mb-10">
        <img src={whatsapp} onClick={handleWhatsapp} className="w-36" />{" "}
        {renderWhatsapp && (
          <ReactWhatsapp number="0769899804" message="Hello World!!!" />
        )}
      </div>
    </div>
  );
};

export default Home;
