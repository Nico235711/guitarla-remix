import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import { getCurso } from "~/models/curso.server"
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'
import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPosts from "~/components/listado-posts"
import Curso from "~/components/curso"


export function links() {

  return [
    { rel: "stylesheet", href: stylesGuitarras },
    { rel: "stylesheet", href: stylesPosts },
    { rel: "stylesheet", href: stylesCurso }
  ]
}

export async function loader() {

  // promise all
  const [ guitarras, posts, curso ] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
  
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

const Index = () => {

  const { guitarras, posts, curso } = useLoaderData()

  return (
    <>
      <main className="contenedor">
        <h2 className="heading">Nuestra Colección de Guitarras</h2>

        <ListadoGuitarras 
          guitarras={guitarras}
        />
      </main>

        <Curso 
          curso={curso.attributes}
        />

        <ListadoPosts 
          posts={posts}
        />
    </>
  )
}

export default Index