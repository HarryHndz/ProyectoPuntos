import { useState } from "react"

export const CuadroConteo = ({onResultChange })=>{
    const [total, setTotal] = useState(0)

    const calcularConteo = (ee,se,ce,ali,aie)=>{
        const sumaConteo = ee+se+ce+ali+aie 
        //let ResultadoFinal
        /*
        if(ponderado ==='simple'){
             ResultadoFinal = sumaConteo * 3

        }else if(ponderado ==='promedio'){
             ResultadoFinal = sumaConteo * 6
        }else if(ponderado ==='promedio'){
             ResultadoFinal = sumaConteo *9
    
        }
        */
        setTotal(sumaConteo)
        onResultChange(sumaConteo)
    
    }
    return(
        <>
        <form onSubmit={ev =>{
            ev.preventDefault();
            /*const FactorPond = ev.target.factor_ponderado.value*/
            const EntradaEx = Number(ev.target.conteo_ee.value) * Number(ev.target.radio_ee.value)
            const salidaEx = Number(ev.target.conteo_se.value) * Number(ev.target.radio_se.value)
            const ConsultaEx = Number(ev.target.conteo_ce.value) * Number(ev.target.radio_ce.value)
            const ArchLin = Number(ev.target.conteo_ali.value) * Number(ev.target.radio_ali.value)
            const ArchLEX = Number(ev.target.conteo_aie.value) * Number(ev.target.radio_aie.value)
            calcularConteo(EntradaEx,salidaEx,ConsultaEx,ArchLin,ArchLEX)
            
        }}>

            <table>
                
                <tr>
                    <th>Valor dominio de informacion</th>
                    <th>Conteo</th>
                    <th>Simple</th>
                    <th>Promedio</th>
                    <th>Compeljo</th>
                </tr>
                <tr>
                    <td><label htmlFor="">Entradas Externas (EE)</label></td>
                    <td><input type="number" name="conteo_ee"/></td>
                    <td><input type="radio" name="radio_ee" value="3"/></td>
                    <td><input type="radio" name="radio_ee" value="4"/></td>
                    <td><input type="radio" name="radio_ee" value="6"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Salidas Externas (SE)</label></td>
                    <td><input type="number" name="conteo_se"/></td>
                    <td><input type="radio" name="radio_se" value="4"/></td>
                    <td><input type="radio" name="radio_se" value="5"/></td>
                    <td><input type="radio" name="radio_se" value="7"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Consultas Externas (CE)</label></td>
                    <td><input type="number" name="conteo_ce"/></td>
                    <td><input type="radio" name="radio_ce" value="3"/></td>
                    <td><input type="radio" name="radio_ce" value="4"/></td>
                    <td><input type="radio" name="radio_ce" value="6"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Archivos Logicos Internos (ALI)</label></td>
                    <td><input type="number" name="conteo_ali"/></td>
                    <td><input type="radio" name="radio_ali" value="7"/></td>
                    <td><input type="radio" name="radio_ali" value="10"/></td>
                    <td><input type="radio" name="radio_ali" value="15"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Archivos de Interfaz Externo (AIE)</label></td>
                    <td><input type="number" name="conteo_aie"/></td>
                    <td><input type="radio" name="radio_aie" value="5"/></td>
                    <td><input type="radio" name="radio_aie" value="7"/></td>
                    <td><input type="radio" name="radio_aie" value="10"/></td>
                </tr>
                <tr>
                    <td coldspan="5"><button type="submit">Calcular</button></td>
                </tr>
            </table>

            <select name="factor_ponderado">
                <option value="simple">Simple</option>
                <option value="promedio">Promedio</option>
                <option value="complejo">Complejo</option>
            </select>

            
        </form>
        <p>{total}</p>
        </>
    )

}

