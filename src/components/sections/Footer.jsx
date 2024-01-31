import React from "react";

function Footer() {
  return (
    <div className="fixed bottom-0 z-0 bg-[#ECECEC] bg-gradient-to-br from-[#ececec] to-primary/30 text-black min-h-[40vh] md:h-[40vh] w-full grid place-items-center">
      <div className="w-10/12 flex flex-col gap-6 justify-center items-center py-6">
        <div className="grid md:flex items-center gap-6 justify-between w-full">
          <p className="text-3xl font-bold md:w-3/12">
            Make secure payments & grow your online business
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src={require("../../assets/images/location.png")}
                alt=""
                className="w-3"
              />
              <p className="w-4/5 text-sm">
                20 Opebi Rd, Opebi, Lagos 101233, Nigeria
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={require("../../assets/images/mail.png")}
                alt=""
                className="w-3"
              />
              <p className="w-4/5 text-sm">support@quickcash.com</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 w-10/12 h-[0.5px]"></div>
        <div className="grid md:flex w-full gap-4 text-sm">
          <p>Demo</p>
          <p>About</p>
          <p>Testimonies</p>
          <p>Products</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
