import React from "react";

type Props = {};

const LevelUp = (props: Props) => {
  return (
    <div className="levelup-background py-28">
      <div className="flex flex-col items-center justify-center text-center px-2">
        <h1 className="text-[35px] leading-[42px]">LEVEL UP IN THE WAR ROOM</h1>
        <p className="text-[20px] leading-[31px] mt-5">
          An elite gobal network of men like no other.
        </p>
        <div className="mt-7">
          {/* <button className="border-2 border-[#e6c87d] p-3 rounded-md hover:scale-110 transition duration-300 ease-in-out">
            BECOME ABUNDANT
          </button> */}

          <a
            data-w-id="f2826fca-57b3-abb2-b833-b5f62c28272a"
            style={{
              opacity: 1,
              transform: "matrix(1.1, 0, 0, 1.1, 0, 0)",
              transformStyle: "preserve-3d",
              color: "rgb(255, 255, 255)",
              zIndex: 10,
              height: "65px",
              gap: "12.8px",
              backgroundImage:
                "linear-gradient(rgba(230, 200, 125, 0.13), rgba(230, 200, 125, 0))",
              border: "2.22222px solid rgb(230, 200, 125)",
              borderRadius: "6px",
              justifyContent: "space-around",
              alignItems: "center",
              paddingLeft: "32px",
              paddingRight: "32px",
              textDecoration: "none solid rgb(255, 255, 255)",
              display: "flex",
              position: "relative",
              maxWidth: "100%",
              boxSizing: "border-box",
              outline: "rgb(255, 255, 255) none 0px",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            href="/war-room"
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
              LEARN MORE
            </div>
            <img
              src="https://uploads-ssl.webflow.com/645ee27460eff05ed801596c/6461b2f34bc9d89c2dec32a0_image%2074.png"
              loading="lazy"
              alt=""
              style={{
                maxWidth: "100%",
                display: "block",
                verticalAlign: "middle",
                boxSizing: "border-box",
                border: "0px none rgb(255, 255, 255)",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LevelUp;
