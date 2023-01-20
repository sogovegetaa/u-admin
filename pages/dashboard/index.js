import Link from "next/link";
import React from "react";
import Header from "../components/Header";

const Dashboard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <p className="pt-12 pb-6 text-4xl font-bold">Заявки:</p>
        <div className="grid grid-cols-3 gap-5">
          <div className="p-2 bg-gray-200 rounded-md shadow-xl">
            <div className="flex justify-between h-[50px] items-center ">
              <p className="font-medium">Курсы и обучение</p>
              <Link href="#">
                <a className="p-2 duration-200 bg-blue-200 rounded-lg hover:bg-blue-300">
                  Просмотр
                </a>
              </Link>
            </div>
          </div>
          <div className="p-2 bg-gray-200 rounded-md shadow-xl">
            <div className="flex justify-between h-[50px] items-center ">
              <p className="font-medium">Международные тесты</p>
              <Link href="/international">
                <a className="p-2 duration-200 bg-blue-200 rounded-lg hover:bg-blue-300">
                  Просмотр
                </a>
              </Link>
            </div>
            <p className="font-medium">Количество заявок: <span className="text-xl font-bold text-green-600">{data.length}</span></p>
          </div>
          <div className="p-2 bg-gray-200 rounded-md shadow-xl">
            <div className="flex justify-between h-[50px] items-center ">
              <p className="font-medium">Курсы и обучение</p>
              <Link href="/international">
                <a className="p-2 duration-200 bg-blue-200 rounded-lg hover:bg-blue-300">
                  Просмотр
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
export async function getServerSideProps() {
  const res = await fetch("https://arioapi.pythonanywhere.com/u-api/international/");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
