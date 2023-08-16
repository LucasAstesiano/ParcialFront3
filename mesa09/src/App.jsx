import { useState } from "react";
import Card from "./Card";
import Form from "./Form";



function App() {
  const[clientes, setClientes] = useState([])

  const addCliente = (cliente) => {
    setClientes([...clientes,cliente])
  }

  return (
    <div className="App" >
      <h2>Agregar cliente</h2>
      <Form onAddCliente={addCliente}/>
      <Card clientes={clientes}/>
    </div>
  );
}


export default App;
