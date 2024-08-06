import "./globals.css"
import { Inter } from "next/font/google"
import { Header } from "@/components/Layout/Header"
import { Footer } from "@/components/Layout/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gobierno Abierto",
  description: "La pagina de transparencia del Municipio de Baradero",
}

export default function RootLayout ({ children }) {
  return (
    <>
      <html lang="es-ar">
        <head>
          <link rel="icon" href="../LOGOS_icono-100x100.png" />
        </head>
        <body className={inter.className} suppressHydrationWarning={true}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
