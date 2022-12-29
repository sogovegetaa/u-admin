import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const baseURL = "https://arioapi.pythonanywhere.com/api/posts/";
const Allnews = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    
    fetch("https://arioapi.pythonanywhere.com/api/posts/")
      .then((res) => res.json())
      .then((json) => {
        setPost(json);
      })
      .catch((err) => {
        console.warn(err);
       
      }).finally(()=>setIsLoading(false));
  });
  return (
    <>
      <div className="px-10 py-4 text-md text-black dark:text-white font-medium flex justify-between ">
        <div>Все новости:</div>
        <Link href="/news"><div className="cursor-pointer hover:bg-[#eaeaea] dark:hover:bg-[#333] px-2 py-1 rounded-md duration-100">{isLoading ? (<div>Загрузка...</div>): post.length}</div></Link>
      </div>
      <div className="h-[1px] bg-[#ebebeb] dark:bg-[#333] mx-5"></div>
    </>
  );
};

export default Allnews;
