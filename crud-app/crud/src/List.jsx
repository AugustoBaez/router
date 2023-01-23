import React from "react";

const List = (props) => {
    const {lista} = props
    return (
        <div>
            {lista.map((personaje) => 
            <>
             <p>{personaje.nombre}</p>
             <p>{personaje.mundo}</p>
            </>
            )}
        </div>
    )
}
export default List