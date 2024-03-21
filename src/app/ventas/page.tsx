import React from "react";

export default function Ventas() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-full bg-cane-200 h-[350px] flex flex-col items-center justify-center gap-2 mt-[70px] relative  bg-[url('/assets/grid.svg')]">
        <h2 className="text-4xl font-bold">Vender granos</h2>
        <h3>Vende tus granos de forma sencilla</h3>
      </div>
      <div className="w-full grid xl:grid-cols-2 grid-cols-1 h-full px-32">
        <p>
          GD proporciona información técnica y comercial de los diferentes
          commodities y specialities, permitiendo que el productor tenga un
          ecosistema más seguro para la toma de decisión sobre el cultivo que va
          a realizar y cómo y dónde lo podrá vender, permitiendo calcular
          márgenes económicos posibles, y anticipándose a los precios de los
          granos a futuro con la pizarra del mercado a término disponible en GD.
        </p>
        <p>
          En GD podés seguir el recorrido de camiones en tiempo real, y además
          cada operación queda resumida en un informe detallado para el registro
          de cada parte.
        </p>
      </div>
    </div>
  );
}
