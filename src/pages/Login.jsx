import React, { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
      setShowPassword(!showPassword);
  }

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:gap-0 gap-16">
        <div className="relative bg-[url('https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww')] h-[500px] lg:h-screen bg-cover bg-center lg:flex-[50%]">
          <div className="bg-black/60 inset-0 absolute"></div>
        </div>

        <div className="lg:flex-[50%] bg-[#fff]">
          <div className="flex h-full justify-center items-center flex-col">
            <div>
              {/* <h1 className="font-[alice] text-2xl text-center">
                BestPurchase<span className="text-[#ff6600]">.</span>
              </h1> */}
              <h2 className="text-center font-[alice] text-3xl">Welcome Back</h2>
              <p className="font-[poppins]">Login to Continue Shopping</p>
            </div>
            <form
              action=""
              onSubmit={handleLogin}
              className="flex w-[300px] flex-col gap-5"
            >
              <div className="flex flex-col">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  title="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  name="email"
                  placeholder="yourgmail@example.com"
                  className="border-2 h-[40px] rounded-lg indent-3 border-dashed focus:border-2 outline-none focus:border-dashed focus:border-[#ff6600]"
                />
              </div>

              <div className="flex relative flex-col">
                <label htmlFor="password">Password:</label>
                <input
                  type={ showPassword ? "text" : "password"}
                  id="password"
                  title="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="1234abcd"
                  name="password"
                  className="border-2 h-[40px] rounded-lg indent-3 outline-none border-dashed focus:border-2 focus:border-dashed focus:outline-none focus:border-[#ff6600]"
                />
                {showPassword ? (
                <BsEyeSlashFill
                onClick={togglePassword}
                className={`${!password && "hidden"} absolute top-9 right-5`}
                />
              ) : (
              <IoEye 
                onClick={togglePassword}
                className={`${!password && "hidden"} absolute top-9 right-5`}
                />
              ) }
              </div>

              <button className="bg-[#ff6600] hover:bg-[#ff9046] h-[40px] ">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
