import nosotros from '../../public/img/nosotros.jpg'
import styles from "~/styles/nosotros.css"

export function meta() {

  return [
      // sintaxis correcta para poner información meta
      { title: "GuitarLA - Nosotros" },
      { description: "Venta de guitarras, blog de música" },
      { viewport: "width=device-width,initial-scale=1.0" },
      { charset: "utf-8" }
  ]
}

export function links() {
  
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

const Nosotros = () => {
  
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={nosotros} alt="nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis doloribus obcaecati hic officiis maxime illum, quod reiciendis, neque iure dolores, vitae maiores sunt perspiciatis asperiores. Assumenda dolores accusamus suscipit cupiditate.
            Vitae, sit. Minima temporibus harum, maxime error accusantium pariatur commodi eius voluptas, doloribus dolores quidem provident unde reiciendis dignissimos repellendus fugiat maiores est vero ex sapiente nesciunt modi neque. Veritatis.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros