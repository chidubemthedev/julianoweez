import React from "react";
import hustlersUni from "../../../assets/hustlers-univercity.webp";
import therealWorld from "../../../assets/the-real-world.webp";
import downArrow from "../../../assets/down-arrow.svg";
import Image from "next/image";

type Props = {};

const Upgrade = (props: Props) => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center pt-20">
        <Image src={hustlersUni} alt="hustlers" width={100} height={100} />
        <p className="text-[20px] leading-[31px] my-3">Hustlers University</p>
        <Image src={downArrow} alt="down" />
        <p className="text-[20px] leading-[31px] my-3">The Real World</p>
        <Image src={therealWorld} alt="therealworld" width={150} height={90} />
      </div>

      <div className="mt-10 px-2">
        <div style={{ textAlign: "center", boxSizing: "border-box" }}>
          <div
            style={{
              marginTop: "0px",
              marginRight: "0px",
              marginLeft: "0px",
              boxSizing: "border-box",
            }}
          >
            <div
              data-w-id="76b2387b-6228-1d21-ce20-f34260d6306c"
              style={{
                opacity: 1,
                letterSpacing: "1.5px",
                color: "rgba(255, 255, 255, 0.5)",
                fontWeight: 500,
                boxSizing: "border-box",
              }}
            >
              INTRODUCING
            </div>
          </div>
          <div
            style={{
              marginTop: "0px",
              marginRight: "0px",
              marginLeft: "0px",
              boxSizing: "border-box",
            }}
          >
            <div
              data-w-id="359bc046-c393-821d-fa73-9e1c257997f7"
              style={{
                opacity: 1,
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                display: "inline-block",
                position: "relative",
                boxSizing: "border-box",
              }}
            >
              <h2
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "40px",
                  fontWeight: 500,
                  lineHeight: "48px",
                  boxSizing: "border-box",
                }}
              >
                A MASSIVE{" "}
                <span
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 900,
                    boxSizing: "border-box",
                  }}
                >
                  UPGRADE
                </span>
              </h2>
              <div
                style={{
                  width: "100%",
                  height: "12px",
                  justifyContent: "flex-end",
                  marginTop: "8px",
                  display: "flex",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src="images/Group-427319311-1.webp"
                  loading="lazy"
                  alt=""
                  style={{
                    width: "15rem",
                    maxWidth: "100%",
                    display: "block",
                    verticalAlign: "middle",
                    boxSizing: "border-box",
                    border: "0px none rgb(255, 255, 255)",
                  }}
                />
              </div>
            </div>
          </div>
          <p
            data-w-id="76b2387b-6228-1d21-ce20-f34260d63071"
            style={{
              opacity: 1,
              color: "rgba(255, 255, 255, 0.74)",
              fontWeight: 500,
              fontSize: "20.8px",
              marginBottom: "0px",
              marginTop: "0px",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{ color: "rgb(255, 255, 255)", boxSizing: "border-box" }}
            >
              The world's{" "}
            </span>
            <span
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 900,
                boxSizing: "border-box",
              }}
            >
              most advanced
            </span>
            <span
              style={{ color: "rgb(255, 255, 255)", boxSizing: "border-box" }}
            >
              {" "}
              financial education platform just got even better.
            </span>
            <br style={{ boxSizing: "border-box" }} />
            <br style={{ boxSizing: "border-box" }} />
            <span
              style={{
                color: "rgba(255, 255, 255, 0.64)",
                fontWeight: 500,
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
                'THE REAL WORLD’
              </strong>{" "}
              is a financial education platform that will disrupt the modern{" "}
              <br />
              education system forever.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
