import React, { useEffect } from 'react'

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado')

        const intervaloID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actulizacion del componente')
        }, 1000)

        return () => {
            console.log('Componente va a desaparecer')
            document.title = 'Tiempo Detenido'
            clearInterval(intervaloID)
        }
    }, [])
    

    return (
        <div>AllCycles</div>
    )
}

export default AllCycles