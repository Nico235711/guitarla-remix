import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react"
import styles from "~/styles/index.css"
import Header from "~/components/header"

// agrego metas
export function meta() {

  return(
    [
      // sintaxis correcta para poner información meta
      { charset: "utf-8" },
      { title: "GuitarLA - Remix" },
      { viewport: "width=device-width,initial-scale=1.0" }
      // no da error pero te añade solo el title
      // { 
      //   charset: "utf-8",
      //   title: "GuitarLA - Remix",
      //   viewport: "width=device-width,initial-scale=1.0"
      // }
    ]
  )
}

// agrego hojas de estilos
export function links() {

  return(
    [
      // reset
      {
        rel: "stylesheet",
        href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
      },
      {
        rel: "stylesheet",
        href: styles
      }
    ]
  )
}

export default function App() {

  return(
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({ children }){

  return(
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <Header />
        {children}

        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}