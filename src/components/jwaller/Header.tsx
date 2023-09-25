import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#06060c]">
      <div className="my-16">
        <video width={800} controls>
          {/* <source src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" /> */}
          <source src="welcome.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="text-center text-[20px] leading-[31px] px-2">
        <p className="font-bold">My name is Justin Waller.</p>
        <p className="mt-5">
          I grew up in a small town in Denham Springs, Louisiana, where I built
          my <br /> 13-year steel construction business.
        </p>
        <p className="mt-5">
          There were no cheat codes. I had to get punched in the face for a
          decade <br /> to get here.
        </p>
        <p className="font-bold mt-5">
          With all of the lessons I learned, my goal is to now guide every{" "}
          <br />
          gentlemen into building an abundant life.
        </p>

        <div className="my-12">
          <button className="border-2 border-[#e6c87d] p-4 rounded-md hover:scale-110 transition duration-300 ease-in-out">
            BECOME ABUNDANT
          </button>
          {/* 
          <a
            data-w-id="7ec7b360-f107-9d57-2e11-8d3133453855"
            style={{
              opacity: 1,
              transform: "matrix(1.1, 0, 0, 1.1, 0, 0)",
              transformStyle: "preserve-3d",
              zIndex: 2,
              width: "auto",
              height: "72.9861px",
              backgroundImage:
                "linear-gradient(rgba(230, 200, 125, 0.13), rgba(230, 200, 125, 0.07) 31%, rgba(230, 200, 125, 0.07))",
              border: "2.22222px solid rgb(230, 200, 125)",
              borderRadius: "6px",
              justifyContent: "space-around",
              alignItems: "center",
              paddingLeft: "8px",
              paddingRight: "8px",
              textDecoration: "none solid rgb(0, 0, 238)",
              display: "flex",
              position: "relative",
              maxWidth: "100%",
              boxSizing: "border-box",
              outline: "rgb(0, 0, 238) none 0px",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            href="/checkout"
          >
            <img
              src="https://uploads-ssl.webflow.com/645ee27460eff05ed801596c/645ef10acd6a0badff4ab967_Vector-1.svg"
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
            <div
              style={{
                color: "rgb(223, 223, 223)",
                marginLeft: "16px",
                marginRight: "16px",
                textDecoration: "none solid rgb(223, 223, 223)",
                borderRadius: "16px",
                paddingTop: "16px",
                paddingBottom: "16px",
                zIndex: 1000,
                fontSize: "20.8px",
                display: "block",
                textAlign: "center",
                position: "relative",
                fontWeight: 700,
                boxSizing: "border-box",
              }}
            >
              BECOME ABUNDANT
            </div>
            <img
              src="https://uploads-ssl.webflow.com/645ee27460eff05ed801596c/645ef126bddbb74d4a86bd1e_Vector.svg"
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
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
