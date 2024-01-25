import Image from "next/image";

export default function FirstBlock() {
  return (
    <div className="relative p-4 md:py-40 w-full">
      <div className="grid max-w-5xl mx-auto md:grid-cols-2 bg-green-200">
        <div>
          <h1 className="text-5xl font-semibold">
            La revolucion
            <span className="block bg-green-300">del campo</span>
            esta aca
          </h1>
          <p className="max-w-md mt-10">
            Nuestra plataforma viene a revolucionar el campo brindadole a
            nuestros clientes una solucion de calidad que facilite y aumente las
            ganancias
          </p>
        </div>
        <div className="rounded-md">
          <Image
            src="/assets/firstBlock.jpg"
            height={800}
            width={800}
            alt="campo"
          />
        </div>
      </div>
    </div>
  );
}
