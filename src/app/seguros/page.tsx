import InsuranceForm from "@/components/Form/InsuranceForm";
import Image from "next/image";

export default function Seguros() {
  return (
    <div className="h-full container flex flex-row">
      <div className="basis-1/2 pr-10">
        <h1 className="text-4xl font-bold">Seguros Agropecuarios</h1>
        <h2 className="text-xl italic py-5 text-justify break-words text-gray-600 dark:text-gray-400">
          Completá el formulario y en menos de 24 hs. te enviamos una propuesta
          de cobertura que podrás ajustar según tus necesidades y costos
          objetivo.
        </h2>
        <div className="flex flex-1 h-full relative">
          <Image
            src="/assets/soja.jpeg"
            alt="nosotros"
            layout="fill"
            className="rounded-3xl"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="basis-1/2 px-10 h-full flex flex-col">
        <InsuranceForm />
      </div>
    </div>
  );
}

/*
  Hectareas,
  cobertura,
  mail de contacto,
  telefono de contacto
*/
