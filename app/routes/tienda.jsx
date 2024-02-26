import { useLoaderData } from "@remix-run/react"
import Guitarra from "~/components/guitarra"
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

export async function loader() {

  const guitarras = await getGuitarras()
  return guitarras.data
}

const Tienda = () => {

  const guitarras = useLoaderData()

  return (
    <main className="conntenedor">
      <h2 className="heading">Nuestra Colección</h2>
      {
        guitarras?.length && (
          <div className="guitarras-grid">
            {
              guitarras.map(guitarra => (
                <Guitarra 
                  key={guitarra?.id}
                  guitarra={guitarra?.attributes}
                />
              ))
            }
          </div>
        )
      }
    </main>
  )
}

export default Tienda