import React, { useState } from "react";
import { BsCart4, BsEyeSlashFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoEye } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [signUp, setSignUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const showSignUp = () => {
    setSignUp(!signUp);
  };

  return (
    <section>

        <div className=" flex bg-gray-100 justify-between items-center px-8 py-4">
          <Link to="/">
            <h1 className="font-[alice] text-4xl text-black">
              BestPurchase<span className="text-[#FF6600]">.</span>
            </h1>
          </Link>

          <div>
            <ul className="flex gap-6">
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <li>About</li>
              <NavLink to="/products">
                <li>Products</li>
              </NavLink>
            </ul>
          </div>

          <div className="flex relative z-50 gap-6 items-center text-black">
            
            <NavLink to="/cart">
              <BsCart4 className="text-2xl cursor-pointer" />
            </NavLink>

            <NavLink to="/signup">
              <div className="flex items-center gap-2 cursor-pointer hover:underline">
                <CiUser className="text-2xl" />
                <span className="font-[poppins]">Sign in</span>
              </div>
            </NavLink>
            <button
              onClick={showSignUp}
              className={`bg-[#FF6600] ${
                signUp && "animate-pulse"
              } hover:bg-[#c95100] px-10 py-2 rounded-full font-semibold`}
            >
              Create account
            </button>
          </div>
        </div>


      {/* showSignUp */}

      {signUp && (
        <div className="fixed top-0 right-0 left-0 mt-20">
          <div className="bg-white shadow-2xl z-50  absolute p-4 rounded-lg right-6 w-[200px]">
            <div className="relative z-50">
              <h1 className="font-[poppins] text-center text-2xl border-b-2 mb-2 pb-2  text-[#ff6600]">
                Sign Up
              </h1>
              <p className="text-sm text-center">
                By Signing Up you hereby agree to our &nbsp;
                <span className="text-blue-700 underline">
                  terms and condition
                </span>
              </p>
              <form
                action=""
                className="relative py-2 z-50 flex flex-col gap-2"
              >
                <div className="flex flex-col">
                  <label htmlFor="fullname" className="font-[inter]">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    title="fullname"
                    placeholder="Enter Fullname Here"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="bg-white relative placeholder:text-sm indent-2 z-50 text-black border border-dashed border-black"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="font-[inter]">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    title="email"
                    name="email"
                    placeholder="Enter Email Here"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white placeholder:text-sm indent-2 text-black border border-dashed border-black"
                  />
                </div>

                <div className="flex flex-col relative">
                  <label htmlFor="password" className="font-[inter]">
                    Password:
                  </label>
                  <input
                    type={showPassword ? "password" : "text"}
                    id="password"
                    title="password"
                    name="password"
                    placeholder="Enter Password Here"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white placeholder:text-sm indent-2 text-black border border-dashed border-black"
                  />
                  {showPassword ? (
                    <IoEye
                      onClick={togglePassword}
                      className="absolute top-7 right-2 cursor-pointer"
                    />
                  ) : (
                    <BsEyeSlashFill
                      onClick={togglePassword}
                      className="absolute top-7 right-2 cursor-pointer"
                    />
                  )}
                </div>
                <button className="bg-[#eb5e01] font-semibold cursor-pointer hover:bg-[#ff6600] px-4 py-2 my-2 text-white rounded-full">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
