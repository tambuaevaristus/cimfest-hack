import React from "react";

export default function SideBar() {
  return (
    <nav className=" bg-gray-700 pt-6 h-full">
      <div className="px-6 mb-6">
        <h1 className="text-white font-serif text-lg">MuTumBu</h1>
      </div>
      <div className="px-2 mb-6">
        <div className="bg-gray-200 flex font-medium items-center px-4 py-2 rounded text-sm text-white">
          <svg
            className="h-6 mr-4"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
              fill="currentColor"
            ></path>
          </svg>
          Home
        </div>
        <div className="flex font-medium items-center px-4 py-2 rounded text-sm text-gray-100 hover:text-white">
          <svg
            className="h-6 mr-4"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
          Search
        </div>
        <div className="flex font-medium items-center px-4 py-2 rounded text-sm text-gray-100 hover:text-white">
          <svg
            className="h-6 mr-4"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
              fill="currentColor"
            ></path>
          </svg>
          Your Library
        </div>
      </div>
      <div>
        <h3 className="text-xs text-gray-100 uppercase text-white px-6 tracking-widest font-light mb-4">
          Playlists
        </h3>
        {/* <div className="mb-3">
          <div className="px-6 py-1 flex items-center text-sm text-white opacity-50 hover:opacity-100">
            <svg
              className="bg-white fill-current h-8 mr-4 p-1 text-black w-8"
              shape-rendering="crispEdges"
              viewBox="0 0 36 36"
            >
              <path d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"></path>
            </svg>
            Create Playlist
          </div>
          <div className="px-6 py-1 flex items-center text-sm text-white opacity-50 hover:opacity-100">
            <svg
              className="bg-liked-songs fill-current h-8 mr-4 p-2 w-8"
              viewBox="0 0 20 20"
            >
              <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
            </svg>
            Liked Songs
          </div>
        </div> */}
        <hr className="border-gray-200 mx-6 mb-3" />
        <div>
          <div className="px-6 py-2 flex items-center text-sm text-white text-gray-100 hover:text-white">
            Liked from Radio
          </div>
          <div className="px-6 py-2 flex items-center text-sm text-white text-gray-100 hover:text-white">
            Discover Weekly
          </div>
        </div>
      </div>
    </nav>
  );
}
