
const Guitarra = ({ guitarra }) => {

  console.log(guitarra);

  return (
    <div className="guitarras-grid">
      { guitarra.id }
    </div>
  )
}

export default Guitarra