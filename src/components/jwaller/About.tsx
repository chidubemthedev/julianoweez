import Image from "next/image";
import React from "react";

import jwaller from "../../../assets/jwaller.webp";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#0f0f16]">
      <div className="w-[100%] md:w-[50%] text-center md:text-left px-2">
        <h1 className="text-[35px] leading-[42px]">About Me</h1>
        <p className="text-[20px] leading-[31px] mt-14">
          I aim to change as many lives as possible online through social media.
        </p>
        <p className="text-[20px] leading-[31px] mt-5">
          I guide individuals worldwide, especially those living alone in a
          small town and seeking advice on business, mindset, health, and
          relationships.
        </p>
        <div className="mt-12 ">
          {/* <button className="border-2 border-[#e6c87d] p-4 rounded-md hover:scale-110 transition duration-300 ease-in-out">
            READ MY STORY
          </button> */}

          <a
            data-w-id="5b038742-85ed-1ee2-3168-e68633829701"
            href="/about"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              backgroundImage:
                "linear-gradient(rgba(230, 200, 125, 0.13), rgba(230, 200, 125, 0))",
              border: "2.22222px solid rgb(230, 200, 125)",
              borderRadius: "6px",
              padding: "16px 32px",
              textDecoration: "none solid rgb(0, 0, 238)",
              boxShadow: "rgba(230, 200, 125, 0.3) 0px 2px 90px 0px",
              maxWidth: "100%",
              display: "inline-block",
              boxSizing: "border-box",
              outline: "rgb(0, 0, 238) none 0px",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: "rgb(255, 255, 255)",
                textDecoration: "none solid rgb(255, 255, 255)",
                boxSizing: "border-box",
              }}
            >
              READ MY STORY
            </div>
          </a>
        </div>
      </div>

      <div className="px-4 py-8">
        <Image src={jwaller} alt="jwaller" />
      </div>
    </div>
  );
};

export default About;
