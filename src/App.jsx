import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellerUpload from "./pages/SellerUpload";
import ProductsPage from "./components/ProductsPage";
import SellerDashboard from "./pages/SellerDashboard";
import Home from "./pages/Home";
// import { BsEyeSlashFill } from "react-icons/bs";
// import { IoEye } from "react-icons/io5";
// import { useState } from "react";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import SignUp from "./pages/Login";
import Cart from "./pages/Cart";
import Notifications from "./pages/Notifications";
import SingleProduct from "./pages/singleProduct";

function App() {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  // const togglePassword = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <>
      {/* <div className="bg-white z-50 absolute shadow-xl shadow-black p-4 rounded-lg right-6 w-[200px]">
              <div className="relative z-50">
                <h1 className="font-[poppins] text-center  text-2xl border-b-2 mb-2 pb-2 text-[#ff6600]">
                  Sign Up
                </h1>
                <p className="text-sm text-center">
                  By Signing Up you hereby agree to our &nbsp;{" "}
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
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-white indent-2 text-black border border-dashed border-black"
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
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white indent-2 text-black border border-dashed border-black"
                    />
                  </div>
    
                  <div className="flex flex-col relative">
                    <label htmlFor="password" className="font-[inter]">
                      Password:
                    </label>
                    <input
                      type={ showPassword ? "password" : "text"}
                      id="password"
                      title="password"
                      name="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-white indent-2 text-black border border-dashed border-black"
                    />
                    {showPassword ? (
                      <IoEye 
                    onClick={togglePassword}
                    className="absolute top-7 right-2 cursor-pointer" />
                  ) : (
                  <BsEyeSlashFill 
                    onClick={togglePassword}
                    className="absolute top-7 right-2 cursor-pointer" />)}
                  </div>
                  <button className="bg-[#eb5e01] font-semibold cursor-pointer hover:bg-[#ff6600] px-4 py-2 my-2 text-white rounded-full">
                    Sign Up
                  </button>
                </form>
              </div>
            </div> */}
      <div className="selection:bg-[#ff6600] selection:text-white">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/cart" element={<Cart /> } />

          <Route path="/seller" element={<SellerDashboard />}>
            <Route path="/seller/upload" index element={<SellerUpload />} />
            <Route path="/seller/products" element={<ProductsPage />} />
            <Route path="/seller/notifications" element={<Notifications /> } />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
