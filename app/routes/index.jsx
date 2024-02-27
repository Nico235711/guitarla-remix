import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import Post from "~/components/post"
import ListadoGuitarras from "~/components/listado-guitarras"
import stylesGuitarras from '~/styles/guitarras.css'

export function meta() {

}

export function links() {

  return [
    { rel: "stylesheet", href: stylesGuitarras }
  ]
}

export async function loader() {

  // promise all
  const [ guitarras, posts ] = await Promise.all([
    getGuitarras(),
    getPosts()
  ])
  
  return {
    guitarras: guitarras.data,
    posts: posts.data
  }
}

const Index = () => {

  const { guitarras, posts } = useLoaderData()

  return (
    <>
      <main className="contenedor">
        <h2 className="heading">Nuestra Colección de Guitarras</h2>

        <ListadoGuitarras 
          guitarras={guitarras}
        />
      </main>
    </>
  )
}

export default Index