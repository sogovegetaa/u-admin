import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Header() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
    } catch (error) {
      console.error(error.message);
    }
    router.push("/login");
  };
  return (
    <div className="bg-gray-200 ">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between h-12 ">
          <div className="px-8"><Link href="/"><a>Админ панель</a></Link></div>
          <div>
          <button className="px-8 py-1 font-medium text-white duration-200 bg-red-500 rounded-lg hover:bg-black" onClick={() => logout()}>
            Выйти
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
