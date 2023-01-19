import Link from "next/link";
import React from "react";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import Header from "../components/Header";

function req({ post }) {
  const col = [
    {
      id: 1,
      title: "ФИО",
    },
    {
      id: 12,
      title: "РЕГИОН",
    },
    {
      id: 13,
      title: "ИИН",
    },
    {
      id: 14,
      title: "ДАТА ЗАЯВКИ	",
    },
    {
      id: 15,
      title: "ВРЕМЯ СДАЧИ	",
    },
    {
      id: 16,
      title: "ПОЧТА",
    },
    {
      id: 17,
      title: "ОФЕРТА",
    },
    {
      id: 18,
      title: "ТЕСТ",
    },
    {
      id: 19,
      title: "ТЕЛ.:",
    },
    {
      id: 20,
      title: "УДОСТ.",
    },
    {
      id: 23,
      title: "ЧЕК ОПЛ.",
    },
    {
      id: 21,
      title: "ПОЛ",
    },
    {
      id: 22,
      title: "ГРАЖДАНСТВО",
    },
  ];
  return (
    <>
      <Header />

      <div className="px-4">
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md">
            <table className="min-w-full leading-normal" id="table-to-xls">
              <thead>
                <tr>
                  {col.map((col) => (
                    <th
                      key={col.id}
                      className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
                    >
                      {col.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    {post.fio}
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    {post.region}
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    {post.iin}
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    {post.report_date}
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    {post.report_time}
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    {post.email}
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span className="relative">Принять</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    {post.tests}
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    {post.number}
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <Link href={`${post.udostoverenie}`} target="_blank">
                      <p
                        className={
                          post.udostoverenie == null
                            ? "bg-red-200 text-center px-2 rounded-xl py-1 cursor-not-allowed"
                            : "bg-green-200 px-2 rounded-xl py-1 cursor-pointer hover:bg-green-500 duration-200"
                        }
                      >
                        {post.udostoverenie == null ? "Нет" : "Просмотр"}
                      </p>
                    </Link>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <Link href={`${post.payment_check}`} target="_blank">
                      <p
                        className={
                          post.payment_check == null
                            ? "bg-red-200 text-center px-2 rounded-xl py-1 cursor-not-allowed"
                            : "bg-green-200 px-2 rounded-xl py-1 cursor-pointer hover:bg-green-500 duration-200"
                        }
                      >
                        {post.payment_check == null ? "Нет" : "Просмотр"}
                      </p>
                    </Link>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    {post.sex}
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    {post.country}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
        <div>
        <Link href="/dashboard">
          <a className="p-3 duration-200 bg-blue-300 hover:bg-blue-500 rounded-xl">Назад</a>
        </Link>
        </div>
        <div>
        <ReactHtmlTableToExcel
          id="test-table-xls-button"
          className="p-2 duration-200 bg-blue-300 hover:bg-blue-500 rounded-xl "
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Скачать Excel"
        />
        </div>
        </div>
      </div>
    </>
  );
}

export default req;

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://arioapi.pythonanywhere.com/u-api/request/${params.id}`
  );
  const post = await res.json();

  return {
    props: { post },
  };
}
