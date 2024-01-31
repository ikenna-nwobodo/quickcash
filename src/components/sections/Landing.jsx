import React from "react";
// import { motion } from "framer-motion";

function Landing() {
  return (
    <div className="w-full md:h-[90vh] md:min-h-[90vh] py-10 md:py-0 grid place-items-center bg-white relative z-50">
      <div className="w-10/12 flex flex-col md:flex-row overflow-hidden h-full justify-between gap-10">
        <div className="flex flex-col items-center md:items-start justify-center gap-10 md:gap-6 w-full md:w-6/12">
          <p className="text-4xl md:text-7xl hidden md:block font-bold">
            Faster, <br /> cheaper, <br /> seamless.
          </p>
          <p className="text-4xl md:text-7xl block md:hidden text-center font-bold">
            Faster, cheaper, <br /> seamless.
          </p>
          <div className="md:w-8/12 text-center md:text-start text-sm md:font-medium leading-5 tracking-wide">
            Get ready for unparalleled convenience with our latest release, the
            QuickCash credit card. Seamlessly merging innovation with
            reliability, QuickCash empowers you to navigate your financial
            journey with ease. Unlock a world of possibilities and enjoy swift,
            secure transactions wherever you go. Stay ahead with PalmPay and
            embrace the future of effortless banking.
          </div>
          <button className="bg-primary text-white text-xs px-8 py-4 rounded-lg shadow-lg md:w-5/12">
            Get Your Card
          </button>
          <div className="flex justify-between w-full gap-3 sm:w-max sm:gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <p className="font-bold text-xl md:text-3xl">40</p>
              <p className="text-center text-sm">
                Million <br />
                Users
              </p>
            </div>
            <div className="bg-neutral-400 w-[0.5px]"></div>
            <div className="flex items-center gap-3">
              <p className="font-bold text-xl md:text-3xl">₦1M+</p>
              <p className="text-center text-sm">
                Transaction <br /> Completed
              </p>
            </div>
          </div>
        </div>
        <div className="hidden w-max relative md:flex flex-1 items-end justify-end overflow-hidden">
          <img
            src={require("../../assets/images/person.png")}
            alt=""
            width={550}
          />
          {/* <div className="h-[240px] w-[400px] backdrop-blur-xl left-0 bg-primary/20 rounded-3xl border border-black/20 absolute"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Landing;
