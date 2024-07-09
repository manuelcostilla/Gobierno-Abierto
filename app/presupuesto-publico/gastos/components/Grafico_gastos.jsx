'use client'

import { useState, useEffect } from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { Button } from '@nextui-org/react'
import { Tooltip, Legend, BarController } from 'chart.js'

Chart.register(Tooltip, Legend, BarController)

export const Grafico_gastos = () => {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})
  const [activeChart, setActiveChart] = useState(0)
  const [chartType, setChartType] = useState('Bar')
  const [selectedYear, setSelectedYear] = useState(null)
  useEffect(() => {
    const chartData5 = {
      labels: [
        'C.SUPERIOR',
        'GOBIERNO',
        'HACIENDA',
        'CULTURA',
        'OBRAS Y SERVICIOS',
        'MODERNIZACION',
        'DESARROLLO HUMANO',
        'H.C.D'
      ],
      datasets: [
        {
          id: 1,
          label: 'Gastos presupuestados',
          data: [
            75737561.47, 283950767.07, 40499985.27, 179676304.73, 489904201.76,
            20180107.61, 54348801.42, 14308435.59
          ],
          backgroundColor: [
            'RGB(91,155,213)',
            'RGB(236,125,49)',
            'RGB(165,165,165)',
            'RGB(255,192,143)',
            'RGB(68,114,196)',
            'RGB(112,173,71)',
            'RGB(37,94,145)',
            'RGB(158,72,14)'
          ],
          barPercentage: 1
        }
      ]
    }

    const chartOptions5 = {
      scales: {
        y: {
        },
        x: {
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0
          }

        }
      },
      plugins: {
        legend: {
          display: false,
          position: 'top'
        },
        title: {
          display: true,
          text: 'GASTOS POR AREA'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    }

    let selectedChartData, selectedChartOptions

    switch (activeChart) {
      case 0:
        selectedChartData = chartData5
        selectedChartOptions = chartOptions5
        break
      default:
        selectedChartData = chartData5
        selectedChartOptions = chartOptions5
    }

    setChartData(selectedChartData)
    setChartOptions(selectedChartOptions)
  }, [activeChart])

  const toggleChartType = () => {
    const newChartType = chartType === 'Bar' ? 'Doughnut' : 'Bar'
    setChartType(newChartType)
  }

  const handleYearClick = (year) => {
    setSelectedYear(year)
  }
  return (
    <>
      <div className="container mx-auto px-4 lg:w-[1200px]">
        {/* Buttons for different years */}
        <div className="flex justify-center items-center my-3">
          <Button
            className={`mt-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
              ${selectedYear === 2023 ? 'text-white bg-green-nav text-xl' : ''}`}
            onClick={() => handleYearClick(2023)}
          >
            2023
          </Button>
          <Button
            className={`mt-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  
              ${selectedYear === 2022 ? 'text-white bg-green-nav text-xl' : ''}`}
            onClick={() => handleYearClick(2022)}
          >
            2022
          </Button>
          <Button
            className={`mt-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
              ${selectedYear === 2021 ? 'text-white bg-green-nav text-xl' : ''}`}
            onClick={() => handleYearClick(2021)}
          >
            2021
          </Button>
          <Button
            className={`mt-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
              ${selectedYear === 2020 ? 'text-white bg-green-nav text-xl' : ''}`}
            onClick={() => handleYearClick(2020)}
          >
            2020
          </Button>
        </div>

        {/* Container for chart type toggle button */}
        <div className="flex justify-center my-3">
          <Button
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            onClick={toggleChartType}
          >
            Cambiar tipo de gráfico
          </Button>
        </div>

        {/* Container for previous and next buttons */}
        <div className="flex justify-center my-3">
          {activeChart > 0 && (
            <Button
              className="mt-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
              onClick={() => setActiveChart((prevId) => prevId - 1)}
            >
              Anterior
            </Button>
          )}
          {activeChart < 4 && (
            <Button
              className="mt-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
              onClick={() => setActiveChart((prevId) => prevId + 1)}
            >
              1° TRIMESTRE DE 2023
            </Button>
          )}
        </div>

        {/* Container for the charts */}
        <div className="flex justify-center items-center m-auto w-full h-[400px] mb-10 mt-10 ">
          {chartType === 'Bar'
            ? (
              <Bar data={chartData} options={chartOptions} />
              )
            : (
              <div className="flex justify-center items-center w-full h-[400px]">
                <Doughnut data={chartData} options={chartOptions} />
              </div>
              )}
        </div>
      </div>
    </>
  )
}
