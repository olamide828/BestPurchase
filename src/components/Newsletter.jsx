import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailTest.test(email)) {
      alert("Email is Valid");
      setEmail("");
    } else {
      alert("Email is invalid");
    }
  };

  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-between items-center py-7 px-5 lg:px-14 border-b border-[#d4a6b6]">
        <div className="mb-4 lg:mb-0 text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl font-[marcellus]">
            Subscribe to our newsletter
          </h1>
        </div>

        <form className="flex flex-col sm:flex-row items-center w-full lg:w-auto space-y-3 sm:space-y-0 sm:space-x-3">
          <input
            className="border-[1px] border-[#5d5b5b] w-full sm:w-[400px] h-[50px] indent-3 focus:outline-dotted focus:outline-[#5d5b5b] focus:border-none rounded-sm"
            placeholder="Your Email Address Here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <button
            onClick={handleSubscribe}
            className="bg-black text-white p-2 w-full sm:w-[150px] hover:bg-[#d4a6b6] transition-all duration-150 ease-in font-semibold rounded-sm"
          >
            SUBSCRIBE
          </button>
        </form>
      </section>
    </div>
  );
};

export default Newsletter;
