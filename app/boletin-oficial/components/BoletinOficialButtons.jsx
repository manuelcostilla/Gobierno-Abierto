'use client'
import { useState } from 'react'
import { pdfBox } from '../data/pdfBoletinOficial'
import { BoletinOficial } from './BoletinOficial'

function BoletinOficialButtons () {
  const [selectedYear, setSelectedYear] = useState('2023')

  const cambiarBox = (año) => {
    setSelectedYear(año)
  }

  const añosUnicos = [...new Set(pdfBox.map((box) => box.año))]

  return (
    <>
      <div className="flex justify-evenly">
        {añosUnicos.map((año) => (
          <div key={año}>
            <button
              onClick={() => cambiarBox(año)}
              className={`mt-2 text-blue-header font-bold py-4 px-4 ${
                selectedYear === año
                  ? 'text-green-400 border-dotted border-l border-r border-t border-gray-400'
                  : ''
              }`}
            >
              BOLETÍN OFICIAL {año}
            </button>
          </div>
        ))}
      </div>

      <BoletinOficial data={pdfBox.filter((box) => box.año === selectedYear)} />
    </>
  )
}

export default BoletinOficialButtons
