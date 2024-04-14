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
        "lg:hidden absolute right-0 top-0 h-screen w-full px-4 pt-5 duration-500 z-40 mt-[70px] bg-white border-l border-s-zinc-200",
        !open ? "hidden" : "flex flex-col"
      )}
    >
      <MenuButtons
        className="lg:hidden flex flex-col gap-8 items-start"
        onClick={onClick}
      />
    </div>
  );
}
