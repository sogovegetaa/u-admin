import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Newsblock = ({ item, data }) => {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div
      key={item.id}
      className="bg-white dark:bg-black border border-[#ededed] dark:border-[#333] mt-6 w-11/12 hover:dark:border-white duration-75 rounded-lg"
    >
      <div className="relative p-4" ref={menuRef}>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-2">
          <Image
              src={item?.img ? item?.img : null}
              width={170}
              height={113}
              className="bg-light-500 pixer2 w-full"
              alt=""
            />
          </div>
          <div className="col-span-7">
            <div className="text-xl text-black dark:text-white">
              {item.title}
            </div>
            <div className="text-[#666] font-md pt-2">{item.date}</div>
          </div>
          <div className="flex items-center justify-end pr-10 col-span-3">
            <Link href={`/news/post/${item.id}`}>
              <a target="_blank" className="text-black underline dark:text-[#666] hover:dark:text-white duration-75 font-medium ">
                Предосмотр
              </a>
            </Link>
          </div>
        </div>

        <div className="absolute text-4xl text-black top-2 dark:text-white right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <div
          className={`flex flex-col bg-white dark:bg-black border border-[#ededed] dark:border-[#333] absolute text-black dark:text-white rounded-md top-8 right-1 p-2 ${
            open ? "qctive" : "inqctive"
          }`}
        >
          <Link href={`https://ario.vercel.app/news/post/${item.id}`}>
            <a target="_blank" className="px-2 py-1 text-sm cursor-pointer hover:bg-[#333] rounded-md duration-100">
              Перейти
            </a>
          </Link>
          <Link href="#">
            <a target="_blank" className="px-2 py-1 text-sm cursor-pointer hover:bg-[#333] rounded-md duration-100">
              Изменить
            </a>
          </Link>
          <Link href="#">
            <a  className="px-2 py-1 text-sm cursor-pointer hover:bg-[#333] rounded-md duration-100">
              Удалить
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newsblock;
