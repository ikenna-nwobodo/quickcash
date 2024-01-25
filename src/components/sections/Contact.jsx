import React from "react";

function Contact() {
  return (
    <div className="text-black w-10/12 grid place-items-center h-[65vh]">
      <div className="w-full grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Ready to get started?</p>
          <p className="text-sm text-black/60">
            With QuickCash as your financial ally, experience a seamless
            backbone for internet-based ventures. Simplify purchases, enhance
            security, and unlock new possibilities in the digital realm. Stay
            tuned for a game-changing addition to your online financial toolkit
            – QuickCash by Palmpay. Your gateway to effortless and secure
            internet business transactions is just around the corner.
          </p>
          <div className="grid grid-cols-2 gap-3 w-10/12">
            <button className="bg-primary text-xs px-2 py-3 border border-primary rounded-lg shadow-xl text-white hover:-translate-y-1">
              Join Now
            </button>
            <button className="px-2 py-3 border text-xs border-black rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-primary hover:text-primary">
              Learn More
            </button>
          </div>
        </div>
        <div className="p-4 gap-2 border border-black/20 rounded-2xl flex flex-col justify-between cursor-default hover:border-black">
          <div className="bg-black p-2 w-10 h-10 rounded-lg grid place-items-center">
            <img
              src={require("../../assets/images/wifi.png")}
              alt=""
              className="w-6"
            />
          </div>
          <p className="text-xl font-semibold">Store information on cloud</p>
          <p className="text-sm text-black/60 flex-1">
            Store your banking info and transaction history securely on our
            cloud at Palmpay. Enjoy the convenience of accessing your financial
            details anytime, anywhere, across devices. Our robust encryption
            ensures data confidentiality. Redefine convenience and security with
            us.
          </p>
        </div>
        <div className="p-4 gap-2 border border-black/20 rounded-2xl flex flex-col justify-between cursor-default hover:border-black">
          <div className="bg-black p-2 w-10 h-10 rounded-lg grid place-items-center">
            <img
              src={require("../../assets/images/dots.png")}
              alt=""
              className="w-6"
            />
          </div>
          <p className="text-xl font-semibold">Connect dots smartly</p>
          <p className="text-sm text-black/60 flex-1">
            Our smart connectivity allows you to access and manage your data
            seamlessly across devices. Experience the ease of navigating your
            financial landscape efficiently while ensuring data security through
            our advanced encryption. Join us in connecting the dots smartly,
            making your financial experience smarter and more connected.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
