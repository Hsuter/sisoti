import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../services/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { trader } from "../assets";
import { isPending } from "@reduxjs/toolkit";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const verify = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };
  useEffect(() => {
    if (auth._id) {
      navigate("/home");
    }
  }, [auth._id, navigate]);

  return (
    <div>
      <section className=" bg-white">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src={trader} className="w-full" alt="Phone image" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20 ">
              <h1 className="w-[100%] ml-[35%] text-[30px] mb-10 font-bold">
                Log In
              </h1>
              <form>
                {/*Email*/}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                  />
                </div>

                {/*Password*/}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                  />
                </div>
                <div className="text-style: italic mb-4 font-bold ">
                  {auth.loginStatus === "rejected" ? (
                    <p className=" text-rose-900 ">
                      {auth.loginStatus ===
                        `"name" is not allowed to be empty` ||
                      `"email" is not allowed to be empty`
                        ? "Invalid credentials."
                        : null}
                    </p>
                  ) : null}
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white onchange:bg-blue-600 onchange:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      onChange={() => {}}
                    />
                    <label
                      className="form-check-label inline-block text-black"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/reqrespass"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/*Submit*/}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={verify}
                >
                  <span>
                    {auth.loginStatus == "pending" ? (
                      <p>loading</p>
                    ) : (
                      <p>Sign in</p>
                    )}
                  </span>
                </button>
                <div className="flex gap-2">
                  <p className="text-black ">New to black sails?</p>
                  <Link to="/signup">
                    <button className="font-bold  font-style: italic text-cyan-700 ">
                      create account
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
