import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "./components/Header";
import Link from "next/link";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import AddPagaination from "./components/AddPagaination";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Tooltip from '@mui/material/Tooltip';
export default function International(data) {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    username: "",
  });
  const clickToDelete = (id) => {
    axios.delete(
      `https://arioapi.pythonanywhere.com/u-api/international/${id}`
    );

    // var requestOptions = {
    //   method: "DELETE",
    //   redirect: "follow",
    // };

    // fetch(`https://arioapi.pythonanywhere.com/u-api/international/${id}`,requestOptions).then((res) => router.reload());
  };
  const getProfile = async () => {
    const profile = await axios.get("/api/profile");
    setUser(profile.data);
  };
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
      title: "ДАТА ЗАЯВКИ",
    },
    {
      id: 15,
      title: "ВРЕМЯ СДАЧИ",
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
    {
      id: 23,
      title: "Действие",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.data.slice(firstPostIndex, lastPostIndex);
  const [search, setSearch] = useState("");
  const [searchName, setSearchName] = useState("");
  const [sort, setSort] = useState(true);
  const [paqe, setPaqe] = useState(2);

  return (
    <div className="mb-12">
      <Header />
      <div className="container mx-auto">
        <p
          onClick={() => {
            setSort(!sort);
          }}
          className={
            sort == false
              ? "fixed p-2 duration-200 bg-blue-100 rounded-lg shadow-xl cursor-pointer bottom-5 right-2 hover:bg-blue-500"
              : "fixed p-2 duration-200 bg-red-300 rounded-lg shadow-xl cursor-pointer bottom-5 right-2 hover:bg-red-500"
          }
        >
          {sort == false ? "V" : "X"}
        </p>
        {sort && (
          <div className="fixed bottom-5 right-10">
            <input
              type="text"
              id="searchName"
              onChange={(e) => setSearchName(e.target.value)}
              placeholder="Пойск по имени"
              className="p-2 mr-5 bg-blue-100 rounded-md shadow-lg"
            />
            <select
              id="search"
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 bg-blue-100 rounded-md shadow-lg"
            >
              <option value="" selected>
                Все
              </option>
              <option value="cert">Сert</option>
              <option value="toeflitp">Toeflitp</option>
              <option value="тесты toefl primary">тесты Toefl Primary</option>
              <option value="тесты toefl junior standard">
                Тесты Toefl Junior Standard
              </option>
              <option value="обучающий материал toefl junior elc">
                Обучающий материал Toefl Junior Elc
              </option>
              <option value="обучающий материал toefl junior elc">
                Обучающий материал Toefl Junior Elc
              </option>
              <option value="ielts">Ielts</option>
              <option value="тест на знание французского языка tfi">
                Тест на знание французского языка Tfi
              </option>
              <option value="тест toeic listening and reading test">
                Тест Toeic Listening and Reading Test
              </option>
              <option value="toeic speaking and writing test">
                Toeic Speaking and Writing Test
              </option>
              <option value="linguaskill">Linguaskill</option>
              <option value="tds">Tds</option>
            </select>
          </div>
        )}
      </div>
      <div className="px-2">
        <div className="px-4 sm:px-8">
          <div className="pt-3">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold leading-tight">
                Количество заявок: {data.data.length}.
              </h2>
              <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="p-2 duration-200 bg-blue-200 hover:bg-blue-500 rounded-xl"
                table="table-to-xls"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Скачать все заявки Excel"
              />
            </div>
            <div className="px-4 pt-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md">
                <table className="min-w-full leading-normal" id="table-to-xls">
                  <thead>
                    <tr>
                      {col.map((col, index) => (
                        <th
                          key={index}
                          className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200"
                        >
                          {col.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.data
                      .filter((item) => {
                        return search.toLowerCase() == ""
                          ? item
                          : item.tests.toLowerCase().includes(search);
                      })
                      .filter((item) => {
                        return searchName.toLowerCase() == ""
                          ? item
                          : item.fio.toLowerCase().includes(searchName);
                      })
                      .map((row) => {
                        return (
                          <tr
                            className="duration-200 hover:bg-gray-100"
                            key={row.id}
                          >
                            <td className="px-4 py-4 text-sm font-medium text-left border-b">
                              <a className="p-1 duration-200 rounded-md">
                                {(row.fio == "") | (row.fio == null)
                                  ? "Не указан"
                                  : `${row.fio}`}
                              </a>
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              {row.region}
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              {row.iin}
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              {row.report_date == null
                                ? "-"
                                : `${row.report_date}`}
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              {row.report_time == null
                                ? "-"
                                : `${row.report_time}`}
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              {row.email}
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                                ></span>
                                <span className="relative">Принять</span>
                              </span>
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              {row.tests == null ? "-" : `${row.tests}`}
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              {row.number}
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              <Link href={`${row.udostoverenie}`}>
                                <a
                                  target="_blank"
                                  className={
                                    row.udostoverenie == null
                                      ? "pointer-events-none	bg-red-200 text-center px-2 text-red-900 font-extrabold rounded-xl py-1 cursor-not-allowed flex justify-center"
                                      : "font-medium text-green-900 bg-green-200 px-2 rounded-xl py-1 cursor-pointer hover:bg-green-500 duration-200"
                                  }
                                >
                                  {row.udostoverenie == null ? "-" : "Просмотр"}
                                </a>
                              </Link>
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              <Link href={`${row.payment_check}`}>
                                <a
                                  target="_blank"
                                  className={
                                    row.payment_check == null
                                      ? "pointer-events-none	 bg-red-200 text-center px-2 text-red-900 font-extrabold rounded-xl py-1 cursor-not-allowed flex justify-center"
                                      : "font-medium text-green-900 bg-green-200 px-2 rounded-xl py-1 cursor-pointer hover:bg-green-500 duration-200"
                                  }
                                >
                                  {row.payment_check == null ? "-" : "Просмотр"}
                                </a>
                              </Link>
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              {row.sex == null ? "-" : `${row.sex}`}
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              {row.country}
                            </td>
                            <td className="px-5 py-5 text-sm border-b border-gray-200">
                              <span className="flex justify-between">
                                <Link href={`/req/${row.id}`}>
                               <Tooltip title="Открыть"><OpenInNewIcon className="text-blue-500 duration-200 cursor-pointer hover:scale-125" /></Tooltip>
                                </Link>
                                <Tooltip title="Удалить"><DeleteForeverIcon title="Delete" className="text-red-500 duration-200 cursor-pointer hover:scale-125" onClick={() => clickToDelete(row.id)} /></Tooltip>
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddPagaination />
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(
    "https://arioapi.pythonanywhere.com/u-api/international/"
  );
  const data = await res.json();
  console.log(context);
  return {
    props: { data },
  };
}
