import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleTeacher = () => {
    const { id } = useParams()
    const [teacher , setTeacher] = useState(null)
useEffect(() => {
    async function getSingleTeacher() {
        try{
           let res = await axios.get(`https://69243f273ad095fb84735a27.mockapi.io/teachers/${id}`)
           setTeacher(res.data)
        }catch(err){
            console.log(err);
            
        }
    }
getSingleTeacher()
    
} , [id])
  return (
    <div className='grid grid-cols-3 gap-20 ml-5'>
        <div className="text-card-foreground flex flex-col  gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group">
          <div className="flex flex-col items-center text-center mb-4">
            <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full h-20 w-20 mb-3 ring-4 ring-blue-100 dark:ring-blue-900">
                <img
                  className="aspect-square size-full"
                  alt={teacher?.name}
                  src={teacher?.avatar}
                />
            </span>
            <h3 className="text-gray-900 dark:text-white mb-1">{teacher?.name}</h3>

            <span className="inline-flex items-center justify-center rounded-md border border-blue-500 text-blue-600 dark:text-blue-400 px-2 py-0.5 text-xs font-medium w-fit bg-secondary text-secondary-foreground mb-2">
              {teacher?.profession}
            </span>

            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
              <span className="flex items-center gap-1">{teacher?.experience}y</span>
              <span className="flex items-center gap-1">{teacher?.age}y</span>
            </div>

            <div className="flex items-center gap-1 mb-4">
              <span className="text-gray-900 dark:text-gray-400"> Rating: {teacher?.rating}</span>
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
              <span className="truncate">{teacher?.createdAt}</span>
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
              <span className="truncate">{teacher?.gmail}</span>
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
              <span className="truncate">t.me/{teacher?.science}</span>
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
              <span className="truncate">linkedin.com/in/{teacher?.linkedin}</span>
            </div>

            <div className="flex gap-3 pt-2 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                data-action="edit"
                
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

              {/* <button
                data-action="delete"
                
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
              </button> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default SingleTeacher