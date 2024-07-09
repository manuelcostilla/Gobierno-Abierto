import { Main } from '@/components/Main'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

export default function Home () {
  return (
    <>
    <ThemeProvider>
    <NextUIProvider>
      <Main />
      </NextUIProvider>
    </ThemeProvider>
    </>
  )
}
