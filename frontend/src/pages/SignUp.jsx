import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../services/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { trader } from "../assets";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [isMatching, setIsmatching] = useState(false);

  const auth = useSelector((state) => state.auth);

  const confirmPass = () => {
    if (user.password === user.confirmPass && user.password.length > 3) {
      setIsmatching(true);
    } else {
      setIsmatching(false);
    }
  };

  useEffect(() => {
    confirmPass();
  }, [auth._id, confirmPass]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
    if (auth._id) {
      navigate("/");
    }
    console.log(auth);
  };

  return (
    <div>
      <section className="bg-white mb-20">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src={trader} className="w-full" alt="Phone image" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              {auth.registerStatus === "success" ? (
                <div className="font-bold mb-5 ">
                  {toast.success("Successfully registered, Welcome", {
                    position: "top-center",
                  })}
                </div>
              ) : null}

              <form>
                {/*Full name*/}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Full name"
                    onChange={(e) => {
                      setUser({ ...user, name: e.target.value });
                    }}
                  />
                </div>

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
                      confirmPass();
                      setUser({ ...user, password: e.target.value });
                    }}
                  />
                </div>

                {/*Confirm Password*/}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Cofirm Password"
                    onChange={(e) => {
                      confirmPass();
                      setUser({ ...user, confirmPass: e.target.value });
                    }}
                  />
                </div>

                {isMatching ? (
                  <p className="text-style: italic mb-4 font-bold text-rose-900">
                    It's a match, proceed.
                  </p>
                ) : !isMatching && user.confirmPass.length < 3 ? null : (
                  <p className="text-style: italic mb-4 font-bold text-rose-900">
                    password doesn't match.
                  </p>
                )}

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white onchange:bg-blue-600 onchange:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
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
                </div>

                {/*Submit*/}

                <button
                  type="submit"
                  className={`inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ${
                    isMatching
                      ? "cursor-pointer"
                      : " text-rose-900 cursor-not-allowed pointer-events-none"
                  }`}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={handleSubmit}
                >
                  {auth.registerStatus === "pending" ? "Submiting" : "Sign Up"}
                </button>

                {/*Error messsage */}
                {auth.registerStatus === "rejected" ? (
                  <p className="color-red">
                    {auth.registerError ===
                      `"name" is not allowed to be empty` ||
                    `"email" is not allowed to be empty`
                      ? "Invalid credentials"
                      : null}
                  </p>
                ) : null}

                <p className="text-black">Already have an account?</p>

                {/*Sig in */}
                <Link to="/login">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Sign In
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
