import React from "react";
import Landing from "./sections/Landing";
import Features from "./sections/Features";
import Talk from "./sections/Talk";
import Stats from "./sections/Stats";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <Landing />
      <Features />
      <Talk />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
