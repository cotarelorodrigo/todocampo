import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactoButton() {
  return (
    <Link href="/sign-in">
      <Button className="bg-cane-500 hover:bg-cane-600">Contáctanos</Button>
    </Link>
  );
}
