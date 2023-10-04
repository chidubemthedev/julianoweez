import React from "react";
import mainImage from "../../../assets/join-main-image.webp";
import Image from "next/image";

type Props = {};

const Escape = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col text-center items-center py-[20px] px-[2%] mt-[40px]">
        <Image src={mainImage} alt="main" width={126} height={126} />
        <h1 className="text-[20px] md:text-[48px] leading-[56px]">
          READY TO ESCAPE? <span className="font-bold">JOIN NOW</span>
        </h1>
        <p className="mt-10 md:text-[20px] leading-[31px]">
          Our modern, practical approach to teaching has led to tens of
          thousands of our <br /> students generating money from anywhere in the
          world.
        </p>
      </div>

      <div className="space-y-10">
        <div className="flex flex-col md:flex-row border border-white rounded-lg mx-[3%]">
          <div className="md:w-[40%] space-y-3 my-10 px-[2%]">
            <h1 className="text-[20px] md:text-[38px] leading-[45px]">
              Content Creation
            </h1>
            <p className="text-[16px] md:text-[20px] md:leading-[31px] underline-offset-4 underline">
              Mena, 34, GH
            </p>
            <p className="text-[16px] md:text-[20px] md:leading-[31px]">
              New revenue: $2k+/month
            </p>
            <p className="text-[16px] md:text-[20px] md:leading-[31px]">
              The Real World's positive impact on her boyfriend led Mena to
              join...
              <br /> Now, she makes over $2,000/month due to the lessons she
              applied from the Content Creation Campus.
            </p>
          </div>
          <div className="md:w-[60%]">
            <iframe
              src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/86f4bacb705ca6edd60c405f146bd293/iframe"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              className="w-[100%] h-[100%] border-none"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row border border-white rounded-lg mx-[3%]">
          <div className="md:w-[40%] space-y-3 my-10 px-[2%]">
            <h1 className="text-[20px] md:text-[38px] leading-[45px]">
              Business Mastery
            </h1>
            <p className="text-[16px] md:text-[20px] md:leading-[31px] underline-offset-4 underline">
              Nox, 34, US
            </p>
            <p className="text-[16px] md:text-[20px] md:leading-[31px]">
              New revenue: $200k+/month
            </p>
            <p className="text-[16px] md:text-[20px] md:leading-[31px]">
              Nox had $3,000 to his name when he joined The Real World...
              <br /> He now generates $200,000/month as a business consultant.
            </p>
          </div>
          <div className="md:w-[60%]">
            <iframe
              src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/4b483f80cba664201202e7ad4343d0ab/iframe"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              className="w-[100%] h-[100%] border-none"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row border border-white rounded-lg mx-[3%]">
          <div className="md:w-[40%] space-y-3 my-10 px-[2%]">
            <h1 className="text-[20px] md:text-[38px] leading-[45px]">
              Freelancing
            </h1>
            <p className="text-[16px] md:text-[20px] md:leading-[31px] underline-offset-4 underline">
              Jordan, 34, GB
            </p>
            <p className="text-[16px] md:text-[20px] md:leading-[31px]">
              New revenue: $60,000/60 days
            </p>
            <p className="text-[16px] md:text-[20px] md:leading-[31px]">
              Before joining Jordan made $100/day delivering packages. Since
              joining he has made $60,000 in just 60 days.
            </p>
          </div>
          <div className="md:w-[60%]">
            <iframe
              src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/84b42e0002c3471d92b9bff6047dd7ea/iframe"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              className="w-[100%] h-[100%] border-none"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row border border-white rounded-lg mx-[3%]">
          <div className="md:w-[40%] space-y-3 my-10 px-[2%]">
            <h1 className="text-[20px] md:text-[38px] leading-[45px]">
              Crypto Investing
            </h1>
            <p className="text-[16px] md:text-[20px] md:leading-[31px] underline-offset-4 underline">
              AC, 34, US
            </p>
            <p className="text-[16px] md:text-[20px] md:leading-[31px]">
              New revenue: $40,000/month
            </p>
            <p className="text-[16px] md:text-[20px] md:leading-[31px]">
              Chess Master AC joined TRW and now makes $40k+ every month trading
              crypto for 15 minutes daily.
            </p>
          </div>
          <div className="md:w-[60%]">
            <iframe
              src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/96bab24cf31ff6bdc130647bb8b1711b/iframe"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              className="w-[100%] h-[100%] border-none"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row border border-white rounded-lg mx-[3%]">
          <div className="md:w-[40%] space-y-3 my-10 px-[2%]">
            <h1 className="text-[20px] md:text-[38px] leading-[45px]">
              Ecommerce
            </h1>
            <p className="text-[16px] md:text-[20px] md:leading-[31px] underline-offset-4 underline">
              Dana, 34, US
            </p>
            <p className="text-[16px] md:text-[20px] md:leading-[31px]">
              New revenue: $115,000/5 months
            </p>
            <p className="text-[16px] md:text-[20px] md:leading-[31px]">
              Dana was working in construction but now makes hundreds of
              thousands of dollars with Ecom.
            </p>
          </div>
          <div className="md:w-[60%]">
            <iframe
              src="https://customer-29d3r31yjz332bf4.cloudflarestream.com/2855b6732b703526e23486b24799a7f4/iframe"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              className="w-[100%] h-[100%] border-none"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Escape;
