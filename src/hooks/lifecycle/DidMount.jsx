/**
 * * Ejemplo de uso del metodo de ciclo de vida en componente clase y el hook
 * * de ciclo de vida en componente funcional.
 */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount(){
        console.log('Corportamiento antes de que el componente sea añadido al DOM (rederice)')
    }
    
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        )
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('Corportamiento antes de que el componente sea añadido al DOM (rederice)')
    }, [])
    

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    )
}
