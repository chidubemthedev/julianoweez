import React from "react";

import star from "../../../assets/star.webp";
import testimonial1 from "../../../assets/testimonial-1.webp";
import testimonial2 from "../../../assets/testimonial-2.webp";
import testimonial3 from "../../../assets/testimonial-3.webp";
import testimonial4 from "../../../assets/testimonial-4.webp";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const TrustPilot = (props: Props) => {
  return (
    <div>
      <h1 className="text-center mt-16 text-[24px] leading-[31px]">
        Trustpilot Reviews
        <span className="font-bold"> 365 • Excellent | 4.8</span>
        <div className="flex justify-center my-[20px]">
          <Image src={star} alt="star" width={300} />
        </div>
      </h1>

      <div className="flex justify-center items-center flex-col md:flex-row flex-wrap gap-[2%] px-[2%] space-y-5 mx-4 md:mx-0">
        <Image src={testimonial1} alt="testimonial" className=" md:w-[48%]" />
        <Image src={testimonial2} alt="testimonial" className=" md:w-[48%]" />
        <Image src={testimonial3} alt="testimonial" className=" md:w-[48%]" />
        <Image src={testimonial4} alt="testimonial" className=" md:w-[48%]" />
      </div>

      <div className="flex flex-col justify-center items-center mt-[60px]">
        <Link
          data-w-id="945a782f-b0c7-247b-26e6-c8e78f81aa3f"
          href="/checkout"
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1.2, 1.2, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
            maxWidth: "385px",
            backgroundImage:
              "linear-gradient(rgb(255, 207, 35), rgb(255, 141, 58))",
            flex: "0 1 auto",
            paddingTop: "16px",
            paddingBottom: "12.8px",
            zIndex: 5,
            color: "rgb(11, 14, 19)",
            textAlign: "center",
            textTransform: "uppercase",
            backgroundColor: "rgb(255, 187, 56)",
            borderRadius: "10px",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px 16px 12.8px",
            fontFamily: "Leaguespartan, sans-serif",
            fontSize: "19.2px",
            fontWeight: 700,
            textDecoration: "none solid rgb(11, 14, 19)",
            display: "flex",
            position: "relative",
            boxSizing: "border-box",
            outline: "rgb(255, 20, 147) solid 1px",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              lineHeight: "25.6px",
              paddingTop: "3px",
              marginLeft: "13px",
              marginRight: "13px",
              fontSize: "25.6px",
              boxSizing: "border-box",
            }}
          >
            JOIN NOW
          </div>
        </Link>
        <p className="my-[20px]">LOCK IN YOUR PRICE BEFORE IT INCREASES</p>
      </div>
    </div>
  );
};

export default TrustPilot;
