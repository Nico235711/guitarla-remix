import { Link, Links, LiveReload, Meta, Outlet, Scripts, isRouteErrorResponse, useRouteError } from "@remix-run/react"
import styles from "~/styles/index.css"
import Header from "~/components/header"
import Footer from "~/components/footer"

// agrego metas
export function meta() {

  const error = useRouteError();
  if (error?.status === 404) {
    return ([
      { title: `GuitarLA - Error 404` },
      { description: `Guitarra no encontrada` },
      { charset: "utf-8" },
      { viewport: "width=device-width,initial-scale=1.0" }
    ])
  }

  return (
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

  return (
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

  return (
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({ children }) {

  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <Header />
        {children}
        <Footer />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

// manejo de errores
export function ErrorBoundary() {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className="error">{error.statusText}</p>
        <Link className="error-enlace">Volver a la página principal</Link>
      </Document>
    )
  }
}