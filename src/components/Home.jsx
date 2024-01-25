import React from "react";
import Landing from "./sections/Landing";
import Features from "./sections/Features";

function Home() {
  return (
    <div className="w-10/12 flex flex-col gap-10">
      <Landing />
      <Features/>
    </div>
  );
}

export default Home;
