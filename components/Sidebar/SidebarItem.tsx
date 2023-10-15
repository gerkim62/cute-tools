"use client";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import Link from "next/link";
import { Url } from "url";


export const SidebarItem = ({ item, setSidebarShowing }: SidebarItemProps) => {
  if (item.items) {
    return (
      <SubMenu
        icon={item.icon && <item.icon className="text-pink-600" />}
        label={item.label}
      >
        {item.items.map((subItem, index) => (
          <MenuItem
            key={index}
            onClick={() => setSidebarShowing(false)}
            component={<Link href={subItem.path as Url}></Link>}
            icon={subItem.icon && <subItem.icon className="text-pink-600" />}
          >
            {subItem.label}
          </MenuItem>
        ))}
      </SubMenu>
    );
  } else {
    return (
      <MenuItem
        component={<Link href={item.path as Url}></Link>}
        onClick={() => setSidebarShowing(false)}
        icon={item.icon && <item.icon className="text-pink-600" />}
      >
        {item.label}
      </MenuItem>
    );
  }
};
