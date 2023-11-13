import '../css/componentes.css'

import { useState } from "react"
import {ResultadoForm} from "./InterpretFinal"

export const PaginaIincio = ()=>{
    const [mostrar,setMostrar] = useState(false)
    
    const mostrarFormulario = ()=>{
        setMostrar(true)
    }

    const volverInicio = ()=>{
        setMostrar(false)
    }

    return (
        <div>
            {mostrar ? (
            <>
            <ResultadoForm />
            <button onClick={volverInicio}>Volver</button>
            </>
        ) : (
            <div>
                <h1>Conoce el valor de tu software</h1>
                <h2>Bienvenido aquí podrás conocer el tamaño de la funcionalidad de tu software</h2>
                <p>¿Cómo calculamos o expresamos este resultado?</p>
                <p>Se calcula a través de una suma ponderada de las características del producto</p>
                <button onClick={mostrarFormulario}>Comenzar</button>
            </div>
            )}
        </div>
    )
}