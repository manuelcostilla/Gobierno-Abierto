import Link from "next/link";
import React from "react";

const Main_presupuesto = () => {
  return (
    <>
      <div className="flex h-36 w-full bg-blue-header justify-center items-center">
        <h1 className="text-4xl font-sans text-white font-bold">PRESUPUESTO PUBLICO</h1>
      </div>
      <div className="flex p-8">
        <p>En esta sección encontraras dos atajos para poder ir a visualizar ya sea el gasto o el presupuesto.</p>
      </div>
      <div className="flex justify-center items-center m-3">
        <Link href="/presupuesto-publico/gastos">
          <button className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]">
           Gastos
          </button>
        </Link>
        <Link href="/presupuesto-publico/ingresos">
          <button className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]">
            Ingresos
          </button>
        </Link>
        <Link href="/presupuesto-publico/ingresos">
          <button className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[150px]">
            Presupuesto
          </button>
        </Link>
      </div>
    </>
  );
};

export default Main_presupuesto;
