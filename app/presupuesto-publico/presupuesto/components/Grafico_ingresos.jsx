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
          display: true,
          position: 'left'
        },
        title: {
          display: true,
          text: 'Ingresos Presupuestados POR ORIGEN para 2023'
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
