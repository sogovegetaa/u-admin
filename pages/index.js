import Link from "next/link";
import Switcher from "./components/Switcher";
import Footer from "./components/Footer";


function Indexpage() {

  return (
    <div className="bg-[#fafafa] dark:bg-[#111] h-[100vh] relative flex items-center">
      <div className="flex flex-col mx-auto">
      <h1 className="text-center text-4xl text-black dark:text-white font-bold">Администрация АРИО</h1>
      <div className="flex justify-center mt-8"><Link href="/login"><a className="w-[200px] text-center text-white bg-black dark:text-black dark:bg-white py-1.5 px-2 rounded-md border border-white dark:border-black hover:border-black hover:dark:border-white hover:bg-white hover:dark:bg-black hover:text-black hover:dark:text-white duration-150">Войти</a></Link></div>
      </div>
      <Footer />
      <Switcher />
    </div>
  );
}

// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
// </svg>

export default Indexpage;
