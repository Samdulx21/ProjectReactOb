import React, { useState } from 'react'

// * Definiendo estylos enconstantes
// ? Estilo para el usuario logueado
const loggedStyle = {
    color: 'green'
}

// ? Estilo para usuario no logueado
const unLoggedStyled = {
    color: 'tomato',
    fontWeight: 'bold', 
}

const GreetingStyled = (props) => {

    // * Generamos un estado para el componente y asi controlar el usuario si esta o no logueado.
    const [ logged, setLogged ] = useState(false)

    return (
        <div style={ logged ? loggedStyle : unLoggedStyled }>
            { logged ? ( <p>Hola, {props.name}</p> ) : ( <p>Please Login</p> ) }
            
            <button 
                onClick={() => {
                    console.log('Boton pulsado')
                    setLogged(!logged)
                }}
            >
                { logged ? 'logout' : 'login' }
            </button>
        </div>
    )
}

export default GreetingStyled