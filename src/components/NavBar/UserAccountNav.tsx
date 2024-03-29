"use client";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

function UserAccountNav() {
  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
      variant="destructive"
    >
      Salir
    </Button>
  );
}

export default UserAccountNav;
