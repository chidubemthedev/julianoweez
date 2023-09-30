import React from "react";
import miniGlobe from "../../../assets/trw-knight-globe.svg";
import globe from "../../../assets/trw-knight-globe-with-ring.svg";
import Image from "next/image";
import BuyButtonComponent from "./BuyButtonComponent";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-[#0d1016]">
      <div className="w-full md:w-[50%] md:h-screen space-y-4 md:pl-[6%] flex flex-col items-center md:items-start justify-center text-center md:text-left text-[20px] leading-[30px] mt-5 md:mt-0">
        <Image src={globe} alt="globe" />
        <p className="font-bold">THE MATRIX IS CRACKED.</p>
        <p>THIS IS YOUR CHANCE.</p>
        <p className="font-bold">A PORTAL EXISTS - AN ESCAPE.</p>
        <p>THIS WILL BE THE MOST IMPORTANT DECISION OF YOUR LIFE.</p>
        <p>TAKE THE RED PILL.</p>
        <p className="font-bold">JOIN THE REAL WORLD.</p>
        <p className="font-bold text-[#f1ba13]">WE ARE WAITING FOR YOU.</p>
      </div>

      <div className="w-full md:w-[50%] bg-black">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center mt-5 md:mt-0">
          <div>
            <Image src={miniGlobe} alt="miniGlobe" />
          </div>
          <div>
            <h1 className="text-[27px] leading-[40px] font-semibold">
              JOIN THE REAL WORLD
            </h1>
            <p className="text-[24px] leading-[36px]">ESCAPE THE MATRIX</p>
          </div>
        </div>

        <div className="p-[4%]">
          <div>
            <label className="">Email Address</label>
            <br />
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full bg-transparent border border-white rounded-md h-[50px] text-[16px] leading-[30px] mt-2 mb-2 p-2"
            />
          </div>
          <div>
            <label>First Name</label>
            <br />
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-transparent border border-white rounded-md h-[50px] text-[16px] leading-[30px] mt-2 mb-2 p-2"
            />
          </div>
          <div>
            <label>Last Name</label>
            <br />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-transparent border border-white rounded-md h-[50px] text-[16px] leading-[30px] mt-2 mb-2 p-2"
            />{" "}
          </div>

          <div className="p-[4%]">
            <h1 className="font-bold text-[25px] leading-[42px]">
              $49.99 / <span className="font-normal">Monthly</span>
            </h1>
            <div className="flex items-start mt-3">
              <input type="checkbox" className="mr-2 mt-2 scale-150" />
              <p className="">
                I accept the Terms and Conditions and Privacy Policy, and agree
                to pay $49.99 USD monthly until I cancel.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 justify-center items-center mt-7">
            <BuyButtonComponent />

            <div>
              <a
                className="buy-with-crypto border border-[#f1ba13] rounded-md py-3 px-[79px]"
                href="https://commerce.coinbase.com/checkout/27fb1896-2175-4453-80b4-7c379958f6da"
              >
                PAY WITH CRYPTO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
