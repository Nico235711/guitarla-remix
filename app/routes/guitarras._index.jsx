import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import { getGuitarras } from "~/models/guitarras.server"
import styles from "~/styles/guitarras.css"

export function meta() {

  return(
    [
      { charset: "utf-8" },
      { title: "GuitarLA - Tienda" },
      { viewport: "width=device-width,initial-scale=1.0" },
      { description: "Guitar LA - Nuestra colección de guitarras" },
    ]
  )
}

export async function loader() {

  const guitarras = await getGuitarras()
  return guitarras.data
}

const Tienda = () => {

  const guitarras = useLoaderData()

  return (
    <ListadoGuitarras 
      guitarras={guitarras}
    />
  )
}

export default Tienda