import { CuadroConteo } from "./ConteoTotal.jsx";
import { Formulario } from "./AjusteValor.jsx";
import { useState } from "react";

export const ResultadoForm = ()=>{

    //estado del cuadro
    const [cuadro,setCuadro] = useState(0)
    const handleResultChange = (result) => {
        setCuadro(result);
    }
    //estado del formulario
    const [formulario,setFormulario] = useState(0)
    const handleResultChange2=(result2)=>{
        setFormulario(result2)
    }

    //estado final
    const [resultadoFin,setResultadoFin] =useState(0)
    const FinalResul = ()=>{
        const Pfa = cuadro *(0.65+(0.01*formulario))
        setResultadoFin(Pfa)
    }

    return(
        <div>
            <CuadroConteo onResultChange={handleResultChange}></CuadroConteo>
            
            <Formulario onResultChange2={handleResultChange2}></Formulario>

            <p>El del cuadro</p>
            <p>{cuadro}</p>

            <p>El del formulario</p>
            <p>{formulario}</p>

            <div>
                <p>¿Deseas obtener el valor total?</p>
                <button onClick={FinalResul}>calculalo perro</button>
                <p>{resultadoFin}</p>
            </div>
        </div>
    )
}