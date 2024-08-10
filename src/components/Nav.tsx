import React from "react";
import { Icon } from "@iconify/react";
import logoImg from "../assets/images/logo.png";

import config from "../config.json";

const Nav = () => {
  return (
    <div className="p-4 bg-black fixed top-0 left-0 z-50 w-full">
      <nav className="flex justify-between items-center w-full text-white max-md:hidden max-w-screen-xl mx-auto">
        <a href="/" className="text-4xl font-bold">
          <img src={logoImg.src} alt="logo" width={400} height={400} />
        </a>
        <ul className="gap-4 menu menu-horizontal">
          <li>
            <details>
              <summary>Services</summary>
              <ul className="bg-black rounded-t-none p-2">
                {config.services.map((service) => (
                  <li className="link link-hover font-bold" key={service.name}>
                    <a href={service.url}>{service.name}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {config.pages.map((page) => (
            <li className="link link-hover font-bold" key={page.name}>
              <a href={page.url}>{page.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="drawer md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full flex items-center gap-4 justify-between">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="">
            <Icon icon="mdi:menu" className="text-white text-4xl" />
          </label>
          <a href="/">
            <img
              src={logoImg.src}
              alt="logo"
              width={400}
              height={400}
              className="w-52"
            />
          </a>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <details>
                <summary>Services</summary>
                <ul className="rounded-t-none p-2">
                  {config.services.map((service) => (
                    <li className="link link-hover" key={service.name}>
                      <a href={service.url}>{service.name}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
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
