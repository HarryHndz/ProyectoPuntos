import { CuadroConteo } from "./ConteoTotal.jsx";
import { Formulario } from "./AjusteValor.jsx";
import { useState } from "react";

export const ResultadoForm = ()=>{

    //estado del cuadro
    const [cuadro,setCuadro] = useState(0)
    const handleResultChange = (result) => {
        setCuadro(result);
        seguir()
    }

    //Estado de siguiente pagina
    const [siguiente,setSiguiente] = useState(false)

    const seguir = () => {
        setSiguiente(true)
    }

    
    return(
        
        <div>
            {siguiente ? (
                <>
                <Formulario /*onResultChange2={handleResultChange2}*/ x={cuadro}/>
                </>
            ) : (
                <div>
                    <CuadroConteo onResultChange={handleResultChange}  />
                </div>
            )}
        </div>

    )
}