import { CuadroConteo } from "./ConteoTotal.jsx";
import { Formulario } from "./AjusteValor.jsx";
import { useState } from "react";
import { BotonInicio } from "./BotonHome.jsx";

export const ResultadoForm = ({volverInicio})=>{

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
                <Formulario x={cuadro} />
                <BotonInicio volverInicio={volverInicio}></BotonInicio>
                </>
            ) : (
                <div>
                    <CuadroConteo onResultChange={handleResultChange}  />
                    <BotonInicio volverInicio={volverInicio}></BotonInicio>
                </div>
            )}
        </div>

    )
}