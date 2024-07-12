import InsuranceForm from "@/components/Form/InsuranceForm";

export default function Seguros() {
  return (
    <div className="h-full container flex flex-row">
      <div className="basis-1/2 pr-10">
        <h1 className="text-4xl font-bold">Seguros Agropecuarios</h1>
        <h2 className="text-xl italic pt-5 text-justify break-words">
          Completá el formulario y en menos de 24 hs. te enviamos una propuesta
          de cobertura que podrás ajustar según tus necesidades y costos
          objetivo.
        </h2>
        <p></p>
      </div>
      <div className="basis-1/2 bg-orange-200">
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
