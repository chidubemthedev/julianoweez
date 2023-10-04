import Image from "next/image";
import React from "react";
import mainImage from "../../../assets/join-main-image.webp";
import play from "../../../assets/play.svg";
import Link from "next/link";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center py-[20px] px-[2%]">
        <div>
          <Link href="/checkout">
            <button className="reveal-circle border border-[#e8e8e8] text-[white] text-[19px] leading-[29px] font-bold px-4 py-1 rounded-md">
              LOGIN
            </button>
          </Link>
        </div>

        <div>
          <Link href="/checkout">
            <button className="bg-[#ffbb38] text-[#0b0e13] text-[19px] leading-[29px] font-bold px-4 py-1 rounded-md">
              JOIN NOW
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image src={mainImage} alt="main" width={126} height={126} />

        <div className="mt-10 px-2 flex flex-col text-center">
          <h1 className="text-[30px] leading-[48px]">
            Making money is a <br /> <span className="font-bold">SKILL</span>
          </h1>
          <h1 className="text-[30px] leading-[48px]">
            We will <span className="font-bold">teach you </span> how to{" "}
            <span className="font-bold">master it. </span>
          </h1>
        </div>

        <div className="mt-4">
          {/* <video width={800} controls>
            <source
              src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/fc9bf6e00fb297a9a676c5f45ca417dd/iframe?muted=true&autoplay=true&poster=https%3A%2F%2Fcustomer-29d3r31yjz332bf4.cloudflarestream.com%2Ffc9bf6e00fb297a9a676c5f45ca417dd%2Fthumbnails%2Fthumbnail.jpg"
              type="video/mp4"
            />
          </video> */}
          <iframe
            src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/fc9bf6e00fb297a9a676c5f45ca417dd/iframe?muted=true&autoplay=true&poster=https%3A%2F%2Fcustomer-29d3r31yjz332bf4.cloudflarestream.com%2Ffc9bf6e00fb297a9a676c5f45ca417dd%2Fthumbnails%2Fthumbnail.jpg"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            className="w-[100vw] h-[27vh] md:w-[800px] md:h-[450px]"
          ></iframe>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-[30px]">
          <Link href="/checkout">
            <button className="bg-[#ffbb38] text-[#0b0e13] text-[19px] leading-[29px] font-bold px-4 py-4 rounded-md">
              JOIN THE REAL WORLD
            </button>
          </Link>
          <button className="border border-[#e8e8e8] px-[65px] py-4 rounded-md">
            SCROLL DOWN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
