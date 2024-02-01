import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart, HeartHandshake, CandlestickChart } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const CardInfo = ({
  title,
  description,
  icon,
  className,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}) => (
  <Card
    className={cn(
      " h-80 w-80 flex flex-col border-0 hover:-translate-y-12 duration-300 ",
      className
    )}
  >
    <CardHeader>
      {icon}
      <CardTitle className="py-8">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  </Card>
);

function SecondBlock() {
  return (
    <div className="relative p-10 w-full mx-auto max-w-7xl">
      <h2 className="text-3xl pb-20">¿Que ofrecemos?</h2>
      <div className="flex flex-row flex-wrap w-full justify-between gap-4">
        <CardInfo
          className="bg-cane-50"
          icon={<ShoppingCart size={64} />}
          title="Comercialización de granos"
          description="Comercializa tus granos de la forma mas sencilla y segura"
        />
        <CardInfo
          icon={<HeartHandshake size={64} />}
          title="Seguros Agropecuarios"
          description="Contrata tu seguro y dormi tranquilo"
        />
        <CardInfo
          className="bg-cane-50"
          icon={<CandlestickChart size={64} />}
          title="Cotizaciones"
          description="Ofrecemos las mejores cotizaciones del mercado"
        />
      </div>
    </div>
  );
}

export default SecondBlock;
