import { useState } from "react"
import { Alert, Space } from 'antd';

export const CuadroConteo = ({onResultChange})=>{
    const [total, setTotal] = useState(0)
    const [alertMessage, setAlertMessage] = useState(null);

    const calcularConteo = (ee,se,ce,ali,aie)=>{
        const sumaConteo = ee+se+ce+ali+aie 
        setTotal(sumaConteo)
        onResultChange(sumaConteo)
    
    }

    return(
        <>
        <div className="flex justify-center items-center my-5">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r 
            from-blue-900 to-violet-500 text-center">Introduce la cantidad de componentes <br />de la aplicación</h1>
        </div>
        <div className="flex justify-center items-center my-5">

        
            <form onSubmit={ev =>{
                ev.preventDefault();

                const EntradaEx = Number(ev.target.conteo_ee.value) * Number(ev.target.radio_ee.value)
                const salidaEx = Number(ev.target.conteo_se.value) * Number(ev.target.radio_se.value)
                const ConsultaEx = Number(ev.target.conteo_ce.value) * Number(ev.target.radio_ce.value)
                const ArchLin = Number(ev.target.conteo_ali.value) * Number(ev.target.radio_ali.value)
                const ArchLEX = Number(ev.target.conteo_aie.value) * Number(ev.target.radio_aie.value)
            
                if (!EntradaEx || !salidaEx || !ConsultaEx || !ArchLin || ! ArchLEX) {
                    setAlertMessage(`Por favor llene todos los campos de la tabla`)
                    return
                }
                calcularConteo(EntradaEx,salidaEx,ConsultaEx,ArchLin,ArchLEX)
            }}>

            
                <table className="my-4">
                    <tr>
                        <th className="px-3" >Valor dominio de informacion</th>
                        <th>Conteo</th>
                        <th className="px-2">Simple</th>
                        <th className="px-2">Promedio</th>
                        <th>Compeljo</th>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Entradas Externas (EE)</label></td>
                        <td><input type="number" min="1" max="50" name="conteo_ee" className="mt-1 px-3 py-2 bg-white border-2 shadow-sm border-violet-600 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" /></td>
                        <td className="px-6"><input type="radio" name="radio_ee" value="3" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                        <td className="px-6"><input type="radio" name="radio_ee" value="4" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                        <td className="px-6"><input type="radio" name="radio_ee" value="6" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Salidas Externas (SE)</label></td>
                        <td><input type="number" min="1" max="50" name="conteo_se" className="mt-1 px-3 py-2 bg-white border-2 shadow-sm border-violet-600 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" /></td>
                        <td className="px-6"><input type="radio" name="radio_se" value="4"className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                        <td className="px-6"><input type="radio" name="radio_se" value="5" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                        <td className="px-6"><input type="radio" name="radio_se" value="7" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Consultas Externas (CE)</label></td>
                        <td><input type="number" min="1" max="50" name="conteo_ce" className="mt-1 px-3 py-2 bg-white border-2 shadow-sm border-violet-600 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" /></td>
                        <td className="px-6"><input type="radio" name="radio_ce" value="3" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                        <td className="px-6"><input type="radio" name="radio_ce" value="4" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                        <td className="px-6"><input type="radio" name="radio_ce" value="6" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Archivos Logicos Internos (ALI)</label></td>
                        <td><input type="number" min="1" max="50" name="conteo_ali" className="mt-1 px-3 py-2 bg-white border-2 shadow-sm border-violet-600 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" /></td>
                        <td className="px-6"><input type="radio" name="radio_ali" value="7" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                        <td className="px-6"><input type="radio" name="radio_ali" value="10" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                        <td className="px-6"><input type="radio" name="radio_ali" value="15" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                    </tr>
                    <tr >
                        <td><label htmlFor="">Archivos de Interfaz Externo (AIE)</label></td>
                        <td><input type="number" min="1" max="50" name="conteo_aie" className="mt-1 px-3 py-2 bg-white shadow-sm border-2 border-violet-600 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" /></td>
                        <td className="px-6"><input type="radio" name="radio_aie" value="5" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                        <td className="px-6"><input type="radio" name="radio_aie" value="7" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                        <td className="px-6"><input type="radio" name="radio_aie" value="10" className="text-purple-600 checked:text-violet-600 focus:ring-violet-600" /></td>
                    </tr>
                </table>
                <div className="flex justify-center mt-2">
                        <button type="submit" className=" w-1/2 inline-block rounded-md bg-indigo-600 px-8 py-3 
                        text-center font-medium text-white hover:bg-indigo-700">Continuar</button>
                </div>
            </form>
            
        </div>
        {alertMessage && (
            <Space direction="vertical" style={{ width: '100%' }}>
                <Alert
                message={alertMessage}
                type="warning"
                closable
                onClose={() => setAlertMessage(null)}
                />
            </Space>
        )}
        </>
    )

}

