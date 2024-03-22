import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import './App.css'



function App() {
  const[clientes, setClientes] = useState([])

  const addCliente = (cliente) => {
    // @ts-ignore
    setClientes([...clientes,cliente])
  }

  return (
    <div className="general" >
      <h2>Agregar cliente</h2>
      <Form onAddCliente={addCliente}/>
      <Card clientes={clientes}/>
    </div>
  );
}


export default App;
