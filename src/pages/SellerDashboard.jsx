import { BiHome, BiNotification, BiUpload } from "react-icons/bi";
import {
  BsCloudUploadFill,
  BsFile,
  BsUpload,
  BsViewList,
} from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/bg-imag.jpeg";

const SellerDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 flex flex-col justify-between fixed inset-0 bg-black text-white p-6">
        <div>
          <h2 className="text-2xl font-bold mb-8">Welcome back</h2>

          <div className="flex cursor-pointer items-center gap-4">
            <img
              src={logo}
              className="h-[50px] w-[50px] rounded-full object-cover"
              alt="user-avatar"
            />
            <h1 className="font-semibold">{"Adegboyega Olamide Michael"}</h1>
          </div>

          <nav className="flex flex-col gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#ff6600] text-white px-4 py-2 rounded"
                  : "hover:bg-gray-800 px-4 py-2 rounded flex gap-2 items-center"
              }
            >
              <BiHome /> Home
            </NavLink>

            <NavLink
              to="/seller/upload"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#ff6600] text-white px-4 py-2 rounded flex gap-2 items-center"
                  : "hover:bg-gray-800 px-4 py-2 rounded flex gap-2 items-center"
              }
            >
              <BsCloudUploadFill /> Upload Product
            </NavLink>

            <NavLink
              to="/seller/products"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#ff6600] px-4 py-2 rounded flex gap-2 items-center"
                  : "hover:bg-gray-800 px-4 py-2 rounded flex gap-2 items-center"
              }
            >
              <BsViewList /> View Products
            </NavLink>

            <NavLink
              to="/seller/notifications"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#ff6600] px-4 py-2 rounded flex gap-2 items-center"
                  : "hover:bg-gray-800 px-4 py-2 rounded flex gap-2 items-center"
              }
            >
              <BiNotification /> Notifications
            </NavLink>
          </nav>
        </div>
        <div>
          <Link to="/">
            <h1 className="text-2xl font-[alice]">
              BestPurchase<span className="text-[#ff6600]">.</span>{" "}
            </h1>
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default SellerDashboard;
