import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"
import styles from "~/styles/guitarras.css"

export async function loader({ params }) {

  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada"
    })
  }
  return guitarra
}

export function meta({ data }) {
  
  if (!data) {
    return(
      [
        { charset: "utf-8" },
        { title: `GuitarLA - Guitarra no Encontrada` },
        { viewport: "width=device-width,initial-scale=1.0" },
        { descripcion: `Guitarras, venta de guitarras, guitarra no encontrada` }
      ]
    )
  }
  return(
    [
      { charset: "utf-8" },
      { title: `GuitarLA - Guitarra ${data.data[0].attributes.nombre}` },
      { viewport: "width=device-width,initial-scale=1.0" },
      { descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}` }
    ]
  )
}

export function links() {

  return(
    [
      {
        rel: "stylesheet",
        href: styles
      }
    ]
  )
}

const Guitarra = () => {
  
  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

  return (
    <main className="contenedor guitarra">
      <img src={imagen.data.attributes.formats.small.url} alt={`imagen de la guitarra ${nombre}`} />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion[0].children[0].text}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  )
}

export default Guitarra