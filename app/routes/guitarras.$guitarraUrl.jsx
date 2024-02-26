
export async function loader({ params }) {

  const { guitarraUrl } = params
  console.log(guitarraUrl);
  return {}
}

const Guitarra = () => {
  return (
    <div>guitarras.$guitarraUrl</div>
  )
}

export default Guitarra