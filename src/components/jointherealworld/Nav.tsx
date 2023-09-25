import Image from "next/image";
import React from "react";
import mainImage from "../../../assets/join-main-image.webp";
import Link from "next/link";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center py-[20px] px-[2%]">
        <div>
          <Link href="#">
            <button className="reveal-circle border border-[#e8e8e8] text-[white] text-[19px] leading-[29px] font-bold px-4 py-1 rounded-md">
              LOGIN
            </button>
          </Link>
        </div>

        <div>
          <Link href="/therealworld">
            <button className="bg-[#ffbb38] text-[#0b0e13] text-[19px] leading-[29px] font-bold px-4 py-1 rounded-md">
              JOIN NOW
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image src={mainImage} alt="main" width={126} height={126} />
        <div style={{ textAlign: "center", boxSizing: "border-box" }}>
          <img
            src="images/Group-427319400-1.webp"
            loading="lazy"
            width="113"
            alt=""
            style={{
              maxWidth: "100%",
              display: "inline-block",
              verticalAlign: "middle",
              boxSizing: "border-box",
              border: "0px none rgb(255, 255, 255)",
            }}
          />
          <div
            style={{
              marginRight: "0px",
              marginBottom: "0px",
              marginLeft: "0px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "768px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  marginTop: "0px",
                  marginRight: "0px",
                  marginLeft: "0px",
                  marginBottom: "24px",
                  boxSizing: "border-box",
                }}
              >
                <h1
                  data-w-id="03d64da6-4dd7-aa35-a636-04755b9271e4"
                  style={{
                    opacity: 1,
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "60px",
                    fontWeight: 400,
                    lineHeight: "60px",
                    boxSizing: "border-box",
                    margin: "0px",
                  }}
                >
                  <span style={{ boxSizing: "border-box" }}>Making money</span>{" "}
                  <span style={{ boxSizing: "border-box" }}>is a</span>{" "}
                  <span
                    style={{
                      color: "rgb(255, 255, 255)",
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 900,
                      boxSizing: "border-box",
                    }}
                  >
                    <strong
                      style={{
                        color: "rgb(255, 255, 255)",
                        fontWeight: 700,
                        boxSizing: "border-box",
                      }}
                    >
                      skill
                    </strong>
                    .
                  </span>
                </h1>
              </div>
              <p
                data-w-id="03d64da6-4dd7-aa35-a636-04755b9271e6"
                style={{
                  opacity: 1,
                  fontSize: "38px",
                  marginBottom: "0px",
                  marginTop: "0px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  data-w-id="33ba81fa-bc93-d521-ee83-b04d6ccc260a"
                  style={{
                    opacity: 1,
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                    transformStyle: "preserve-3d",
                    boxSizing: "border-box",
                  }}
                >
                  We{" "}
                </span>
                <span
                  data-w-id="12296b64-3bdd-ae1d-ec60-e9494776b848"
                  style={{
                    opacity: 1,
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                    transformStyle: "preserve-3d",
                    boxSizing: "border-box",
                  }}
                >
                  will{" "}
                </span>
                <span
                  data-w-id="945462b5-1a4d-e19c-20e4-a08d8ec7f4ef"
                  style={{
                    opacity: 1,
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                    transformStyle: "preserve-3d",
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 900,
                    boxSizing: "border-box",
                  }}
                >
                  teach you
                </span>{" "}
                <span
                  data-w-id="31d968b6-9a69-3ba9-d6d8-b110b56b07cc"
                  style={{
                    opacity: 1,
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                    transformStyle: "preserve-3d",
                    boxSizing: "border-box",
                  }}
                >
                  how to
                </span>{" "}
                <span
                  data-w-id="18512e3c-39b7-8bab-abb9-2a5bc393fccc"
                  style={{
                    opacity: 1,
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                    transformStyle: "preserve-3d",
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 900,
                    boxSizing: "border-box",
                  }}
                >
                  master it.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <button className="bg-[#ffbb38] text-[#0b0e13] text-[19px] leading-[29px] font-bold px-4 py-1 rounded-md">
            JOIN THE REAL WORLD
          </button>
          <button className="border border-[#e8e8e8] px-4 py-1 rounded-md">
            SCROLL DOWN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;