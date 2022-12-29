import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { data } from "autoprefixer";
import Header from "./components/Header";
import Switcher from "./components/Switcher";
import Link from "next/link";
import Allnews from "./components/Allnews";
import Projectnews from "./components/Projectnews";
import Eventsnews from "./components/Eventsnews";
import Analyticnews from "./components/Analyticnews";
import Survaynews from "./components/Surveynews";
import Footer from "./components/Footer";

function Dashboard() {
  const [user, setUser] = useState({
    email: "",
    username: "",
  });
  const router = useRouter();

  const getProfile = async () => {
    const profile = await axios.get("/api/profile");
    setUser(profile.data);
  };

  return (
    
    <>
      
      <Header />
      <div className="container mx-auto h-[85vh]">
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-white dark:bg-black border border-[#ededed] dark:border-[#333] mt-6  hover:dark:border-white duration-75 rounded-lg">
            <div className="border-b border-[#ededed] dark:border-[#333] flex justify-between items-center">
              <div className="text-3xl text-black dark:text-white p-5">
                Новости
              </div>
              <Link href="/news"><a target="_blank" className="text-xl text-[#666] underline hover:text-black dark:hover:text-white cursor-pointer duration-150  p-5">
                Перейти
              </a></Link>
            </div>
            <div className="px-12 py-5 text-md text-[#666] dark:text-[#555] font-medium flex justify-between ">
              <div>Категория</div>
              <div>Количество</div>
            </div>
            <div className="h-[1px] bg-[#ebebeb] dark:bg-[#333] mx-5"></div>
            <Allnews />
            <Projectnews />
            <Eventsnews />
            <Analyticnews />
            <Survaynews />
          </div>
          <div className="bg-white dark:bg-black border border-[#ededed] dark:border-[#333] mt-6  hover:dark:border-white duration-75 rounded-lg">
            <div className="border-b border-[#ededed] dark:border-[#333]">
              <div className="text-3xl text-black dark:text-white p-5">
                Статьи
              </div>
            </div>
            <div className="px-12 py-5 text-md text-black dark:text-white font-medium ">
              <div>Количество:</div>
              <div>12</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <Switcher />
    </>
    
    
    
  );
}

export default Dashboard;
