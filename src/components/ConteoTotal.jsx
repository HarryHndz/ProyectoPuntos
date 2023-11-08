import { BotonCalcular } from "./Boton.jsx"
import { RadioBotones } from "./InputBtn.jsx"
import { useState } from "react"


export const CuadroConteo = ()=>{
    const [ee,setEe] = useState(0)
    const [se,setSe] = useState(0)
    const [ce,setCe] = useState(0)
    const [ali,setAli] = useState(0)
    const [aie,setAie] = useState(0)

    const conteoEe = (event) => {
        setEe(event.target.value)
    }
    const conteoSe = (event) => {
        setSe(event.target.value)
    }
    const conteoCe = (event) => {
        setCe(event.target.value)
    }
    const conteoAli = (event) => {
        setAli(event.target.value)
    }
    const conteoAie = (event) => {
        setAie(event.target.value)
    }

    return(
    <form action="">
        <table className="">
            <thead>
                <tr>
                    <th>Valor dominio de información</th>
                    <th>Conteo</th>
                    <th>Factor ponderado<br/>
                    simple promedio complejo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Entradas externas (EE)</td>
                    <td><input type="number" name="conteo_ee" onChange={conteoEe}  /></td>
                    <td><RadioBotones valorSimple={3} valorPromedio={4} valorComplejo={6} /></td>
                </tr>
                <tr>
                    <td>Salidas externas (SE)</td>
                    <td><input type="number" name="conteo_se" onChange={conteoSe} /></td>
                    <td><RadioBotones valorSimple={4} valorPromedio={5} valorComplejo={7}  /></td>
                </tr>
                <tr>
                    <td>Consultas externas (CE)</td>
                    <td><input type="number" name="conteo_ce" onChange={conteoCe} /></td>
                    <td><RadioBotones valorSimple={3} valorPromedio={4} valorComplejo={6} /></td>
                </tr>
                <tr>
                    <td>Archivos lógicos internos (ALI)</td>
                    <td><input type="number" name="conteo_ali" onChange={conteoAli}  /></td>
                    <td><RadioBotones valorSimple={7} valorPromedio={10} valorComplejo={15} /></td>
                </tr>
                <tr>
                    <td>Archivos de interfaz externos (AIE)</td>
                    <td><input type="number" name="conteo_aie" onChange={conteoAie}  /></td>
                    <td><RadioBotones valorSimple={5} valorPromedio={7} valorComplejo={10} /></td>
                </tr>
            </tbody>
        </table>
        <BotonCalcular />
        <p>{ee}</p>
        <p>{se}</p>
        <p>{ce}</p>
        <p>{ali}</p>
        <p>{aie}</p>
        </form>
    
    )
}