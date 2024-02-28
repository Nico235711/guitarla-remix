import { useOutletContext } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { ClientOnly } from 'remix-utils/client-only'
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

  const [total, setTotal] = useState(0)
  const { carrito, actualizarCantidad, eliminarProducto } = useOutletContext()

  useEffect(() => {
    const precioTotal = carrito.reduce((acum, producto ) => acum + (producto.cantidad * producto.precio), 0)
    setTotal(precioTotal)
  }, [carrito]);

  return (
    <ClientOnly fallback={"cargando..."}>
      {() => (
        <main className="contenedor">
          <h2 className="heading">Carrito de Compras</h2>
        
          <div className="contenido">
            <div className="carrito">
              <h2>Articulos</h2>
              {
                carrito?.length === 0 ? "Carrito Vacío" : (
                  carrito?.map(producto => (
                    <div className="producto" key={producto.id}>
                      <div>
                        <img src={producto.imagen} alt={`producto guitarra ${producto.nombre}`} />
                      </div>
        
                      <div>
                        <p className="nombre">{producto.nombre}</p>
                        <p className="cantidad">Cantidad: {producto.cantidad}</p>
                        <select 
                          value={producto.cantidad} 
                          className='select'
                          onChange={e => actualizarCantidad({
                            cantidad: +e.target.value, // el + lo pasa a número
                            id: producto.id
                          })}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
        
                        <p className="precio">$<span>{producto.precio}</span></p>
                        <p className="subtotal">SubTotal: $<span>{producto.precio * producto.cantidad}</span></p>
                      </div>
                        <button 
                          type='button' 
                          className='btnEliminar'
                          onClick={() => eliminarProducto(producto.id)}
                        >X</button>
                    </div>
                  ))
                )
              }
            </div>
          
            <aside className="resumen">
              <h3>Resumen del Pedido</h3>
              <p>Total a Pagar: ${total}</p>
            </aside>
          </div>
        
        </main>
      )}
    </ClientOnly>
  )
}

export default Carrito