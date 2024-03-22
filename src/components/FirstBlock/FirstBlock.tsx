import Image from "next/image";
import { Button } from "../ui/button";

export default function FirstBlock() {
  return (
    <div className="p-4 md:py-40 w-full h-screen flex flex-col justify-center">
      <div className="grid max-w-8xl mx-auto md:grid-cols-2 gap-20">
        <div className="flex flex-col justify-between">
          <h1 className="text-6xl font-semibold">
            Vender tus
            <span className="block"> granos nunca</span>
            <span className="block"> fue tan fácil!</span>
          </h1>
          <p className="max-w-md mt-10 text-xl">
            A través de GranosDirectos podes vender directamente a las empresas
            exportadoras de forma fácil, segura y con un solo click.
          </p>
          <Button className="mt-6">Consultanos</Button>
        </div>
        <div className="relative hidden md:block">
          <Image
            src="/assets/tractor.jpeg"
            height={400}
            width={400}
            alt="campo"
            className="rounded-full h-96 w-96 absolute -top-10 z-10"
          />
          <Image
            src="/assets/tractor2.jpeg"
            height={400}
            width={400}
            alt="campo"
            className="rounded-full w-80 absolute right-20 h-80 -top-1/2 left-1/2"
          />
          <Image
            src="/assets/firstBlock3.jpg"
            height={400}
            width={400}
            alt="campo"
            className="rounded-full w-72 absolute right-20 h-72 top-1/2 left-48"
          />
        </div>
      </div>
    </div>
  );
}
