import React from "react";
import Header from "../../components/Header";
import Switcher from "../../components/Switcher";
import Image from "next/image";
import Footer from "../../components/Footer";

function post({ post }) {
  return (
    <div>
      <Header />
      <div className="bg-white dark:bg-black text-2xl border-b border-[#ededed] dark:border-[#333]">
        <div className="container mx-auto">
          <div className="text-black dark:text-white py-8 ">{post.title}</div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="my-5 flex justify-center">
        <Image
          src={`https://arioapi.pythonanywhere.com/${post.img}`}
          width={500}
          height={322}
          alt=""
        />
        </div>
        <div className="text-black dark:text-white text-md mx-12 pb-10" dangerouslySetInnerHTML={{__html: `${post.desc}`}} />
            
        
      </div>
      <Footer />
      <Switcher />
    </div>
  );
}

export default post;
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://arioapi.pythonanywhere.com/api/post/${params.id}`
  );
  const post = await res.json();

  return {
    props: { post },
  };
}
