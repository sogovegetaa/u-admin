import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";

import Image from "next/image";
import Link from "next/link";
import Newsblock from "../components/Newsblock";
import Switcher from "../components/Switcher";
import Footer from "../components/Footer";

const projects = ({ data }) => {




  return (
    <div className="bg-[#FAFAFA] dark:bg-[#111111]">
      <Header />
      <div className="py-6 bg-white dark:bg-black border-b border-[#ededed] dark:border-[#333]">
        <div className="container mx-auto text-4xl text-black dark:text-white">
          Новости
        </div>
      </div>
      <div className="container mx-auto py-[24px]">
        <div className="grid grid-cols-10 gap-2">
          <div className="flex items-center col-span-8 p-2.5 bg-white dark:bg-black border border-[#ededed] dark:border-[#333] rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#333] mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="text"
              placeholder="Пойск..."
              className="w-full text-black bg-white rounded-md dark:bg-black border-npne dark:text-white text-m peer-disabled focus:outline-none focus:border-white focus:ring-white dark:focus:outline-none dark:focus:border-black focus:ring-1 dark:focus:ring-black"
            />
          </div>
          <div className="col-span-2">
            <Link href="/news/addpost"><button className="px-2 py-2 text-white duration-150 bg-black border border-white rounded-md dark:text-black dark:bg-white dark:border-black hover:border-black hover:dark:border-white hover:bg-white hover:dark:bg-black hover:text-black hover:dark:text-white">
              Добавить новость
            </button></Link>
          </div>
        </div>
        {data.map((item) => (
          <Newsblock key={item.id} item={item} data={data} />
        ))}
      </div>
      <Footer />
      <Switcher />
    </div>
  );
};

export default projects;

export async function getServerSideProps(context) {
  const res = await fetch("https://arioapi.pythonanywhere.com/api/posts/?cat_id=1");
  const data = await res.json();
  return {
    props: { data }, 
  };
}
