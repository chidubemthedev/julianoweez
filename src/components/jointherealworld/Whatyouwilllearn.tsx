import React from "react";
import ecommerce from "../../../assets/ecommerce.webp";
import copywriting from "../../../assets/copywriting.webp";
import Image from "next/image";

type Props = {};

const Whatyouwilllearn = (props: Props) => {
  return (
    <div className="bg-[#181b21]">
      <div className="flex flex-col justify-center items-center pt-20 text-center">
        <h2
          data-w-id="01e5e912-277b-6e43-95e5-ff4e87293952"
          style={{
            opacity: 1,
            marginTop: "0px",
            marginBottom: "0px",
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: "48px",
            boxSizing: "border-box",
          }}
        >
          WHAT YOU WILL{" "}
          <span
            style={{
              color: "rgb(255, 255, 255)",
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 900,
              boxSizing: "border-box",
            }}
          >
            LEARN
          </span>
        </h2>
        <p
          data-w-id="33c15ff5-e330-1242-d760-7097b7a8115d"
          style={{
            opacity: 1,
            color: "rgba(255, 255, 255, 0.74)",
            fontWeight: 500,
            fontSize: "20.8px",
            marginBottom: "0px",
            marginTop: "20px",
            boxSizing: "border-box",
          }}
        >
          When a{" "}
          <span
            style={{
              color: "rgb(255, 255, 255)",
              fontWeight: 700,
              boxSizing: "border-box",
            }}
          >
            new technology revolutionises{" "}
          </span>
          an industry,{" "}
          <span
            style={{
              color: "rgb(255, 255, 255)",
              fontWeight: 700,
              boxSizing: "border-box",
            }}
          >
            THE REAL WORLD
          </span>{" "}
          will be <br /> the first and{" "}
          <span
            style={{
              color: "rgb(255, 255, 255)",
              fontWeight: 700,
              boxSizing: "border-box",
            }}
          >
            only place
          </span>{" "}
          <span
            style={{
              color: "rgb(255, 255, 255)",
              fontWeight: 700,
              boxSizing: "border-box",
            }}
          >
            to teach you how to profit from it.
          </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 px-[4%] mt-7">
        <div className="border border-white rounded-3xl p-8 flex flex-col items-center text-center bg-[#27292e]">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Image src={ecommerce} alt="ecommerce" width={75} height={75} />
            <h2 className="text-[38px] leading-[45px]">E-Commerce</h2>
          </div>
          <p className="text-[20px] leading-[31px] mb-7">
            Sell profitable products online. Industry experts will train you to
            find winning products, create the perfect store, and generate
            traffic on your sites.
          </p>
          <iframe
            src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/a1b0248c6b0ddbd784378e52f7ddbf66/iframe"
            style={{
              border: "none",
              height: "310.781px",
              width: "100%",
              display: "block",
              boxSizing: "border-box",
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen={true}
          ></iframe>
        </div>

        <div className="border border-white rounded-3xl p-8 flex flex-col items-center text-center bg-[#27292e]">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Image src={copywriting} alt="ecommerce" width={75} height={75} />
            <h2 className="text-[38px] leading-[45px]">Copywriting</h2>
          </div>
          <p className="text-[20px] leading-[31px] mb-7">
            Master the art of selling with words. We'll give you an easy to
            follow guide on how to master the art of copywriting and secure a
            list of high-paying clients.
          </p>
          <iframe
            src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/310feb9e139b948b015e98cabeb78990/iframe"
            style={{
              border: "none",
              height: "310.781px",
              width: "100%",
              display: "block",
              boxSizing: "border-box",
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Whatyouwilllearn;
