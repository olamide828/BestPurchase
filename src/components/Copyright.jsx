import React from "react";

const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex lg:flex-row flex-col justify-between px-10 py-2 font-[poppins] border-t-2 border-gray-300">
      <p>copyright&copy;1999-{year}.</p>
      <p>BestPurchase-Llamide Groups.</p>
    </div>
  );
};

export default Copyright;
