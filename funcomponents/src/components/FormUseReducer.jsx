import React, {useReducer} from "react";

const FormUseReducer = () => {

    //se inicializa asi para tener los useStates mejor, todo en uno
    const initialState = {
        nombre: {
            value: '',
            error: null
        },
        apellido: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        },
        password: {
            value: '',
            error: null
        },
        confirmPassword: {
            value: '',
            error: null
        }
    }
    const [state, dispatch] = useReducer(formReducer, initialState)
    

    //aca se hace el form reducer donde se validan con el action type
    //el action type ve el action, que seria el objeto de initialState y el type, de que tipo es
    function formReducer(state, action) {
        let errorAux = null;
        if (action.type == "nombre" && action.payload.length < 3 && action.payload.length > 0) errorAux = "nombre necesita mas de 3 caracteres"
        if (action.type == "apellido" && action.payload.length < 3 ) errorAux = "nombre necesita mas de 3 caracteres"

        return {
            ...state, //aca se retornan todos los objetos
            [action.type] : { value: action.payload, error: errorAux} //aca se guarda el cambio de estado
        }
    }
    
    //aca se hace el cambio de estado destructurando el objeto
    function adminForm(evento) {
        const {name, value} = evento.target
        dispatch({
            type: name,
            payload: value
        })
    }

    return (
        <>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input onChange={adminForm} name="nombre" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {state.nombre.error !== null && (<p className="text-danger">{state.nombre.error}</p>)}
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
export default FormUseReducer