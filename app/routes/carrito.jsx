import { useOutletContext } from '@remix-run/react'
import stylesCarrito from '~/styles/carrito.css'

export function links() {

  return [
    { rel: "stylesheet", href: stylesCarrito }
  ]
}

export function meta() {

  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Carrito de Compras" },
    { viewport: "width=device-width,initial-scale=1.0" },
    { descripcion: "Venta de Guitarras, música, blog, carrito de compras, tienda" }
  ]
}

const Carrito = () => {

  const { carrito } = useOutletContext()

  return (
    <main className="contenedor">
      <h2 className="heading">Carrito de Compras</h2>

      <div className="contenido">
        <div className="carrito">
          <h2>Articulos</h2>
          {
            carrito.length === 0 ? "Carrito Vacío" : (
              carrito.map(producto => (
                <div className="producto" key={producto.id}>
                  <div>
                    <img src={producto.imagen} alt={`producto guitarra ${producto.nombre}`} />
                  </div>

                  <div>
                    <p className="nombre">{producto.nombre}</p>
                    <p className="precio">$<span>{producto.precio}</span></p>
                    <p className="subtotal">SubTotal: $<span>{producto.precio * producto.cantidad}</span></p>
                  </div>
                </div>
              ))
            )
          }
        </div>
      
        <aside className="resumen">
          <h3>Resumen del Pedido</h3>
          <p>Total a Pagar: $</p>
        </aside>
      </div>

    </main>
  )
}

export default Carrito