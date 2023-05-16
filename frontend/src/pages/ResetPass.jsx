import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordConfirmation } from "../services/authSlice";
import { trader } from "../assets";
import { toast } from "react-toastify";

const ResetPass = () => {
  const dispatch = useDispatch();
  const resetPasswordConfirmationStatus = useSelector(
    (state) => state.auth.resetPasswordConfirmationStatus
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatching, setIsmatching] = useState(false);

  const handleConfirmPassword = () => {
    if (password === confirmPassword && password.length > 3) {
      setIsmatching(true);
    } else {
      setIsmatching(false);
    }
  };
  const handleResetPassword = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log(resetPasswordConfirmationStatus);
    dispatch(resetPasswordConfirmation({ token, password }));
  };

  useEffect(() => {
    handleConfirmPassword();
  }, [password, confirmPassword]);

  useEffect(() => {
    console.log(isMatching);
  }, [isMatching]);
  return (
    <div className="bg-white flex flex-col h-[100%] items-center gap-4">
      <div>
        <img src={trader} className="w-full" alt="Phone image" />
        {resetPasswordConfirmationStatus === "success" && (
          <div className="font-bold mb-5 text-black ">
            <p>Password reset successful,proceed to login </p>
          </div>
        )}
        {resetPasswordConfirmationStatus === "rejected" && (
          <div className="font-bold mb-5 text-black ">
            <div className="font-bold mb-5 ">
              <p>Something went wrong </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <form>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </form>
        <form>
          <input
            type="password"
            placeholder="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </form>

        {isMatching ? (
          <p className="text-style: italic mb-4 font-bold text-rose-900">
            It's a match, proceed.
          </p>
        ) : !isMatching && confirmPassword.length < 3 ? null : (
          <p className="text-style: italic mb-4 font-bold text-rose-900">
            password doesn't match.
          </p>
        )}
      </div>
      <div>
        <button
          type="submit"
          className={`${
            isMatching
              ? "cursor-pointer"
              : " text-rose-900 cursor-not-allowed pointer-events-none"
          }inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full`}
          onClick={handleResetPassword}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPass;
