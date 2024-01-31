import React from "react";
import Landing from "./sections/Landing";
import Features from "./sections/Features";
import Talk from "./sections/Talk";
import Stats from "./sections/Stats";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 3 }}
      className="w-full flex flex-col items-center bg-white relative z-50"
    >
      <Landing />
      <Features />
      <Talk />
      <Stats />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default Home;
