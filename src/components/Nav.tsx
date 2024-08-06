import React from "react";
import { Icon } from "@iconify/react";

import config from "../config.json";

const Nav = () => {
  return (
    <div className="p-4 bg-black">
      <nav className="flex justify-between items-center w-full text-white max-md:hidden">
        <a href="/" className="text-4xl font-bold">
          {config.businessName}
        </a>
        <ul className="flex gap-4">
          {config.pages.map((page) => (
            <li className="link link-hover font-bold" key={page.name}>
              {page.name}
            </li>
          ))}
        </ul>
      </nav>
      <nav className="drawer md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-black w-full flex items-center gap-4">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="">
            <Icon icon="mdi:menu" className="text-white text-4xl" />
          </label>
          <h1 className="text-white font-bold text-2xl">
            {config.businessName}
          </h1>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {config.pages.map((page) => (
              <li className="hover:font-bold transition" key={page.name}>
                <a href={page.url}>{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
