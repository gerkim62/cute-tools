"use client";

import { useEffect, useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  FaUser,
  FaCode,
  FaCalendar,
  FaBook,
  FaBars,
  FaTimes,
  FaBullhorn,
  FaListUl,
  FaFileDownload,
  FaSearch,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";
import useIsLgScreen, { LG_SCREEN_BREAKPOINT } from "@/hooks/useIsLgScreen";
import Logo from "@/components/Logo";
import { Url } from "url";
import { SidebarItem } from "./SidebarItem";

 const Sidebar = () => {
  const sidebarItems: SidebarItem[] = [
    {
      label: "Courses Selector",
      items: [
        { label: "Select courses", path: "/courses-selector", icon: FaSearch },
        { label: "View selected", path: "/courses-selector", icon: FaListUl },
        {
          label: "Limitations",
          path: "/courses-selector/limitations",
          icon: FaBullhorn,
        },
      ],
    },

    {
      label: "Cute Timetable",
      items: [
        {
          label: "Create timetable",
          path: "/cute-timetable",
          icon: FaFileDownload,
        },
        {
          label: "View timetable",
          path: "/cute-timetable/view",
          icon: FaListUl,
        },
      ],
    },
    {
      label: "Exam Timetable",
      items: [
        {
          label: "Extract timetable",
          path: "/exam-timetable",
          icon: FaFileDownload,
        },
        {
          label: "View extracted",
          path: "/exam-timetable/extracted",
          icon: FaListUl,
        },
        {
          label: "Advanced options",
          path: "/exam-timetable/update",
          icon: FaCode,
        },
      ],
    },
    { label: "Suggestions", path: "/suggestions", iconhidden: FaBullhorn },
    { label: "About me", path: "/about-me", iconhidden: FaUser },
  ];

  const [sidebarShowing, setSidebarShowing] = useState(false);
  let isLgScreen = useIsLgScreen();

  useEffect(() => {
    isLgScreen= window.matchMedia(`(min-width: ${LG_SCREEN_BREAKPOINT}px)`).matches
  }
  , []);

  return (
    <>
      {sidebarShowing && (
        // overlay div
        <div
          onClick={() => setSidebarShowing(false)}
          className="w-full h-full fixed bg-gray-500/50 z-50 lg:hidden"
        ></div>
      )}
      <button
        style={{ zIndex: 100 }}
        className="fixed left-4 top-2 z-10 border-2 p-1 lg:hidden"
        onClick={() => setSidebarShowing((prev) => !prev)}
      >
        {sidebarShowing ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      <div style={{ zIndex: 100 }} className="lg:relative z-10 w-[270px] hidden lg:block"></div>

      <div style={{ zIndex: 100 }} className="fixed z-10 bottom-0 lg-w-[270px]">
        <ProSidebar
          onBackdropClick={() => {
            setSidebarShowing(false);
          }}
          width={sidebarShowing || isLgScreen ? "270px" : "0"}
          toggled={false}
          className="h-screen lg:h-[95vh] overflow-y-auto 
          overflow-x-hidden bg-white lg:w-[270px]"
        >
          <Menu>
            <MenuItem
              onClick={() => setSidebarShowing(false)}
              component={<Link href={"/"}></Link>}
              className=""
            >
              <Logo />
            </MenuItem>
            {sidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                item={item}
                setSidebarShowing={setSidebarShowing}
              />
            ))}
          </Menu>
        </ProSidebar>
      </div>
    </>
  );
};
Sidebar.displayName = "Sidebar";
export default Sidebar;