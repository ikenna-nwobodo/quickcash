import React from "react";

function Features() {
  return (
    <div className="bg-black text-white w-full grid place-items-center h-[40vh]">
      <div className="flex flex-col md:flex-row w-10/12 gap-10 py-4 md:py-8">
        <div className="flex flex-col gap-2 p-2 justify-center">
          <div className="bg-primary p-2 rounded-full w-max grid place-items-center">
            <img
              src={require("../../assets/images/watch.png")}
              alt=""
              className="w-[20px]"
            />
          </div>
          <p className="text-base font-semibold text-white/90">
            Solve Real Time Problems
          </p>
          <p className="text-xs text-white/50">
            Meet Quick Cash – your solution to banking hassles! Our new debit
            card simplifies your life with instant transactions, fraud
            protection, and 24/7 access. Skip the wait, embrace the ease. Quick
            Cash, making banking a breeze!
          </p>
        </div>
        <div className="py-6 hidden md:block">
          <div className="w-[0.5px] h-full bg-white/50"></div>
        </div>
        <div className="flex flex-col gap-2 p-2 justify-center">
          <div className="bg-primary p-2 rounded-full w-max grid place-items-center">
            <img
              src={require("../../assets/images/lock.png")}
              alt=""
              className="w-[20px]"
            />
          </div>
          <p className="text-base font-semibold text-white/90">
            Secure & Safe Payments
          </p>
          <p className="text-xs text-white/50">
            Secure & Safe Payments – Your worry-free solution for seamless
            transactions! Introducing Quick Cash, our new debit card designed to
            prioritize your peace of mind. Enjoy instant transactions, fraud
            protection, and 24/7 access to your funds.
          </p>
        </div>
        <div className="py-6 hidden md:block">
          <div className="w-[0.5px] h-full bg-white/50"></div>
        </div>
        <div className="flex flex-col gap-2 p-2 justify-center">
          <div className="bg-primary p-2 rounded-full w-max grid place-items-center">
            <img
              src={require("../../assets/images/headphone.png")}
              alt=""
              className="w-[20px] h-[20px]"
            />
          </div>
          <p className="text-base font-semibold text-white/90">
            24/7 Customer Support
          </p>
          <p className="text-xs text-white/50">
            Secure & Safe Payments – Your worry-free solution for seamless
            transactions! Introducing Quick Cash, our new debit card designed to
            prioritize your peace of mind. Enjoy instant transactions, fraud
            protection, and 24/7 access to your funds.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
