import React, { useState } from "react";
import request from "../api/request";

import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="relative">
        <div className="pb-1 flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide ">
          {Object.entries(request).map(([key, { title, url }]) => (
            <Link
              to={`${title}`}
              className=" transition duration-100 transform hover:scale-125 hover:text-white
                      active:text-yellow-600 last:pr-20"
              key={key}
            >
              {title}
            </Link>
          ))}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
