import axios from "axios";
import { useEffect, useState } from "react";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function getAllTeachers() {
      try {
        let res = await axios.get(
          "https://69243f273ad095fb84735a27.mockapi.io/teachers"
        );
        setTeachers(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getAllTeachers();
  }, []);

  return ( <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

      {teachers.map((el) => (
        <div className="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group">
          <div className="flex flex-col items-center text-center mb-4">
            <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full h-20 w-20 mb-3 ring-4 ring-blue-100 dark:ring-blue-900">
              <a href={`./single-teacher.html?teacherId=${el.id}`}>
                <img
                  className="aspect-square size-full"
                  alt={el.name}
                  src={el.avatar}
                />
              </a>
            </span>
            <h3 className="text-gray-900 dark:text-white mb-1">{el.name}</h3>

            <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 border-white text-white text-xs font-medium w-fit bg-secondary text-secondary-foreground mb-2">
              {el.profession}
            </span>

            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
              <span className="flex items-center gap-1">{el.experience}y</span>
              <span className="flex items-center gap-1">{el.age}y</span>
            </div>

            <div className="flex items-center gap-1 mb-4">
              <span className="text-gray-900 dark:text-white">
                {el.rating}
              </span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <span className="truncate">{el.createdAt}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <span className="truncate">{el.gmail}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <span className="truncate">@{el.science}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <span className="truncate">linkedin.com/in/{el.linkedin}</span>
            </div>

            <div className="flex gap-3 pt-2 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              data-action="delete"
              data-id={el.id}
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
        </div>
      ))}
    </div>)
};

export default TeachersPage;
