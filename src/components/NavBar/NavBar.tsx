import { dataNavBar } from "./NavBar.data";
import Link from "next/link";
import { HandMetal } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";

const NavBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="border-b border-s-zinc-200 fixed w-full z-10 top-0 bg-white">
      <div className="container flex items-center justify-between h-14">
        <Link href="/">
          <HandMetal />
        </Link>
        <div className="flex flex-row gap-4 items-center">
          {dataNavBar.map((data) => {
            //console.log("Active:", pathname === data.idLink);
            return (
              <Link
                key={data.id}
                color="foreground"
                href={data.idLink}
                className="font-normal text-sm"
              >
                {data.name}
              </Link>
            );
          })}
          {session?.user ? (
            <UserAccountNav />
          ) : (
            <Link className={buttonVariants()} href="/sign-in">
              Ingresar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
  /*
  return (
    <Navbar
      className="bg-primary-300 fixed top-0"
      classNames={{
        item: ["data-[active=true]:text-secondary-100"],
      }}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            src="/assets/logo.jpeg"
            width={50}
            height={50}
            alt="Logo todocampo"
          />
          <p className="font-bold text-inherit">todocampo</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6 grow" justify="center">
        <NavbarBrand>
          <Image
            src="/assets/logo.jpeg"
            width={50}
            height={50}
            alt="Logo todocampo"
          />
          <p className="font-bold text-inherit pl-2">todocampo</p>
        </NavbarBrand>
        {dataNavBar.map((data) => {
          console.log("Active:", pathname === data.idLink);
          return (
            <NavbarItem
              key={data.id}
              isActive={pathname === data.idLink}
              className="group"
            >
              <Link
                color="foreground"
                href={data.idLink}
                className="font-normal text-sm group-data-[active=true]:text-secondary-500"
              >
                {data.name}
              </Link>
            </NavbarItem>
          );
        })}
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Ingresar
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {dataNavBar.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === dataNavBar.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
  */
};

export default NavBar;
