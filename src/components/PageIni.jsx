import { useState } from "react"
import {ResultadoForm} from "./InterpretFinal"

export const PaginaIincio = ()=>{
    const [mostrar,setMostrar] = useState(false)
    
    const mostrarFormulario = ()=>{
        setMostrar(true)
    }


    return(
        <div>
            <h1>Conoce el valor de tu software</h1>
            <h2>Bienvenido aqui podras conocer el tamaño de la funcionalidad de tu software</h2>
            <p>¿Como calculamos o expresemanos este resultado?</p>
            <p>Se calcula a través de una suma ponderada de las caracteristicas del producto</p>
            <button>Comenzar</button>
        </div>
    )

}