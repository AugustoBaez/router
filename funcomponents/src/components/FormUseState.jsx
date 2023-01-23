import React, { useState } from "react"
const FormUseState = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmedPassword] = useState("");

    const crearUsuario = (e) => {
        e.preventDefault();
        console.log(e.target)
    }

    return (
        <>
            <form onSubmit={crearUsuario}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input onChange={(e) => setNombre(e.target.value)} type="nombre" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {(nombre.length < 3 && nombre === "") ? <p className="text-danger">Nombre necesita mas de 3 caracteres</p> : null}
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Apellido</label>
                    <input type="apellido" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirmar password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Apellido</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div>
                <p>Nombre: </p>
                <p>Apellido:</p>
                <p>Email:</p>
                <p>Password:</p>
                <p>Confirmar password: </p>
            </div>
        </>
    )
}
export default FormUseState