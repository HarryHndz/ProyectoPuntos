import { useState } from "react"


export const CuadroConteo = ()=>{
    const [total, setTotal] = useState(0)

    const calcularConteo = (ponderado,ee,se,ce,ali,aie)=>{
        const sumaConteo = ee+se+ce+ali+aie 
        let ResultadoFinal
        if(ponderado ==='simple'){
             ResultadoFinal = sumaConteo * 3
    
        }else if(ponderado ==='promedio'){
             ResultadoFinal = sumaConteo * 6
            
        }else if(ponderado ==='complejo'){
             ResultadoFinal = sumaConteo *9
    
        }
        setTotal(ResultadoFinal)
        return ResultadoFinal
    
    }
    return(
        <>
        <form onSubmit={ev =>{
            ev.preventDefault();
            const FactorPond = ev.target.factor_ponderado.value
            const EntradaEx = Number(ev.target.conteo_ee.value)
            const salidaEx = Number(ev.target.conteo_se.value)
            const ConsultaEx = Number(ev.target.conteo_ce.value)
            const ArchLin = Number(ev.target.conteo_ali.value)
            const ArchLEX = Number(ev.target.conteo_aie.value)
            calcularConteo(FactorPond,EntradaEx,salidaEx,ConsultaEx,ArchLin,ArchLEX)
            
        }}>
            <select name="factor_ponderado">
                <option value="simple">Simple</option>
                <option value="promedio">Promedio</option>
                <option value="complejo">Complejo</option>
            </select>

            <label htmlFor="">Entradas Externas (EE)</label>
            <input type="number" name="conteo_ee"/>

            <label htmlFor="">Salidas Externas (SE)</label>
            <input type="number" name="conteo_se"/>

            <label htmlFor="">Consultas Externas (CE)</label>
            <input type="number" name="conteo_ce"/>

            <label htmlFor="">Archivos Logicos Internos (ALI)</label>
            <input type="number" name="conteo_ali"/>

            <label htmlFor="">Archivos de Interfaz Externo (AIE)</label>
            <input type="number" name="conteo_aie"/>

            <button type="submit">Calcular</button>

        </form>
        <p>{total}</p>
        
        </>
    )

}

