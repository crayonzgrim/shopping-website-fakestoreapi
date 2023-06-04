import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import WomanImg from "../../img/woman_hero.png";

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
            to={"/products"}
            className="hover:transion-all align-center flex w-[250px] justify-start self-start bg-primary p-2 font-semibold uppercase text-white"
          >
            <p className="ml-1 mr-2 h-full">Go to shopping</p>
            <p className="mt-1 w-[80px] transition-all hover:pl-12">
              <BsArrowRight />
            </p>
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt={"woman"} />
        </div>
      </div>
    </section>
  );
};
