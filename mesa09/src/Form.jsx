import { useState } from "react";

 function Form({onAddCliente}){ 

    const[nombre, setNombre]=useState("");
    const[sabor, setSabor]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((nombre.trim() && sabor.trim()) && (nombre.length > 3) && (sabor.length > 6)) {
            onAddCliente({nombre,sabor})
            setNombre(""),
            setSabor("");
        }else if(nombre.length<3){
            alert("El nombre debe tener una longitud mayor a 3 caracteres")
        }else if (sabor.length<6) {
            alert("El sabor debe tener una longitud mayor a 6 caracteres")
        }
            
    }

    return(
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Inserte su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            <input type="text" placeholder="Sabor de helado favorito" value={sabor} onChange={(e)=>setSabor(e.target.value)}/>
            <button type="Submit" > Enviar </button>
        </form>
        
    )

}
export default Form;
