import InsuranceForm from "@/components/Form/InsuranceForm";
import Image from "next/image";

export default function Seguros() {
  return (
    <div className="h-full container flex flex-row flex-wrap justify-center mt-[90px] p-10 w-screen">
      <div className="basis-1/2 pr-10 flex flex-col">
        <h1 className="text-4xl font-bold">Seguros Agropecuarios</h1>
        <h2 className="text-xl italic py-5 text-justify break-words text-gray-600 dark:text-gray-400">
          Completá el formulario y en menos de 24 hs. te enviamos una propuesta
          de cobertura que podrás ajustar según tus necesidades y costos
          objetivo.
        </h2>
        <div className="hidden xl:flex w-[600px] h-[400px] relative">
          <Image
            src="/assets/soja.jpeg"
            alt="nosotros"
            width={600}
            height={400}
            className="rounded-3xl hidden xl:block"
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
