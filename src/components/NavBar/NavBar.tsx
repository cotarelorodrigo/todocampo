import Image from "next/image.js";
import { dataNavBar } from "./NavBar.data";

export default function NavBar() {
  //const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const pathname = usePathname();

  return (
    <div className="bg-zinc-200 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      Navbar
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
}
