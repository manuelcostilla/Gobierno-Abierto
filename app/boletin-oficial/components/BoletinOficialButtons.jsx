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
      <div className="w-full flex justify-center xs:text-xs xs:justify-center m-3 font-sans">
        {añosUnicos.map((año) => (
          <div key={año}>
            <Button
              onClick={() => cambiarBox(año)}
              className={`mt-2 m-3 text-white bg-blue-header hover:bg-blue-500 font-bold py-3 px-3  ${
                selectedYear === año
                  ? 'text-black border-dotted border-l border-r border-t border-gray-400 text-sm bg-gray-300'
                  : ''
              }`}
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
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
