


const Card = ({clientes}) => {
  return (<div>
    <h2>Clientes</h2>
    <ul>
    {clientes.map((cliente,index)=>(
      <li key={index} id={index}>Nombre: {cliente.nombre} | Sabor: {cliente.sabor}</li>
    ))}
    </ul>
  </div>)
};


export default Card;