import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", credentials);
    console.log(res);

    if (res.status === 200) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen bg-[#fafafa] dark:bg-black">
      <div className="w-full p-6 m-auto bg-white dark:bg-[#111] rounded-md border border-[#ededed] dark:border-[#333] lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black uppercase dark:text-white">
          Admin Ustudy
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="text"
              className="block text-sm font-semibold text-black dark:text-white"
            >
              Логин
            </label>
            <input
              type="text"
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  email: e.target.value,
                })
              }
              className="w-full px-4 py-2 mt-2 text-black bg-white rounded-md dark:bg-black border-npne dark:text-white text-m border border-[#ededed] dark:border-[#333]"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-black dark:text-white"
            >
              Пароль
            </label>
            <input
              type="password"
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                })
              }
              className="w-full px-4 py-2 mt-2 text-black bg-white rounded-md dark:bg-black border-npne dark:text-white text-m border border-[#ededed] dark:border-[#333]"
            />
          </div>

          <div className="mt-6">
            <button className="w-full text-black bg-blue-300 py-1.5 px-2 rounded-md border duration-200 hover:bg-blue-500">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
