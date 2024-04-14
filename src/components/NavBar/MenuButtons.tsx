"use client";
import { dataNavBar } from "./NavBar.data";
import UserAccountNav from "./UserAccountNav";
import NavBarButton from "./NavBarButton";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

const MenuButtons = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  //const session = await getServerSession(authOptions);
  const { data: session } = useSession();

  return (
    <div className={cn(className)}>
      {dataNavBar.map((data) => {
        //console.log("Active:", pathname === data.idLink);
        return (
          <NavBarButton
            key={data.id}
            href={data.idLink}
            name={data.name}
            onClick={onClick}
          />
        );
      })}
      {session?.user ? (
        <UserAccountNav />
      ) : (
        <Link className={buttonVariants()} onClick={onClick} href="/sign-in">
          Ingresar
        </Link>
      )}
    </div>
  );
};

export default MenuButtons;
