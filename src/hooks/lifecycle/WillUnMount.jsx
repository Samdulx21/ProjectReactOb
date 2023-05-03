/** 
 * * Ejemplo de uso de método componentWillUnMount para componente clase 
 * * Ejemplo de uso de hooks en componente funcional.
 * TODO: cuando el componente va a desaparacer.
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {
    
    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente se desaparezca')
    }

    render() {
        return (
        <div>
            <h1>WillUnMount</h1>
        </div>
        )
    }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        // * Aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente se desaparezca')
        }
    }, [])

    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    )
}

