import { useState } from "react";

export const RadioBotones = ({valorSimple,valorPromedio,valorComplejo})=>{

    const [simple,setSimple] = useState()
    const [promedio,setPromedio] = useState()
    const [complejo,setComplejo] = useState()

    const radioSimple = (event)=>{
        setSimple(event.target.value)
    }
    const radioPromedio = (event)=>{
        setPromedio(event.target.value)
    }
    const radioComplejo = (event)=>{
        setComplejo(event.target.value)
    }

    return(
        <>
        <form>
            <input type="radio" name="factor_ponderado_ee" onChange={radioSimple} value={valorSimple} />
            <label htmlFor={valorSimple}>{valorSimple}</label>

            <input type="radio" name="factor_ponderado_ee" onChange={radioPromedio} value={valorPromedio} />
            <label htmlFor={valorPromedio}>{valorPromedio}</label>

            <input type="radio" name="factor_ponderado_ee" onChange={radioComplejo} value={valorComplejo} />
            <label htmlFor={valorComplejo}>{valorComplejo}</label>
        </form>
        <p>{simple},{promedio},{complejo}</p>
        </>

    )
}


export const OpcionNum = () => {
    let elementos = [];

    for (var i = 0; i < 6; i++){
        elementos.push(
            <div>
                <input type="radio" name="valor" value={i} />
                <label htmlFor={i}>{i}</label>
            </div>
        );
    }

    return(
        <form>
            {elementos}
        </form>
    )
}
