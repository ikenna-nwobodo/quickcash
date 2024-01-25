import React from "react";

function Talk() {
  return (
    <div className="h-max w-10/12 flex flex-col justify-center items-center gap-10">
      <div className="grid grid-cols-2 h-[70vh] w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-start w-10/12 gap-4">
            <p className="text-2xl font-semibold">
              The backbone for internet business
            </p>
            <p className="text-sm text-black/80">
              With QuickCash as your financial ally, experience a seamless
              backbone for internet-based ventures. Simplify purchases, enhance
              security, and unlock new possibilities in the digital realm. Stay
              tuned for a game-changing addition to your online financial
              toolkit – QuickCash by Palmpay. Your gateway to effortless and
              secure internet business transactions is just around the corner.
            </p>
          </div>
        </div>
        <div className="">
          <div className="relative h-full flex flex-col justify-center items-center">
            <img
              src={require("../../assets/images/cards.png")}
              alt=""
              className="z-30"
            />
            <div className="absolute features bg-gradient-to-r from-primary/30 to-teal-500 h-[20rem] w-[20rem] filter blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-center italic">
            “Simply better than any other product out, i really recommend for
            both beginner and advanced users”
          </p>
          <div className="flex gap-6 items-center">
            <div className="bg-primary h-8 w-8 rounded-full"></div>
            <div>
              <p className="text-sm font-medium">Egbon Adugbo</p>
              <p className="text-xs text-black/60">
                Director of technology, Sod Co.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-center italic">
            “Simply better than any other product out, i really recommend for
            both beginner and advanced users”
          </p>
          <div className="flex gap-6 items-center">
            <div className="bg-primary h-8 w-8 rounded-full"></div>
            <div>
              <p className="text-sm font-medium">Egbon Adugbo</p>
              <p className="text-xs text-black/60">
                Director of technology, Sod Co.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-center italic">
            “Simply better than any other product out, i really recommend for
            both beginner and advanced users”
          </p>
          <div className="flex gap-6 items-center">
            <div className="bg-primary h-8 w-8 rounded-full"></div>
            <div>
              <p className="text-sm font-medium">Egbon Adugbo</p>
              <p className="text-xs text-black/60">
                Director of technology, Sod Co.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-center italic">
            “Simply better than any other product out, i really recommend for
            both beginner and advanced users”
          </p>
          <div className="flex gap-6 items-center">
            <div className="bg-primary h-8 w-8 rounded-full"></div>
            <div>
              <p className="text-sm font-medium">Egbon Adugbo</p>
              <p className="text-xs text-black/60">
                Director of technology, Sod Co.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 grid grid-cols-2 gap-6 w-10/12 mt-[15vh]">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex gap-7">
            <div className="bg-primary w-12 h-12 p-2 rounded-2xl grid place-items-center">
              <img
                src={require("../../assets/images/pods.png")}
                alt=""
                className="w-10"
              />
            </div>
            <div>
              <p className="text-base font-semibold">Easy Transfers</p>
              <p className="text-black/70 text-sm">Send money to anyoneeee</p>
            </div>
          </div>
          <div className="flex gap-7">
            <div className="bg-yellow-300 w-12 h-12 p-2 rounded-2xl grid place-items-center">
              <img
                src={require("../../assets/images/percent.png")}
                alt=""
                className="w-10"
              />
            </div>
            <div>
              <p className="text-base font-semibold">Add Crypto Wallet</p>
              <p className="text-black/70 text-sm">
                Connect your crypto wallet
              </p>
            </div>
          </div>
          <div className="flex gap-7">
            <div className="bg-slate-300 w-12 h-12 p-2 rounded-2xl grid place-items-center">
              <img
                src={require("../../assets/images/check.png")}
                alt=""
                className="w-10"
              />
            </div>
            <div className="">
              <p className="text-base font-semibold">Worldwide Acceptance</p>
              <p className="text-black/70 text-sm">
                Pay for anything, anywhere
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">
            A fully integrated suit of payment products
          </p>
          <p className="text-sm font-semibold">
            Instant electronic payments are much faster than the traditional
            methods of payments
          </p>
          <p className="text-sm text-black/70">
            A fully integrated payment suite streamlines diverse financial
            transactions, combining online payments, mobile transactions, and
            point-of-sale interactions. This unified approach simplifies user
            experience, offering an efficient and cohesive solution for managing
            finances in one platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Talk;
