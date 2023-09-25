import React from "react";
import jbutton from "../../../assets/jbutton.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Wayout = (props: Props) => {
  return (
    <div className="wayout-background">
      <div className="flex flex-col items-center justify-center text-center py-32 px-2">
        <h1 className="text-[35px] leading-[42px] font-bold">
          THE REAL WORLD IS YOUR WAY OUT
        </h1>
        <p className="text-[20px] leading-[31px] font-bold mt-5">
          Our students don't receive report cards; they receive paychecks.
        </p>
        <p className="text-[20px] leading-[31px] mt-5">
          We have thousands of students who are earning enough money to travel{" "}
          <br /> and work from anywhere.
        </p>
        <p className="text-[20px] leading-[31px] mt-5">
          All thanks to our millionaire professors who teach them life changing{" "}
          <br /> business skills.
        </p>
        <div className="mt-12">
          {/* <button className="border-2 border-[#e6c87d] p-4 rounded-md hover:scale-110 transition duration-300 ease-in-out">
            JOIN NOW{" "}
            <span>
              <Image src={jbutton} alt="jbutton" />
            </span>
          </button> */}

          <Link
            data-w-id="4dd4e19f-65d0-0b5f-65dc-d389a91e0560"
            href="/therealworld"
            style={{
              opacity: 1,
              transform: "matrix(1.06456, 0, 0, 1.06456, 0, 0)",
              transformStyle: "preserve-3d",
              willChange: "transform",
              gap: "12px",
              backgroundImage:
                "linear-gradient(rgba(255, 187, 56, 0.3), rgba(230, 200, 125, 0.07) 31%, rgba(255, 187, 56, 0.13))",
              paddingLeft: "37px",
              paddingRight: "24px",
              zIndex: 2,
              width: "auto",
              height: "72.9861px",
              border: "2.22222px solid rgb(230, 200, 125)",
              borderRadius: "6px",
              justifyContent: "space-around",
              alignItems: "center",
              textDecoration: "none solid rgb(0, 0, 238)",
              display: "flex",
              position: "relative",
              maxWidth: "100%",
              boxSizing: "border-box",
              outline: "rgb(255, 20, 147) solid 1.11111px",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            <div
              style={{
                textDecoration: "none solid rgb(255, 255, 255)",
                zIndex: 1000,
                color: "rgb(255, 255, 255)",
                fontSize: "20.8px",
                display: "block",
                fontWeight: 700,
                boxSizing: "border-box",
              }}
            >
              JOIN NOW
            </div>
            <img
              src="https://uploads-ssl.webflow.com/645ee27460eff05ed801596c/645f2bdf3b5356316870ccb2_image%2028%20(1).png"
              loading="lazy"
              alt=""
              style={{
                maxWidth: "100%",
                display: "block",
                verticalAlign: "middle",
                boxSizing: "border-box",
                border: "0px none rgb(0, 0, 238)",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wayout;
