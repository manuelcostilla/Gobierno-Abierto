"use client";
import { BoletinOficial } from "./components/BoletinOficial";
import { BoletinOficialTexto } from "./components/BoletinOficialTexto";
import { useState } from "react";
import { pdfBox } from "./data/pdfBoletinOficial";

const PdfDownloader = () => {
  const [estadoBox, selectedBox] = useState("1");

  const pdfBoxData = pdfBox.find((pdfBox) => pdfBox.id === estadoBox);

  const cambiarBox = (id) => {
    selectedBox(id);
  };

  return (
    <>
      <BoletinOficialTexto />

      <div className="flex justify-evenly">
        {pdfBox.map((box) => (
          <>
            <div className="">
              <div className="">
                <button
                  key={box.id}
                  onClick={() => cambiarBox(box.id)}
                  className={`mt-2 text-blue-header font-bold py-4 px-4 
                  ${
                    estadoBox === box.id
                      ? " text-green-400 border-dotted border-l border-r border-t border-gray-400"
                      : ""
                  }`}
                >
                  BOLETÍN OFICIAL {box.año}
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
      <BoletinOficial
        id={estadoBox}
        titulo={pdfBoxData ? pdfBoxData.titulo : ""}
        texto={pdfBoxData ? pdfBoxData.texto : ""}
        boton={pdfBoxData ? pdfBoxData.boton : ""}
      />
    </>
  );
};
export default PdfDownloader;
