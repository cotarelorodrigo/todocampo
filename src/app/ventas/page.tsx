import Image from "next/image";

export default function Ventas() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-full bg-cane-200 h-[350px] flex flex-col items-center justify-center gap-2 mt-[70px] relative  bg-[url('/assets/grid.svg')]">
        <h2 className="text-4xl font-bold">Vender granos</h2>
        <h3>Descubre la forma mas facil de vender tus granos</h3>
      </div>
      <div className="w-full flex flex-row h-full px-4 lg:px-32 py-12 lg:py-24 gap-4 flex-wrap">
        <div className="flex flex-col justify-around w-1/2 flex-auto">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <div className="grid gap-1">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                Información del Producto
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                GD proporciona información técnica y comercial de los diferentes
                commodities y specialities, permitiendo que el productor tenga
                un ecosistema más seguro para la toma de decisión sobre el
                cultivo que va a realizar y cómo y dónde lo podrá vender,
                permitiendo calcular márgenes económicos posibles, y
                anticipándose a los precios de los granos a futuro con la
                pizarra del mercado a término disponible en GD.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <div className="grid gap-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                Seguimiento del movimiento de camiones en tiempo real
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                En GD podés seguir el recorrido de camiones en tiempo real, y
                además cada operación queda resumida en un informe detallado
                para el registro de cada parte.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-auto flex-col items-center justify-center">
          <Image
            src="/assets/ventagranos.jpg"
            alt="venta de granos"
            className="rounded-2xl"
            height={1600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
}
