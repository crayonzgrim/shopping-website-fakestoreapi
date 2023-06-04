import React from "react";
import WomanImg from "../../img/woman_hero.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-[800px] bg-hero bg-cover bg-center bg-no-repeat py-24">
      <div className="container mx-auto flex h-full justify-around">
        <div className="flex flex-col justify-center">
          <div className="flex items-center font-semibold uppercase">
            <div className="mr-3 h-[2px] w-10 bg-red-500"></div>
            <span>New Trend</span>
          </div>
          <h1 className="mb-4 text-[70px] font-light leading-[1.1]">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start border-b-2 border-primary font-semibold uppercase"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt={"woman"} />
        </div>
      </div>
    </section>
  );
};
