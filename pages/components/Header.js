import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
    } catch (error) {
      console.error(error.message);
    }
    router.push("/login");
  };
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-white dark:bg-black border-b border-[#ededed] dark:border-[#333]">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <Link href="/dashboard">
            <span className="ml-3 text-xl text-black cursor-pointer dark:text-white">
              Ario Admin
            </span>
          </Link>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
        <Link href="/dashboard">
            <p className="mr-5 text-black font-bold dark:text-white cursor-pointer hover:bg-[#eaeaea] dark:hover:bg-[#333] p-1 rounded-md duration-100">
              Главная
            </p>
          </Link>
          <Link href="/news">
            <p className="mr-5 text-black font-bold dark:text-white cursor-pointer hover:bg-[#eaeaea] dark:hover:bg-[#333] p-1 rounded-md duration-100">
              Новости
            </p>
          </Link>
        </nav>

        <button
          onClick={() => logout()}
          className="flex text-white bg-black dark:text-black dark:bg-white py-1.5 px-2 items-center rounded-md border border-white dark:border-black hover:border-black hover:dark:border-white hover:bg-white hover:dark:bg-black hover:text-black hover:dark:text-white duration-150"
        >
          Выйти
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
