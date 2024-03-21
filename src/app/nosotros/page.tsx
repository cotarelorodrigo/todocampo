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
              src="/assets/tractor2.jpeg"
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
            <div className="w-1/2 flex flex-col gap-4 py-8">
              <p className="text-lg text-[#797979]">
                Somos Techforb, una empresa donde la innovación y la excelencia
                tecnológica se unen para brindarle soluciones a medida.
              </p>
              <p className="text-lg text-[#797979]">
                Trabajamos para entender sus objetivos, transformando esas ideas
                en soluciones prácticas y efectivas que impulsan su crecimiento
                y mejoran su rendimiento.
              </p>
              <p className="text-lg text-[#797979]">
                Nos enfocamos en satisfacer sus necesidades específicas,
                ofreciendo una amplia gama de servicios y soluciones digitales.
              </p>
              <p className="text-lg text-[#797979]">
                Nuestra trayectoria en el mercado nos respalda, cada proyecto
                que emprendemos se trata con el mismo nivel de dedicación y
                profesionalismo.
              </p>
              <p className="text-lg text-[#797979]">
                Valoramos nuestro compromiso con la responsabilidad social y la
                comunidad. Creemos que el éxito empresarial va de la mano con la
                sostenibilidad, por lo que buscamos constantemente formas de
                generar un impacto positivo en nuestro entorno.
              </p>
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
