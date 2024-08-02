'use client'
import { useState } from 'react'
import { pdfBox } from '../data/pdfBoletinOficial'
import { BoletinOficial } from './BoletinOficial'
import { Button } from '@/components/ui/button'
function BoletinOficialButtons () {
  const [selectedYear, setSelectedYear] = useState('2023')

  const cambiarBox = (año) => {
    setSelectedYear(año)
  }

  const añosUnicos = [...new Set(pdfBox.map((box) => box.año))]

  return (
    <>
      <div className="w-full flex justify-evenly  xs:text-xs xs:justify-center">
        {añosUnicos.map((año) => (
          <div key={año}>
            <Button
              onClick={() => cambiarBox(año)}
              className={`mt-2 text-white bg-blue-header hover:bg-blue-400 font-bold py-3 px-3  ${
                selectedYear === año
                  ? 'text-black border-dotted border-l border-r border-t border-gray-400 text-sm'
                  : ''
              }`}
            >
              BOLETÍN OFICIAL {año}
            </Button>
          </div>
        ))}
      </div>

      <BoletinOficial data={pdfBox.filter((box) => box.año === selectedYear)} />
    </>
  )
}

export default BoletinOficialButtons
