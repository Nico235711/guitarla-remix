import { useLoaderData } from "@remix-run/react"
import ListadoPosts from "~/components/listado-posts"
import { getPosts } from "~/models/posts.server"
import styles from '~/styles/blog.css'

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

export function meta() {

  return (
    [
      { charset: "utf-8" },
      { title: "GuitarLA - Blog" },
      { viewport: "width=device-width,initial-scale=1.0" },
      { description: `Blog de guitarras, lea todo acerca de nosotros` },
    ]
  )
}

// agrego hojas de estilos
export function links() {

  return (
    [
      { rel: "stylesheet", href: styles}

    ]
  )
}

const Blog = () => {

  const posts = useLoaderData()
  
  return (
    <div className="contenedor">
      <ListadoPosts 
        posts={posts}
      />
    </div>
  )
}

export default Blog