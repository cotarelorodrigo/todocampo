import CotizationTable from "@/components/CotizationTable/CotizationTable";
import { CotizacionLine } from "@/components/CotizacionLine";
import Image from "next/image";
import ContactoButton from "@/components/ContactoButton/ContactoButton";

export default function Cotizaciones() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-full bg-cane-200 h-[250px] flex flex-col items-center justify-center gap-2 mt-[70px] relative bg-[url('/assets/grid.svg')] p-4">
        <h2 className="text-4xl font-bold">
          Mantente Informado con Nuestras Cotizaciones de Granos
        </h2>
        <h3>Encontra tu mejor cotizacion</h3>
      </div>
      <div className="flex flex-1 pt-4">
        <div className="w-full grid xl:grid-cols-2 grid-cols-1 container">
          <div className="xl:col-span-1 px-4 xl:block hidden relative ">
            <Image
              src="/assets/circle.svg"
              alt="My SVG"
              width={600}
              height={600}
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-60"
            />
            <div className="w-3/4 absolute top-2/4 left-1/4 shadow-md z-20">
              <CotizationTable />
            </div>
            <div className="w-3/4 absolute top-1/4 shadow-md z-10">
              <CotizacionLine />
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-12 justify-center items-center">
            <p className="container text-lg text-[#797979]">
              <span className="font-bold">
                En GD podés acceder a las diferentes cotizaciones por cultivo y
                seleccionar la empresa compradora más conveniente
              </span>{" "}
              teniendo en cuenta la distancia al acopio, condiciones de recibo y
              opciones para la liquidación de los granos.
            </p>
            <p className="container text-lg text-[#797979]">
              A través de GD podés comparar entre empresas y liquidar tus granos
              de acuerdo a tus necesidades específicas. El pago se hace
              directamente de la empresa compradora a la cuenta del vendedor.
              Todas las transacciones incluyen constancia de pesajes y
              condiciones de recibo en tiempo real, para operaciones más seguras
              y transparentes.
            </p>
            <ContactoButton />
          </div>
        </div>
      </div>
    </div>
  );
}
