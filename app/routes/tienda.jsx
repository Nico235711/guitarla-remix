import { useLoaderData } from "@remix-run/react"
import Guitarra from "~/components/guitarra"
import { getGuitarras } from "~/models/guitarras.server"


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