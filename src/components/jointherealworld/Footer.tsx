import React from "react";
import Link from "next/link";
import world from "../../../assets/the-real-world.webp";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center my-[30px]">
        <Link
          data-w-id="5fe83bde-983f-dd92-b7dd-9f3e5567a2a4"
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1.2, 1.2, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            maxWidth: "238px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "16px",
            paddingBottom: "12.8px",
            backgroundImage:
              "linear-gradient(rgb(255, 207, 35), rgb(255, 141, 58))",
            flex: "0 1 auto",
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
            outline: "rgb(11, 14, 19) none 0px",
          }}
          href="/checkout"
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
            join now
          </div>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <Image src={world} alt="world" width={300} />
        <Link href="/checkout">
          <button className="reveal-circle border border-[#e8e8e8] text-[white] text-[19px] leading-[29px] font-bold px-4 py-1 rounded-md">
            LOGIN
          </button>
        </Link>
      </div>

      <div className="flex flex-col space-y-6 text-[20px] leading-[31px]">
        <div className="flex gap-[30%] bg-red-500 w-[60%]">
          <p className="underline underline-offset-4">Log In</p>
          <p>
            Owned and Managed by New Era Learning <br /> LLC
          </p>
        </div>
        <div className="flex gap-[30%] bg-red-500 w-[60%]">
          <p className="underline underline-offset-4">Manage Membership</p>
          <p>Distributed by our partners: </p>
        </div>
        <div className="flex gap-[30%] bg-red-500 w-[60%]">
          <p className="underline underline-offset-4">Terms & Conditions</p>
          <p>
            EU: IM FOLLOWING Sp z o oPlac Zomkaway <br /> 8/5, Warsaw, Poland
            00-277
          </p>
        </div>
        <div className="flex gap-[30%] bg-red-500 w-[60%] ">
          <p className="underline underline-offset-4">Privacy Policy</p>
          <p>
            US: Thrifty Consulting LLC <br /> 800 North State St Ste 403, Dover,
            DE 19901
          </p>
        </div>
        <div className="flex gap-[30%] bg-red-500 w-[60%]">
          <p className="underline underline-offset-4">
            Support: support@jointherealworld.com
          </p>
          <p>
            Legendary Courses, Inc <br />
            221 N. Broad St.Middletown, DE 19709
          </p>
        </div>
      </div>

      <div className="text-center space-y-7 mt-9 px-[2%]">
        <p>
          Everything taught within The Real World is for education purposes
          only. It is up to each student to implement and do the work.
        </p>
        <p>
          The Real World team doesn't guarantee any profits or financial
          success.
        </p>
      </div>
    </div>
  );
};

export default Footer;
