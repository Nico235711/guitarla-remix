import { LiveReload, Meta } from "@remix-run/react"

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

export default function App() {

  return(
    <Document>
      <h1>Soy HDP Remix</h1>
      <h1>Soy HDP Remix</h1>
      <LiveReload />
    </Document>
  )
}

function Document({ children }){

  return(
    <html lang="es">
      <head>
        <Meta />
      </head>

      <body>
        {children}
      </body>
    </html>
  )
}