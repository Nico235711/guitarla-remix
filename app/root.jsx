import { LiveReload } from "@remix-run/react"


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
        <title>GuitarLA - Remix</title>
      </head>

      <body>
        {children}
      </body>
    </html>
  )
}