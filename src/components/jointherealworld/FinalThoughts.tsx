import React from "react";
import final1 from "../../../assets/final1.webp";
import final2 from "../../../assets/final2.webp";
import Image from "next/image";

type Props = {};

const FinalThoughts = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#0b0e13] py-10 px-[3%] gap-[40px]">
      <div className="md:w-[50%] space-y-6 text-[20px] leading-[31px]">
        <h1 className="text-[48px] leading-[24px]">
          FINAL <span className="font-bold">THOUGHTS</span>
        </h1>
        <p>
          <span className="font-bold">Money-making is a skill.</span> Like every
          other skill it can be learned, and the speed at which it is learned
          depends on your coaches and the learning environment you are taught
          in.
        </p>
        <p>
          <span className="font-bold">
            Our coaches know the business models they teach,
          </span>{" "}
          they know what it takes to be profitable, and they are the first to
          identify and utilize new disruptive technologies and strategies
          whenever they appear.
        </p>
        <p>
          THE REAL WORLD is the ultimate all-in-one learning platform guiding
          you from making your first dollar online to scaling into a
          multi-million dollar business.
        </p>
        <p>
          There is no better place on the planet to learn how to make money
          online today.
        </p>
      </div>

      <div className="md:w-[50%] flex">
        <Image src={final1} alt="final" className="w-[50%]" />
        <Image src={final2} alt="final" className="w-[50%]" />
        {/* <Image src={final2} alt="final" /> */}
      </div>
    </div>
  );
};

export default FinalThoughts;
