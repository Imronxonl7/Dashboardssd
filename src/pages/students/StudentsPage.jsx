import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [loading , setLoading] = useState(true)
  const [search , setSearch] =useState("")

async function getAllStudents() {
      try {
        const res = await axios.get(
          `https://69243f273ad095fb84735a27.mockapi.io/students?search=${search}`
        );
        setStudents(res.data);
        setLoading(false)
      } catch (err) {
        console.log(err);
      }
    }
  useEffect(() => {
    getAllStudents();
  }, [search]);
  async function deleteStudent(id) {
  try{
    await axios.delete(`https://69243f273ad095fb84735a27.mockapi.io/students/${id}`)
    getAllStudents()
    toast(`Siz ${id}-id li o'quvchini o'chirdingiz`)
  }catch(err){
    console.log(err);
    
  }
}
if(loading){
  return (
    <div className="flex items-center justify-center flex-col h-screen">
        <div className="text-gray-800 relative w-[100px] h-[100px] border-[4px] border-gray-800  font-bold rounded-[50px] flex items-center justify-center flex-col animate-spin ">
          <span className="absolute w-[15px] h-[10px] bg-white top-[-4px]"></span>
        </div>
      </div>
  )
}

  return (
    <div>
      <input
      onChange={(e) => setSearch(e.target.value)}
      className="outline-none p-2 text-[20px] font-medium mx-10 my-5 rounded-[20px] bg-gray-800 text-gray-400 " 
      type="search" 
      placeholder="O'quvchilarni qidirish" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {students.map((el) => (
        <div
          key={el.id}
          className="student-card flex flex-col gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group"
        >
          <div className="flex flex-col justify-between items-center text-center mb-4">
            <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full h-20 w-20 mb-3 ring-4 ring-purple-100 dark:ring-purple-900">
              <Link to={`/students/${el.id}`}>
                <img
                  className="aspect-square size-full object-cover"
                  alt={el.name}
                  src={el.avatar}
                  
                />
              </Link>
            </span>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {el.name}
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 border-blue-500 text-blue-600 dark:text-blue-400">
                Grade {el.grade}
              </span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                {el.age} years old
              </span>
            </div>

            <div className="w-full space-y-2 mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {el.rating}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="8" cy="8" r="6"></circle>
                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                    <path d="M7 6h1v4"></path>
                    <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                  </svg>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {el.coin}
                  </span>
                </div>
              </div>

              <div className="bg-gray-200 dark:bg-gray-700 w-full overflow-hidden rounded-full h-2">
                <div
                  className="bg-black dark:bg-white h-full transition-all"
                  style={{ width: `${Math.min(el.rating, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 flex-shrink-0 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              <span className="truncate">{el.createdAt}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 flex-shrink-0 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <span className="truncate">{el.yahoo}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <svg
                className="h-4 w-4 flex-shrink-0 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
              <span className="truncate">@{el.telegram}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <svg
                className="h-4 w-4 flex-shrink-0 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="truncate">{el.linkedin}</span>
            </div>
          </div>

          <div className="flex gap-3 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              data-action="edit"
              data-id={el.id}
              className="flex-1 flex items-center justify-center gap-2 h-10 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm font-medium text-gray-800 dark:text-gray-200 transition"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
              Edit
            </button>

            <button
            onClick={() => deleteStudent(el.id)}
              className="flex-1 flex items-center justify-center gap-2 h-10 rounded-md bg-red-100 hover:bg-red-200 text-red-600 dark:bg-red-900/40 dark:hover:bg-red-900/60 dark:text-red-300 text-sm font-medium transition"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default StudentsPage;
