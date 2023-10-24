'use client'

import { useState, useEffect } from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

import { Tooltip, Legend, BarController } from 'chart.js'

Chart.register(Tooltip, Legend, BarController)

export const Grafico_gastos = () => {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})
  const [activeChart, setActiveChart] = useState(0)
  const [chartType, setChartType] = useState('Bar')

  useEffect(() => {
    const chartData1 = {
      labels: [
        'CONDUCCION DE SUPERIOR',
        'SECRETARIA DE GOBIERNO',
        'SECRETARIA DE HACIENDA',
        'SECRETARIA DE CULTURA,...',
        'SECRETARIA DE OBRAS Y SERVICIOS...',
        'SECRETARIA DE MODERNIZACION Y...',
        'SECRETARIA DE DESARROLLO...',
        'H.C.D'
      ],
      datasets: [
        {
          id: 1,
          label: ['Gastos presupuestados'],
          data: [
            385653818.41, 1463033658.62, 208311142.31, 552434046.42,
            2020669384.64, 168240719.4, 350582089.96, 127998670.47
          ],
          backgroundColor: [
            'RGB(91,155,213)',
            'RGB(236,125,49)',
            'RGB(165,165,165)',
            'RGB(255,192,0)',
            'RGB(68,114,196)',
            'RGB(112,173,71)',
            'RGB(37,94,145)',
            'RGB(158,72,14)'
          ]
        }
      ]
    }

    const chartOptions1 = {
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'GASTOS PRESUPUESTADOS POR AREA PARA 2023'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    }

    const chartData2 = {
      labels: [
        'CONDUCCION  SUPERIOR',
        'SECRETARIA DE GOBIERNO',
        'SECRETARIA DE HACIENDA',
        'SECRETARIA DE CULTURA,...',
        'SECRETARIA DE OBRAS Y SERVICIOS...',
        'SECRETARIA DE MODERNIZACION Y...',
        'SECRETARIA DE DESARROLLO...',
        'H.C.D'
      ],
      datasets: [
        {
          id: 1,
          label: 'Gastos presupuestados',
          data: [
            4534438.88, 19486324.94, 4254682.83, 24297611.94, 218099884.44,
            901500.0, 2209246.51, 0
          ],
          backgroundColor: [
            'RGB(91,155,213)',
            'RGB(236,125,49)',
            'RGB(165,165,165)',
            'RGB(255,192,0)',
            'RGB(68,114,196)',
            'RGB(112,173,71)',
            'RGB(37,94,145)',
            'RGB(158,72,14)'
          ]
        }
      ]
    }

    const chartOptions2 = {
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'GASTOS ENERO DE 2023 POR AREA'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    }
    const chartData3 = {
      labels: [
        'CONDUCCION  SUPERIOR',
        'SECRETARIA DE GOBIERNO',
        'SECRETARIA DE HACIENDA',
        'SECRETARIA DE CULTURA,...',
        'SECRETARIA DE OBRAS Y SERVICIOS...',
        'SECRETARIA DE MODERNIZACION Y...',
        'SECRETARIA DE DESARROLLO...',
        'H.C.D'
      ],
      datasets: [
        {
          id: 1,
          label: 'Gastos presupuestados',
          data: [
            28935014.64, 108517255.28, 16690071.7, 123378717.64, 113914197.18,
            8312609.25, 21957661.61, 6831872.48
          ],
          backgroundColor: [
            'RGB(91,155,213)',
            'RGB(236,125,49)',
            'RGB(165,165,165)',
            'RGB(255,192,0)',
            'RGB(68,114,196)',
            'RGB(112,173,71)',
            'RGB(37,94,145)',
            'RGB(158,72,14)'
          ]
        }
      ]
    }

    const chartOptions3 = {
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'GASTOS FEBRERO DE 2023 POR AREA'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    }
    const chartData4 = {
      labels: [
        'CONDUCCION  SUPERIOR',
        'SECRETARIA DE GOBIERNO',
        'SECRETARIA DE HACIENDA',
        'SECRETARIA DE CULTURA,...',
        'SECRETARIA DE OBRAS Y SERVICIOS...',
        'SECRETARIA DE MODERNIZACION Y...',
        'SECRETARIA DE DESARROLLO...',
        'H.C.D'
      ],
      datasets: [
        {
          id: 1,
          label: 'Gastos presupuestados',
          data: [
            42268107.95, 155947186.85, 19555230.74, 31999975.15, 157890120.14,
            10965998.36, 30181893.3, 7476563.11
          ],
          backgroundColor: [
            'RGB(91,155,213)',
            'RGB(236,125,49)',
            'RGB(165,165,165)',
            'RGB(255,192,0)',
            'RGB(68,114,196)',
            'RGB(112,173,71)',
            'RGB(37,94,145)',
            'RGB(158,72,14)'
          ]
        }
      ]
    }

    const chartOptions4 = {
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'GASTOS MARZO DE 2023 POR AREA'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    }
    const chartData5 = {
      labels: [
        'CONDUCCION  SUPERIOR',
        'SECRETARIA DE GOBIERNO',
        'SECRETARIA DE HACIENDA',
        'SECRETARIA DE CULTURA,...',
        'SECRETARIA DE OBRAS Y SERVICIOS...',
        'SECRETARIA DE MODERNIZACION Y...',
        'SECRETARIA DE DESARROLLO...',
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
            'RGB(255,192,0)',
            'RGB(68,114,196)',
            'RGB(112,173,71)',
            'RGB(37,94,145)',
            'RGB(158,72,14)'
          ]
        }
      ]
    }

    const chartOptions5 = {
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'GASTOS DEL 1° TRIMESTRE DE 2023 POR AREA'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    }

    let selectedChartData, selectedChartOptions

    switch (activeChart) {
      case 0:
        selectedChartData = chartData1
        selectedChartOptions = chartOptions1
        break
      case 1:
        selectedChartData = chartData2
        selectedChartOptions = chartOptions2
        break
      case 2:
        selectedChartData = chartData3
        selectedChartOptions = chartOptions3
        break
      case 3:
        selectedChartData = chartData4
        selectedChartOptions = chartOptions4
        break
      case 4:
        selectedChartData = chartData5
        selectedChartOptions = chartOptions5
        break
      default:
        selectedChartData = chartData1
        selectedChartOptions = chartOptions1
    }

    setChartData(selectedChartData)
    setChartOptions(selectedChartOptions)
  }, [activeChart])

  const toggleChartType = () => {
    const newChartType = chartType === 'Bar' ? 'Doughnut' : 'Bar'
    setChartType(newChartType)
  }

  return (
    <>
      <div className="container mx-auto px-4 lg:w-[800px]">
        {/* Buttons for different years */}
        <div className="flex justify-center items-center my-3">
          <button className="mt-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            2023
          </button>
          <button className="mt-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            2022
          </button>
          <button className="mt-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            2021
          </button>
          <button className="mt-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            2020
          </button>
        </div>

        {/* Container for chart type toggle button */}
        <div className="flex justify-center my-3">
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            onClick={toggleChartType}
          >
            Cambiar tipo de gráfico
          </button>
        </div>

        {/* Container for previous and next buttons */}
        <div className="flex justify-center my-3">
          {activeChart > 0 && (
            <button
              className="mt-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
              onClick={() => setActiveChart((prevId) => prevId - 1)}
            >
              Anterior
            </button>
          )}
          {activeChart < 4 && (
            <button
              className="mt-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
              onClick={() => setActiveChart((prevId) => prevId + 1)}
            >
              Siguiente
            </button>
          )}
        </div>

        {/* Container for the charts */}
        <div className="flex justify-center items-center m-auto w-full h-[400px]">
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
