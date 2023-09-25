import Nav from "@/components/jointherealworld/Nav";
import Timeline from "@/components/jointherealworld/Timeline";
import Upgrade from "@/components/jointherealworld/Upgrade";
import Whatyouwilllearn from "@/components/jointherealworld/Whatyouwilllearn";
import React from "react";

type Props = {};

const Join = (props: Props) => {
  return (
    <div className="bg-[#06060c] text-white">
      <Nav />
      <Upgrade />
      <Timeline />
      <Whatyouwilllearn />
    </div>
  );
};

export default Join;
