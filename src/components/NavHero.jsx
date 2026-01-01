import React, { useState, useRef } from "react";
import { BiUpload } from "react-icons/bi";
import { BsCart4, BsEyeSlash, BsEyeSlashFill } from "react-icons/bs";
import { CiSearch, CiUser } from "react-icons/ci";
import { GoFileMedia } from "react-icons/go";
import { IoClose, IoEye } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavHero = () => {
  const [media, setMedia] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
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

  const fileInputRef = useRef(null);

  const showMedia = () => setMedia(true);
  const closeMedia = () => setMedia(false);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSearchValue(file.name);
    setImagePreview(URL.createObjectURL(file));
  };

  const clearSearch = () => {
    setSearchValue("");
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section
     className="relative bg-[url('https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200&auto=format&fit=crop&q=60')] bg-cover bg-center lg:bg-cover lg:bg-center h-[100vh] lg:h-[120vh]">
      <div className="absolute inset-0 bg-black/50"></div>

      {/* NAVBAR */}
      <div className="relative z-50 flex justify-between items-center px-8 py-4">
        <Link to="/">
          <h1 className="font-[alice] text-4xl text-white">
            BestPurchase<span className="text-[#FF6600]">.</span>
          </h1>
        </Link>

        <div className="lg:flex hidden relative z-50 gap-6 items-center text-white">
          <NavLink to="/cart">
            <BsCart4 className="text-2xl cursor-pointer" />
          </NavLink>

          <NavLink to="/login">
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
        <div className="bg-white z-[1000px] absolute p-4 rounded-lg right-6 w-[200px]">
          <div className="relative z-[1000px]">
            <h1 className="font-[poppins] text-center text-2xl border-b-2 mb-2 pb-2  text-[#ff6600]">
              Sign Up
            </h1>
            <p className="text-sm text-center">
              By Signing Up you hereby agree to our &nbsp;
              <span className="text-blue-700 underline">
                terms and condition
              </span>
            </p>
            <form action="" className="relative py-2 z-50 flex flex-col gap-2">
              <div className="flex flex-col">
                <label htmlFor="fullname" className="font-[inter]">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fulllname"
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
      )}

      {/* HERO */}
      <div className={`relative z-50 px-4 lg:px-20 pt-28`}>
        <h1 className="text-white text-[40px] lg:text-[42px] leading-tight max-w-[400px] font-[poppins] w-full lg:max-w-[700px]">
          The leading B2B ecommerce platform for global trade
        </h1>

        <p className="text-white/80 mt-3 max-w-[600px] font-[poppins]">
          Source products from verified suppliers worldwide
        </p>

        {/* SEARCH BAR */}
        <form className="mt-8 sticky flex justify-center items-center w-full lg:w-[700px] h-[60px] bg-white rounded-s-full border-2 border-[#ff6600] focus-within:ring-2 focus-within:ring-[#ff6600] transition overflow-hidden">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="What are you looking for?"
            className="flex-1 font-[poppins] h-full px-6 outline-none text-black"
          />

          {searchValue && (
            <button
              type="button"
              onClick={clearSearch}
              className="p-3 rounded-full text-gray-500 hover:text-black hover:bg-gray-200"
            >
              <IoClose className="text-xl" />
            </button>
          )}

          <div className="flex items-center gap-3 px-3">
            <button
              type="button"
              onClick={showMedia}
              className={`${searchValue && "hidden"} p-2 rounded-full hover:bg-gray-200`}
            >
              <GoFileMedia className="lg:text-2xl text-xl text-black" />
            </button>

            <button
              type="submit"
              className="lg:flex hidden items-center gap-2 bg-[#FF6600] hover:bg-[#ff8800] text-white px-3 lg:px-5 py-2 rounded-full font-semibold"
            >
              <CiSearch className="lg:text-2xl text-xl" />
              Search
            </button>
            <button>
              <CiSearch className="lg:text-2xl lg:hidden text-xl" />
            </button>
          </div>
        </form>

        {/* IMAGE SEARCH PANEL */}
        {media && (
          <div className="mt-2 w-fit lg:w-[700px] pb-6 h-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-between items-center px-4 py-2 border-b">
              <p className="font-semibold">
                Find product inspiration with Image Search
              </p>
              <button
                onClick={closeMedia}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <IoClose className="text-xl" />
              </button>
            </div>

            <div className="h-[240px] px-4 py-4">
              <div className="h-full w-full flex flex-col items-center justify-center gap-4 border-2 border-dashed border-gray-300 rounded-lg">
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-h-[130px] object-contain rounded-md"
                    />

                    <div className="flex gap-3">
                      <label
                        htmlFor="upload"
                        className="cursor-pointer bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-full text-sm font-medium"
                      >
                        Change image
                      </label>

                      <button
                        onClick={clearSearch}
                        className="bg-red-100 hover:bg-red-200 text-red-600 px-4 py-1 rounded-full text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <BiUpload className="text-3xl text-gray-600" />
                    <p className="text-sm text-center text-gray-600">
                      Drag & drop an image or upload a file
                    </p>

                    <label
                      htmlFor="upload"
                      className="cursor-pointer bg-[#ff6600] hover:bg-[#ff8800] text-white px-6 py-2 rounded-full font-semibold"
                    >
                      Upload image
                    </label>
                  </>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  id="upload"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NavHero;
