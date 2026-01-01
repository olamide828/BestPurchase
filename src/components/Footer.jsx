import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className="flex lg:flex-row flex-col gap-5 justify-between px-10 py-6">
        <div>
          <NavLink to="/">
            <h1 className="font-[alice] text-4xl text-black">
              BestPurchase<span className="text-[#FF6600]">.</span>
            </h1>
          </NavLink>
        </div>

        <div>
          <ul className="font-[inter] flex flex-col gap-3">
            <NavLink to="/">
              <li
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ff6600]"
                    : "text-black hover:text-[#ff6600]"
                }
              >
                Home
              </li>
            </NavLink>
            <Link to="/seller/upload">
              <li>About</li>
            </Link>
            <NavLink to="/products">
              <li
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ff6600]"
                    : "text-black hover:text-[#ff6600]"
                }
              >
                Products
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="font-[inter] flex flex-col gap-3">
          <p>234th str, Mary Magdalene, New York. United States.</p>
          <p>+234 907 007 9206</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
