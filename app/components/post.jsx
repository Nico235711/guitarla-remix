import { Link } from "@remix-run/react"
import { formatearFecha } from "~/helpers/formatearFecha"

const Post = ({ post }) => {

  const { contenido, url, imagen, titulo, publishedAt } = post

  return (
    <article className="post">
      <img src={imagen.data.attributes.formats.medium.url} alt={`imagen del blog ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{contenido[0].children[0].text}</p>
        <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
      </div>
    </article>
  )
}

export default Post