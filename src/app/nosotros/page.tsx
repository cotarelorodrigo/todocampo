import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Nosotros() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-cane-200 h-[250px] flex flex-col items-center justify-center gap-2 mt-[70px] bg-[url('/assets/grid.svg')]">
        <h2 className="text-4xl font-bold">¿Quiénes somos?</h2>
        <h3>Vende tus granos de forma sencilla</h3>
      </div>
      <div className="w-full px-12 xl:px-64 flex flex-1 flex-col gap-16 pt-10">
        <div className="flex flex-row gap-8">
          <div className="w-full xl:w-2/3 h-[750px] relative">
            <Image
              src="/assets/tractor.jpeg"
              alt="nosotros"
              layout="fill"
              className="rounded-3xl"
            />
          </div>
          <div className="rounded-3xl w-1/3 h-[750px] relative xl:block hidden">
            <Image
              src="/assets/soja.jpeg"
              alt="nosotros"
              layout="fill"
              className="rounded-3xl"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center xl:items-start">
          <h1 className="text-4xl font-bold text-cane-600">¿Quiénes somos?</h1>
          <div className="flex xl:justify-between flex-1 flex-row gap-32 flex-wrap  xl:flex-nowrap justify-center">
            <div className="w-1/2 flex flex-col  justify-evenly gap-4">
              <p className="text-lg text-[#797979]">
                Somos <span className="text-cane-600">GranosDirectos</span>, una
                plataforma de venta que conecta al productor directamente con
                las principales empresas agroexportadoras, simplificando y
                agilizando la venta de granos en un contexto de confianza y
                seguridad.
              </p>
              <p className="text-lg text-[#797979]">
                Además, acompañamos al productor con información del mercado de
                commodities y specialities, brindamos información técnica sobre
                diferentes cultivos de interés, y asesoramos en materia de
                seguros agropecuarios para una mejor cobertura de la inversión.
              </p>
              <p className="text-lg text-[#797979]">Todo en el mismo lugar.</p>
            </div>
            <div className="w-1/2 flex flex-col justify-center gap-8">
              <div className="flex flex-row justify-between items-center">
                <h4 className="w-1/4 text-3xl text-cane-500">Vision</h4>
                <p className="w-3/4 text-lg text-[#797979]">
                  Nuestra visión es ser un socio tecnológico de confianza para
                  nuestros clientes, ayudándolos a alcanzar el éxito y superar
                  sus metas comerciales.
                </p>
              </div>
              <Separator />
              <div className="flex flex-row justify-between items-center">
                <h4 className="w-1/4 text-3xl text-cane-500">Misión</h4>
                <p className="w-3/4 text-lg text-[#797979]">
                  Entendemos que la tecnología es una herramienta poderosa, y
                  nuestra misión es ponerla al servicio de su empresa para
                  impulsar su eficiencia y competitividad.
                </p>
              </div>
              <Separator />
              <div className="flex flex-row justify-between items-center flex-wrap">
                <h4 className="w-1/4 text-3xl text-cane-500">Valores</h4>
                <p className="w-3/4 text-lg text-[#797979]">
                  Nuestra cultura empresarial fomenta la creatividad y la
                  colaboración, permitiendo que cada miembro del equipo aporte
                  sus habilidades para lograr resultados sobresalientes.
                </p>
              </div>
              <Separator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
