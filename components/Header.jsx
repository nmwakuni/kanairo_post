"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-5 pl-10 mb-8 bg-white bg-opacity-95">
      <div className=" w-full flex py-1">
        <div className="sm:justify-start">
          <Link href="/">
            <span className="bg-gradient-to-r from-orange-300 via-red-500 bg-clip-text text-transparent to-fuchsia-950 cursor-pointer font-black text-2xl md:text-4xl text-fuchsia-950">
              Kanairo Post
            </span>
          </Link>
        </div>
        <div className="hidden sm:flex flex-1 justify-end">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="sm:float-right sm:justify-end mt-2 align-middle font-bold text-md lg:text-xl xl:text-lg decoration-violet-50 text-fuchsia-950 hover:text-slate-600 sm:pr-1 ml-1 md:ml-2  lg:ml-3 cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-1 items-center mr-4 my-1 justify-end sm:hidden">
          <Image
            src={toggle ? "/open.png" : "/closed.png"}
            alt="menu"
            width={25}
            height={25}
            className="object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 absolute top-10 border-2 shadow-2xl flex flex-col bg-white right-0 mx-4 my-2 rounded-xl sidebar`}
          >
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`}>
                <span className="mt-3 flex flex-col justify-end text-md lg:text-lg decoration-violet-50 text-fuchsia-950 hover:text-slate-600 ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

