import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"


export async function loader() {

  const guitarras = await getGuitarras()
  return guitarras
}

const Tienda = () => {

  const guitarras = useLoaderData()
  console.log(guitarras);
  
  return (
    <div>Tienda</div>
  )
}

export default Tienda