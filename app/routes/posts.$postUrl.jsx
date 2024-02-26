import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/models/posts.server"
import styles from "~/styles/blog.css"

export async function loader({ params }) {

  const { postUrl } = params
  const post = await getPost(postUrl)
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post no encontrado"
    })
  }
  return post
}

export function meta({ data }) {
  
  return(
    [
      { charset: "utf-8" },
      { title: `GuitarLA - ${data.data[0].attributes.titulo}` },
      { viewport: "width=device-width,initial-scale=1.0" },
      { descripcion: `Guitarras, venta de guitarras, post ${data.data[0].attributes.titulo}` }
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

const Post = () => {
  
  const post = useLoaderData()
  const { titulo, contenido, imagen } = post.data[0].attributes

  return (
    <main className="contenedor post">
      <img src={imagen.data.attributes.formats.small.url} alt={`imagen de la post ${titulo}`} />

      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="descripcion">{contenido[0].children[0].text}</p>
      </div>
    </main>
  )
}

export default Post