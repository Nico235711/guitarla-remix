import nosotros from '../../public/img/nosotros.jpg'

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