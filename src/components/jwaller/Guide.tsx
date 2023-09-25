import React from "react";

type Props = {};

const Guide = (props: Props) => {
  return (
    <div className="guide-background">
      <div className="flex flex-col items-center justify-center text-center py-10 px-2">
        <h1 className="text-[35px] leading-[42px]">
          GENTLEMEN'S GUIDE TO ABUNDANCE
        </h1>
        <p className="text-[20px] leading-[31px] mt-5 mb-7">
          WEEKLY NEWSLETTER
        </p>
        <form>
          <input
            type="email"
            name="Newsletter-Form"
            data-name="Newsletter Form"
            placeholder="Your email address"
            required
            style={{
              backgroundColor: "rgba(26, 26, 32, 0)",
              border: "1.11111px solid rgba(255, 255, 255, 0.1)",
              //   width: "29.125rem",
              minHeight: "66px",
              color: "rgb(255, 255, 255)",
              marginBottom: "0px",
              paddingLeft: "32px",
              fontSize: "18px",
              padding: "8px 16px 8px 32px",
              borderColor: "rgba(255, 255, 255, 0.1)",
              outline: "rgb(255, 255, 255) none 0px",
              height: "65.9896px",
              verticalAlign: "middle",
              lineHeight: "25.7143px",
              boxSizing: "border-box",
              margin: "0px",
            }}
          />

          <button
            type="submit"
            style={{
              height: "65.9896px",
              padding: "0px 36px",
              color: "rgb(255, 255, 255)",
              textAlign: "center",
              textTransform: "uppercase",
              backgroundColor: "rgb(0, 0, 0)",
              border: "2.22222px solid rgb(230, 200, 125)",
              fontWeight: 600,
              appearance: "button",
              lineHeight: "24px",
              cursor: "pointer",
              borderRadius: "0px",
              textDecoration: "none solid rgb(255, 255, 255)",
              boxSizing: "border-box",
              margin: "0px",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Guide;
