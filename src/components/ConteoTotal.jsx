import { BotonCalcular } from "./Boton.jsx"
import { RadioBotones } from "./InputBtn.jsx"

export const CuadroConteo = ()=>{
    return(
    <>
        <table>
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
                    <td><input type="number" name="conteo_ee" /></td>
                    <td><RadioBotones valorSimple={3} valorPromedio={4} valorComplejo={6} /></td>
                </tr>
                <tr>
                    <td>Salidas externas (SE)</td>
                    <td><input type="number" name="conteo_se" /></td>
                    <td><RadioBotones valorSimple={4} valorPromedio={5} valorComplejo={7}  /></td>
                </tr>
                <tr>
                    <td>Consultas externas (CE)</td>
                    <td><input type="number" name="conteo_ce" /></td>
                    <td><RadioBotones valorSimple={3} valorPromedio={4} valorComplejo={6} /></td>
                </tr>
                <tr>
                    <td>Archivos lógicos internos (ALI)</td>
                    <td><input type="number" name="conteo_ali" /></td>
                    <td><RadioBotones valorSimple={7} valorPromedio={10} valorComplejo={15} /></td>
                </tr>
                <tr>
                    <td>Archivos de interfaz externos (AIE)</td>
                    <td><input type="number" name="conteo_aie" /></td>
                    <td><RadioBotones valorSimple={5} valorPromedio={7} valorComplejo={10} /></td>
                </tr>
            </tbody>
        </table>
        <BotonCalcular />
    </>
    )
}