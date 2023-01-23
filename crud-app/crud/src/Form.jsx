import React, {useState} from "react";

const Form = ({ lista, setLista }) => {
    const [nombre, setNombre] = useState("")
    const [mundo, setMundo] = useState("")

    const adminForm = (evento) => {
        evento.preventDefault();
        const nuevoPersonaje = {
            nombre,
            mundo
        }
        setLista([...lista, nuevoPersonaje])
    }

    return (
        <div>
            <form action="" onSubmit={adminForm} className="form">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Nombre</label>
                    <input type="text" onChange={(evento)=>setNombre(evento.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">mundo</label>
                    <input type="text" onChange={(evento) => setMundo(evento.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Agregar personaje</button>
            </form>
        </div>
    )
}
export default Form