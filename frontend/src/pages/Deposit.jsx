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
            <li className="  bg-brown gap-8 flex text-white w-full  border-2  ">
              <p className="w-full items-center flex justify-center">
                invest 100 $
              </p>
              <span className="bg-yellow-300 text-black w-full flex justify-center ">
                income 1000 $
              </span>
            </li>
            <li className="  bg-brown gap-8 flex text-white w-full  border-2  ">
              <p className="w-full items-center flex justify-center">
                invest 200 $
              </p>
              <span className="bg-yellow-300 text-black w-full flex justify-center ">
                income 2000 $
              </span>
            </li>
            <li className="  bg-brown gap-8 flex text-white w-full  border-2  ">
              <p className="w-full items-center flex justify-center">
                invest 300 $
              </p>
              <span className="bg-yellow-300 text-black w-full flex justify-center ">
                income 3000 $
              </span>
            </li>
            <li className="  bg-brown gap-8 flex text-white w-full  border-2  ">
              <p className="w-full items-center flex justify-center">
                invest 400 $
              </p>
              <span className="bg-yellow-300 text-black w-full flex justify-center ">
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
