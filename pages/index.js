import Link from "next/link";

function Indexpage() {
  return (
    <div className="bg-[#fafafa] dark:bg-[#111] h-[100vh] relative flex items-center">
      <div className="flex flex-col mx-auto">
        <h1 className="text-4xl font-bold text-center text-black dark:text-white">
          Admin Panel For Ustudy
        </h1>
        <div className="flex justify-center mt-8">
          <Link href="/login">
            <a className="w-[200px] text-center text-white bg-black dark:text-black dark:bg-white py-1.5 px-2 rounded-md border border-white dark:border-black hover:border-black hover:dark:border-white hover:bg-white hover:dark:bg-black hover:text-black hover:dark:text-white duration-150">
              Войти
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}



export default Indexpage;
