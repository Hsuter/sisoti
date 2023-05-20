import React, { useState, useEffect } from "react";
import AccountBal from "../components/AccountBal";
import { useSelector } from "react-redux";
import Recharge from "../components/Recharge";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Deposit = () => {
  const auth = useSelector((state) => state.auth);

  const [rechargeDetails, setRechargeDetails] = useState(false);

  const handleRecharge = () => {
    if (!rechargeDetails) {
      setRechargeDetails(true);
    } else {
      setRechargeDetails(false);
    }
  };
  return (
    <>
      <div className="bg-white h-full  flex flex-col items-center ">
        <div className="text-black w-full  cursor-pointer ">
          <ul className="list-none flex flex-col  ">
            <li className=" bg-brown gap-8 flex text-white w-full items-center justify-center border-2  ">
              invest 100 $
              <span className="bg-yellow-300 text-black w-[50%] mr-[-100px] pl-8">
                {" "}
                income 1000 $
              </span>
            </li>
            <li className=" bg-brown gap-8 flex text-white w-full items-center justify-center border-2">
              invest 200 ${" "}
              <span className="bg-yellow-300 text-black w-[50%] mr-[-100px] pl-8">
                income 2000 $
              </span>
            </li>
            <li className=" bg-brown gap-8 flex text-white w-full items-center justify-center border-2">
              invest 300 $
              <span className="bg-yellow-300 text-black w-[50%] mr-[-100px] pl-8">
                income 3000 $
              </span>
            </li>
            <li className=" bg-brown gap-8 flex text-white w-full items-center justify-center border-2">
              invest 400 ${" "}
              <span className="bg-yellow-300 text-black w-[50%] mr-[-100px] pl-8">
                {" "}
                income 4000 $
              </span>
            </li>
          </ul>
        </div>
        <AccountBal />
        <div className="">
          {auth._id ? (
            <>
              <button
                className="text-yellow-400 bg-brown  border-2  w-36 rounded-full"
                onClick={handleRecharge}
              >
                Recharge
              </button>
            </>
          ) : null}
        </div>

        <div
          className={` ${
            rechargeDetails
              ? "flex  items-center translate-y-[-70vh] w-full"
              : "hidden"
          }`}
        >
          <CloseOutlinedIcon
            className="absolute top-0"
            onClick={handleRecharge}
          />
          <Recharge />
        </div>
      </div>
    </>
  );
};

export default Deposit;
