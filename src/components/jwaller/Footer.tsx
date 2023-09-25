import React from "react";
import logo from "../../../assets/jwaller-logo.png";
import Image from "next/image";
import instagram from "../../../assets/insta.png";
import twitter from "../../../assets/twitter.png";
import youtube from "../../../assets/youtube.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="flex justify-around items-center py-[20px] mb-28">
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

      <div className="flex flex-col md:flex-row justify-around items-center pb-14">
        <p>© Copyright 2023. All rights reserved.</p>
        <p>BACK TO TOP</p>
        <div className="flex gap-5">
          <Image src={instagram} alt="instagram" height={20} />
          <Image src={twitter} alt="twitter" />
          <Image src={youtube} alt="youtube" />
        </div>
      </div>
    </>
  );
};

export default Footer;
