import { useLoaderData } from "@remix-run/react"
import { useState } from "react"
import { getGuitarra } from "~/models/guitarras.server"

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
  
  return(
    [
      { charset: "utf-8" },
      { title: `GuitarLA - Guitarra ${data.data[0].attributes.nombre}` },
      { viewport: "width=device-width,initial-scale=1.0" },
      { descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}` }
    ]
  )
}

const Guitarra = () => {
  
  const [cantidad, setCantidad] = useState(0)
  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

  const handleSubmit = e => {
    e.preventDefault()

    if (cantidad < 1) {
      alert("Debes seleccionar una cantidad")
      return
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen : imagen.data.attributes.formats.small.url
    }

    console.log(guitarraSeleccionada);
  }

  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.formats.small.url} alt={`imagen de la guitarra ${nombre}`} />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion[0].children[0].text}</p>
        <p className="precio">${precio}</p>

        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad:</label>
          <select id="cantidad" onChange={e => setCantidad(Number(e.target.value))}>
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button type="submit">Agregar al Carrito</button>
        </form>
      </div>
    </div>
  )
}

export default Guitarra