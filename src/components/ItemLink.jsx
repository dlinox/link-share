// Item.js
import React from "react";

const ItemLink = ({ title, username, votes, url }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 mb-4">
      {/* Encabezado de la tarjeta */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        <div className="ml-3">
          <div className="text-gray-800 font-semibold">{title}</div>
          <div className="text-gray-500">@{username}</div>
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="mt-4 text-gray-800">{url}</div>

      {/* Pie de la tarjeta */}
      <div className="flex items-center justify-end mt-4">
        <div className="flex  ">
          <button className="flex items-center  bg-indigo-50 p-1.5 rounded-lg">
            <span className="text-gray-600 mx-2 font-mono">{votes}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-700 bg-slate-200 rounded-lg p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemLink;
