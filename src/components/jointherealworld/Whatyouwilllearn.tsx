import React from "react";
import ecommerce from "../../../assets/ecommerce.webp";
import copywriting from "../../../assets/copywriting.webp";
import stocks from "../../../assets/stocks.webp";
import client from "../../../assets/client.webp";
import crypto from "../../../assets/crypto.webp";
import finance from "../../../assets/finance.webp";
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
            <h2 className="text-[24px] md:text-[38px] leading-[45px]">
              E-Commerce
            </h2>
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
            <h2 className="text-[24px] md:text-[38px] leading-[45px]">
              Copywriting
            </h2>
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

      <div className="flex flex-col md:flex-row gap-6 px-[4%] mt-7">
        <div className="border border-white rounded-3xl p-8 flex flex-col items-center text-center bg-[#27292e]">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Image src={stocks} alt="ecommerce" width={75} height={75} />
            <h2 className="text-[24px] md:text-[38px] leading-[45px]">
              Stocks
            </h2>
          </div>
          <p className="text-[20px] leading-[31px] mb-7">
            Multiply your capital through the stock market. We'll train you to
            use technical analysis to find situations where there's a higher
            upside than the downside.
          </p>
          <iframe
            src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/7ee65ac956bd307331e0055cf6b367c9/iframe"
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
            <Image src={client} alt="ecommerce" width={75} height={75} />
            <h2 className="text-[24px] md:text-[38px] leading-[45px]">
              Client Acquisition
            </h2>
          </div>
          <p className="text-[20px] leading-[31px] mb-7">
            You’ll learn how to get paid a premium price to complete simple
            tasks, And the most effective methods to build a list of loyal
            clients
          </p>
          <iframe
            src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/09bdf2aea42ee04718120770ece2cbf7/iframe"
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

      <div className="flex flex-col md:flex-row gap-6 px-[4%] mt-7">
        <div className="border border-white rounded-3xl p-8 flex flex-col items-center text-center bg-[#27292e]">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Image src={crypto} alt="ecommerce" width={75} height={75} />
            <h2 className="text-[24px] md:text-[38px] leading-[45px]">
              Crypto Investing
            </h2>
          </div>
          <p className="text-[20px] leading-[31px] mb-7">
            Profit from the world’s highest-performing assets. We’ll focus on
            attacking crypto markets from 3 angles: Long-term, medium-term, and
            short-term.
          </p>
          <iframe
            src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/adebd8f7f5717742beaea5970c23de9e/iframe"
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
            <Image src={finance} alt="ecommerce" width={75} height={75} />
            <h2 className="text-[24px] md:text-[38px] leading-[45px]">
              Business & Finance
            </h2>
          </div>
          <p className="text-[20px] leading-[31px] mb-7">
            Master the fundamental skills of business. We’ll teach you every
            skill the hyper successful entrepreneur of tomorrow needs to master.
          </p>
          <iframe
            src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/c17d1836f7dde7827249a102bbc80fa9/iframe"
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
