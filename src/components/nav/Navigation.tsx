import React from "react";
import logo from "../../../assets/jwaller-logo.png";
import Image from "next/image";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="flex justify-around items-center border-b border-[#dcd3d3] py-[20px]">
      <div>
        <Image width={138} src={logo} alt="logo" />
      </div>
      <div className="hidden md:flex items-center justify-center gap-[13px]">
        <div className="text-[13px] leading-[19px]">
          <a href="">THE REAL WORLD</a>
        </div>
        <div className="text-[13px] leading-[19px]">
          <a href="">THE WAR ROOM</a>
        </div>
        <div className="text-[13px] leading-[19px]">
          <a href="">ABOUT</a>
        </div>
        <div className="text-[13px] leading-[19px]">
          <a href="">TESTIMONIALS</a>
        </div>
        <div className="text-[13px] leading-[19px]">
          <a href="">NEWSLETTER</a>
        </div>
      </div>
      <div>
        <button className="border-2 border-[#e6c87d] px-4 py-1 reveal-circle">
          JOIN US
        </button>
      </div>
    </div>
  );
};

export default Navigation;
