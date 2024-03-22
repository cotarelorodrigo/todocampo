import React from "react";

export default function Ventas() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-full bg-cane-200 h-[350px] flex flex-col items-center justify-center gap-2 mt-[70px] relative  bg-[url('/assets/grid.svg')]">
        <h2 className="text-4xl font-bold">Vender granos</h2>
        <h3>Descubre la forma mas facil de vender tus granos</h3>
      </div>
      <div className="w-full grid xl:grid-cols-2 grid-cols-1 h-full px-32">
        <section className="py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <div className="grid gap-1">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                    Product Information
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    GD proporciona información técnica y comercial de los
                    diferentes commodities y specialities, permitiendo que el
                    productor tenga un ecosistema más seguro para la toma de
                    decisión sobre el cultivo que va a realizar y cómo y dónde
                    lo podrá vender, permitiendo calcular márgenes económicos
                    posibles, y anticipándose a los precios de los granos a
                    futuro con la pizarra del mercado a término disponible en
                    GD.
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <div className="grid gap-1">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                    Real-time Truck Movement Tracking
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    En GD podés seguir el recorrido de camiones en tiempo real,
                    y además cada operación queda resumida en un informe
                    detallado para el registro de cada parte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
