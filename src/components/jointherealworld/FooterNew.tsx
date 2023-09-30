import React from "react";

type Props = {};

const FooterNew = (props: Props) => {
  return (
    <div className="hidden md:block">
      <div
        style={{
          width: "70%",
          gridTemplateRows: "auto auto auto auto auto",
          marginLeft: "auto",
          marginRight: "auto",
          gap: "16px",
          gridTemplateColumns: "436.141px 436.156px",
          gridAutoColumns: "1fr",
          display: "grid",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            gridArea: "span 5 / span 1 / span 5 / span 1",
            gap: "32px",
            flexDirection: "column",
            textDecoration: "none solid rgb(255, 255, 255)",
            display: "flex",
            boxSizing: "border-box",
          }}
        >
          <a
            href="http://app.jointherealworld.com"
            style={{
              fontSize: "20px",
              textDecoration: "underline solid rgb(255, 255, 255)",
              color: "rgb(255, 255, 255)",
              boxSizing: "border-box",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            Log In
          </a>
          <div
            style={{
              gridArea: "span 1 / span 1 / span 1 / span 1",
              gap: "32px",
              flexDirection: "column",
              textDecoration: "none solid rgb(255, 255, 255)",
              display: "flex",
              boxSizing: "border-box",
            }}
          >
            <a
              href="https://jointherealworld.com/manage"
              style={{
                fontSize: "20px",
                textDecoration: "underline solid rgb(255, 255, 255)",
                color: "rgb(255, 255, 255)",
                boxSizing: "border-box",
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              Manage Membership
            </a>
          </div>
          <div
            style={{
              gridArea: "span 1 / span 1 / span 1 / span 1",
              gap: "32px",
              flexDirection: "column",
              textDecoration: "none solid rgb(255, 255, 255)",
              display: "flex",
              boxSizing: "border-box",
            }}
          >
            <a
              href="terms-and-conditions.html"
              style={{
                fontSize: "20px",
                textDecoration: "underline solid rgb(255, 255, 255)",
                color: "rgb(255, 255, 255)",
                boxSizing: "border-box",
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              Terms &amp; Conditions
            </a>
          </div>
          <div
            style={{
              gridArea: "span 1 / span 1 / span 1 / span 1",
              gap: "32px",
              flexDirection: "column",
              textDecoration: "none solid rgb(255, 255, 255)",
              display: "flex",
              boxSizing: "border-box",
            }}
          >
            <a
              href="privacy-policy.html"
              style={{
                fontSize: "20px",
                textDecoration: "underline solid rgb(255, 255, 255)",
                color: "rgb(255, 255, 255)",
                boxSizing: "border-box",
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              Privacy Policy
            </a>
          </div>
          <div
            style={{
              gridArea: "span 1 / span 1 / span 1 / span 1",
              gap: "32px",
              flexDirection: "column",
              textDecoration: "none solid rgb(255, 255, 255)",
              display: "flex",
              boxSizing: "border-box",
            }}
          >
            <a
              href="mailto:mailto:support@jointherealworld.com?subject=Website%20Support%20Inquiry"
              style={{
                color: "rgb(255, 255, 255)",
                fontSize: "20px",
                textDecoration: "none solid rgb(255, 255, 255)",
                boxSizing: "border-box",
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              <span
                style={{
                  color: "rgb(255, 255, 255)",
                  fontWeight: 700,
                  boxSizing: "border-box",
                }}
              >
                Support:
              </span>{" "}
              support@jointherealworld.com
            </a>
          </div>
        </div>
        <div
          style={{
            gridArea: "span 5 / span 1 / span 5 / span 1",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              color: "rgb(119, 119, 119)",
              fontSize: "20.8px",
              fontWeight: 500,
              boxSizing: "border-box",
            }}
          >
            Owned and Managed by New Era Learning LLC
            <br style={{ boxSizing: "border-box" }} />
            <br style={{ boxSizing: "border-box" }} />
            Distributed by our partners:
            <br style={{ boxSizing: "border-box" }} />‍
            <br style={{ boxSizing: "border-box" }} />
            EU: IM FOLLOWING Sp z o oPlac Zomkaway 8/5, Warsaw, Poland 00-277
            <br style={{ boxSizing: "border-box" }} />
            <br style={{ boxSizing: "border-box" }} />
            US: Thrifty Consulting LLC
            <br style={{ boxSizing: "border-box" }} />
            800 North State St Ste 403, Dover, DE 19901
            <br style={{ boxSizing: "border-box" }} />
            <br style={{ boxSizing: "border-box" }} />
            Legendary Courses, Inc
            <br style={{ boxSizing: "border-box" }} />
            221 N. Broad St.Middletown, DE 19709
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
