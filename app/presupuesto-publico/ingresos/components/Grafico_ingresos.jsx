'use client'

import { useState, useEffect } from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

import { Tooltip, Legend, BarController } from 'chart.js'

Chart.register(Tooltip, Legend, BarController)

export const Grafico_ingresos = () => {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})
  const [activeChart, setActiveChart] = useState(0)
  const [chartType, setChartType] = useState('Bar')

  useEffect(() => {
    const chartData1 = {
      labels: [
        'Total de Origen Municipal...',
        'Total de Origen Municipal para fines especificos',
        'Total de Origen Provincial para fines especificos',
        'Total de Origen Nacional para fines especificos'
      ],
      datasets: [
        {
          id: 1,
          label: 'PRESUPUESTO ANUAL',
          data: [
            3699481000.00,
            236443909.94,
            817163485.47,
            628240864.06
          ],
          backgroundColor: [
            'RGB(91,155,213)',
            'RGB(236,125,49)',
            'RGB(165,165,165)',
            'RGB(255,192,0)'
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
          text: 'Ingresos Presupuestados POR ORIGEN para 2023'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    }

    const chartData2 = {
      labels: [
        'Total de Origen Municipal...',
        'Total de Origen Municipal para fines especificos',
        'Total de Origen Provincial para fines especificos',
        'Total de Origen Nacional para fines especificos'
      ],
      datasets: [
        {
          id: 1,
          label: 'ENERO PERCIBIDO',
          data: [
            160612649.02,
            57846189.83,
            76408247.23,
            208992682.62
          ],
          backgroundColor: [
            'RGB(91,155,213)',
            'RGB(236,125,49)',
            'RGB(165,165,165)',
            'RGB(255,192,0)'
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
          text: 'INGRESOS PERCIBIDOS EN ENERO 2023 POR ORIGEN'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    }
    const chartData3 = {
      labels: [
        'Total de Origen Municipal...',
        'Total de Origen Municipal para fines especificos',
        'Total de Origen Provincial para fines especificos',
        'Total de Origen Nacional para fines especificos'
      ],
      datasets: [
        {
          id: 1,
          label: 'FEBRERO PERCIBIDO',
          data: [
            298438686.30,
            31945964.99,
            65858694.87,
            90780669.04
          ],
          backgroundColor: [
            'RGB(91,155,213)',
            'RGB(236,125,49)',
            'RGB(165,165,165)',
            'RGB(255,192,0)'
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
          text: 'INGRESOS PERCIBIDOS EN FEBRERO 2023 POR ORIGEN'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    }
    const chartData4 = {
      labels: [
        'Total de Origen Municipal...',
        'Total de Origen Municipal para fines especificos',
        'Total de Origen Provincial para fines especificos',
        'Total de Origen Nacional para fines especificos'
      ],
      datasets: [
        {
          id: 1,
          label: 'MARZO PERCIBIDO',
          data: [
            287547835.16,
            17763880.67,
            96403639.01,
            92979465.68
          ],
          backgroundColor: [
            'RGB(91,155,213)',
            'RGB(236,125,49)',
            'RGB(165,165,165)',
            'RGB(255,192,0)'
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
          text: 'INGRESOS PERCIBIDOS EN MARZO 2023 POR ORIGEN'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    }
    const chartData5 = {
      labels: [
        'Total de Origen Municipal...',
        'Total de Origen Municipal para fines especificos',
        'Total de Origen Provincial para fines especificos',
        'Total de Origen Nacional para fines especificos'
      ],
      datasets: [
        {
          id: 1,
          label: '1ER TRIMESTRE PERCIBIDO',
          data: [
            746599170.5,
            107556035.5,
            238670581.1,
            392752817.3
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
          text: 'INGRESOS PERCIBIDOS 1° TRIMESTRE POR ORIGEN'
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
