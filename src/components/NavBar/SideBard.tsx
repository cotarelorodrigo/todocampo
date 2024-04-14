import React from "react";
import { cn } from "@/lib/utils";
import MenuButtons from "./MenuButtons";

export default function SideBard({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={cn(
        !open ? "w-0" : "w-full",
        "lg:hidden absolute right-0 top-0 h-screen duration-500 z-40 bg-white border-l border-s-zinc-200 transition-all"
      )}
    >
      <div className="flex flex-col flex-1 bg-red-200 px-4 pt-5  mt-[70px]">
        {open && (
          <MenuButtons
            className="flex flex-col gap-8 items-start"
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
}
