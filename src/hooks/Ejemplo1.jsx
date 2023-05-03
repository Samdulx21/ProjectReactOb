/** 
 * * Ejemplo de uso del Hooks useState.  
 * 
 * * Crear un componente de tipo función y acceder a su estado privado
 * * a través de un hook y, ademas, poder modificarlo.
 */ 

import React, { useState } from 'react'

const Ejemplo1 = () => {

    // * Valor incial para un contador.
    const valorInicial = 0;

    // * Valor inicial para una persona.
    const personaInicial = {
        nombre: 'Samuel',
        email: 'samueldulce21@gmail.com',
    }

    /** 
     * * Queremos que el VALORINICIAL y PERSONAINICIAL sean parte 
     * * del estado del componente para asi poder gestionar su cambio 
     * * y que este se vea reflejado en la vista del componente.
     * 
     * * const [ nombreVariable, funcioParaCambiar ] = useState( valorInicial );
     */ 

    const [ contador, setContador ] = useState( valorInicial )

    const [ persona, setPersona ] = useState( personaInicial )

    /**
     * * Funcion para actualizar el estado privado que contiene el contador.
     */
    function incrementarContador() {
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * * Funcion para actualizar el estado privado que contiene la persona.
     */
    function actualizarPersona() {
        setPersona({
            nombre: 'Jose',
            email:'jose_papa19@gmail.com',
        })
    }


    return (
        <div>
            <h1>
                *** Ejemplo de useState() ***
            </h1>
            <h2>
                CONTADOR: { contador }
            </h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>
                NOMBRE: { persona.nombre }
            </h3>
            <h4>
                EMAIL: { persona.email }
            </h4>
            {/* Bloques de botones para actualizar nuestro estado */}
            <button 
                onClick={incrementarContador}
            >Incrementar Contador</button>

            <button
                onClick={actualizarPersona}
            >Actualizar Persona</button>
        </div>
    )
}

export default Ejemplo1