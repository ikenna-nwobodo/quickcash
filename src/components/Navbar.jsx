import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1, type: "tween" }}
      className="flex items-center justify-between text-sm w-10/12 mb-8 py-6"
    >
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <img src={require("../assets/images/logo.png")} alt="logo" />
          <p className="font-semibold text-base">QuickCash</p>
        </div>
        <div className="lg:flex hidden items-center  lg:gap-6 font-medium">
          <p className="cursor-pointer border-b-2 border-transparent hover:-translate-y-1 hover:border-primary px-2 pt-2 pb-0.5">
            Demo
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:-translate-y-1 hover:border-primary px-2 pt-2 pb-0.5">
            About
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:-translate-y-1 hover:border-primary px-2 pt-2 pb-0.5">
            Testimonies
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:-translate-y-1 hover:border-primary px-2 pt-2 pb-0.5">
            Products
          </p>
          <p className="cursor-pointer border-b-2 border-transparent hover:-translate-y-1 hover:border-primary px-2 pt-2 pb-0.5">
            Contact Us
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 font-medium">
        <button className="hover:bg-primary/70 hover:text-white hidden lg:block px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1">
          Sign In
        </button>
        <button className="bg-primary text-white hidden md:block px-6 py-3 rounded-lg shadow-lg hover:-translate-y-1">
          Get Your Card
        </button>
      </div>
      <div className="md:hidden block">
        <span class="material-symbols-rounded text-primary cursor-pointer">
          menu
        </span>
      </div>
    </motion.div>
  );
}

export default Navbar;
