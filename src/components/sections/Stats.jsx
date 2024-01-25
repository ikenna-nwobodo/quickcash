import React from "react";

function Stats() {
  return (
    <div className="bg-gradient-to-br from-primary via-primary/70 to-primary text-white w-full grid place-items-center h-[40vh]">
      <div className="w-4/12 pt-8">
        <p className="text-4xl text-center font-semibold">
          Join thousands using secure payment methods
        </p>
      </div>
      <div className="w-10/12 grid grid-cols-3">
        <div className="p-8 text-center">
          <p className="text-3xl font-bold">1.5M</p>
          <p className="text-sm mt-3 text-white/70">Which is approximately 56% of the consumer of finance sector</p>
        </div>
        <div className="p-8 text-center">
          <p className="text-3xl font-bold">41%</p>
          <p className="text-sm mt-3 text-white/70">Percentage of active users everyday everywhere in Nigeria</p>
        </div>
        <div className="p-8 text-center">
          <p className="text-3xl font-bold"> 3987+</p>
          <p className="text-sm mt-3 text-white/70">
            The online payment system offers electronic alternatives to
            traditional
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
