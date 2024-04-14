import FirstBlock from "@/components/FirstBlock/FirstBlock";
import SecondBlock from "@/components/SecondBlock/SecondBlock";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="flex w-full flex-col mt-14 items-center">
      <Image
        src="/assets/blob2.svg"
        alt="My SVG"
        width={700}
        height={700}
        className="absolute top-0 left-0 -z-10"
      />
      <FirstBlock />
      <Separator className="w-3/4" />
      <SecondBlock />
    </div>
  );
}
