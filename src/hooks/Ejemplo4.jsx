/**
 * * Ejemplo para entender el uso props.children
 */

import React from 'react'

const Ejemplo4 = ( props ) => {
    return (
        <div>
            <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>   
            {/* props.children pintará por defento 
            aquello que se encuetra entre las etiquetas de apertura y cierre
            de este componente desde el componente de orden superior */}
            { props.children }

        </div>
    )
}

export default Ejemplo4
