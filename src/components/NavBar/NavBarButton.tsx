"use client";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarButton({
  href,
  name,
}: {
  href: Url;
  name: string;
}) {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      className={`font-normal text-sm text-shadow ${
        isActive ? "text-cane-600" : "text-black"
      }`}
      color="foreground"
      href={href}
    >
      {name}
    </Link>
  );
}
