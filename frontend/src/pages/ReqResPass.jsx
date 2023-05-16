import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPasswordReset } from "../services/authSlice";
import { useNavigate } from "react-router-dom";
import { trader } from "../assets";
import { toast } from "react-toastify";

const ReqResPass = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const requestPasswordResetStatus = useSelector(
    (state) => state.auth.requestPasswordResetStatus
  );

  const [email, setEmail] = useState("");

  const handleRequestPasswordReset = (e) => {
    e.preventDefault();

    if (requestPasswordResetStatus == "success") {
      console.log("email sent");
    } else {
      console.log("email not availbale");
    }
    console.log(email);
    dispatch(requestPasswordReset(email));
  };

  return (
    <div className="bg-white h-[100%] flex flex-col  items-center gap-4">
      <div>
        <img src={trader} className="w-full" alt="Phone image" />
        {requestPasswordResetStatus === "success" && (
          <div className="font-bold mb-5 text-black">
            <div className="font-bold mb-5 ">
              <p>Email with instruction sent </p>
            </div>
          </div>
        )}
        {requestPasswordResetStatus === "rejected" && (
          <div className="font-bold mb-5 text-black ">
            <div className="font-bold mb-5 ">
              <p>Something went wrong </p>
            </div>
          </div>
        )}
      </div>
      <div>
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </form>
      </div>
      <div>
        <button
          type="submit"
          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          onClick={handleRequestPasswordReset}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ReqResPass;
