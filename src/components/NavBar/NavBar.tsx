"use client";
import Link from "next/link";
import { HandMetal, Menu } from "lucide-react";
import SideBard from "./SideBard";
import MenuButtons from "./MenuButtons";
import { useState } from "react";

const NavBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <div className="border-b border-s-zinc-200 fixed w-full top-0 bg-white z-50 h-[70px]">
        <div className="container flex items-center justify-between h-[70px] gap-x-4">
          <Link href="/">
            <div className="flex flex-row items-center gap-2">
              <HandMetal />
              <h4 className="font-bold">Granos Directos</h4>
            </div>
          </Link>
          <MenuButtons className="hidden lg:flex lg:flex-row lg:gap-4 lg:items-center" />
          <Menu
            className="lg:hidden"
            onClick={() => setSideBarOpen((s) => !s)}
          />
        </div>
      </div>
      <SideBard open={sideBarOpen} onClick={() => setSideBarOpen(false)} />
    </>
  );
};

export default NavBar;
