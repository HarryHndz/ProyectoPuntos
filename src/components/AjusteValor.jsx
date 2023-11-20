import { useState } from "react";
import { Terminamos } from "./HorasTrabajo.jsx";

export const Formulario = (Cuadro) => {
    
    const valAnte = Cuadro.x

    const [sum2,setSum2] = useState(0)

    const FinalResul = (sumaFinal2)=>{
        const Pfa = valAnte *(0.65+(0.01*sumaFinal2))
        let resulRedondeado = Math.round(Pfa * 100) / 100
        return (resulRedondeado)
    }

    const [final,setFinal] = useState(false)
    const Terminar = () => {
        setFinal(true)
    }

    return (
        
            <div>
        
            {final ? (
                <>
                <Terminamos x = {FinalResul(sum2)} />
                </>
            ) : (
                <>
                <div className="flex justify-center items-center my-5">
                    <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r 
            from-blue-900 to-violet-500 text-center">Factor de ajuste de valor</h1>
                </div>
                <div className="flex justify-center items-center my-5">
                    <caption class="caption-bottom">responda las 14 preguntas indicadas y asignele valores desde 0 (no importante) a 5 (absolutamente esencial)</caption>
                </div>
                <div className="flex justify-center items-center my-5">
                <form onSubmit={ev => {
                    ev.preventDefault();
                    let total = 0
                    for (let i = 1; i <= 14; i++) {
                        const value = Number(ev.target[`p${i}`].value)
                        if (!value) {
                            alert(`La pregunta ${i} está vacía`)
                            return;
                        }
                        total += value
                    }
                    setSum2(total)
                    Terminar()
                    console.log(`La suma total es: ${total}`)
                }}>
                    <label>1. ¿El sistema requiere respaldo y recuperación confiables?</label>
                    <br />
                    <input type="number" min="0" max="5" name="p1" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 
                    focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />

                    <label>2. ¿Se requieren comunicaciones de datos especializadas para 
                    transferir información hacia o desde la aplicación? </label>
                    <br />
                    <input type="number" min="0" max="5" name="p2" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />

                    <label>3. ¿Existen funciones de procesamiento distribuidas?</label>
                    <br />
                    <input type="number" min="0" max="5" name="p3" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />

                    <label>4. ¿El desempeño es crucial?</label>
                    <br />
                    <input type="number" min="0" max="5" name="p4" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />

                    <label>5. ¿El sistema correrá en un entorno operativo existente enormemente utilizado?</label>
                    <br />
                    <input type="number" min="0" max="5" name="p5" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />

                    <label>6. ¿El sistema requiere entrada de datos en línea?</label>
                    <br />
                    <input type="number" min="0" max="5" name="p6" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />

                    <label>7. ¿La entrada de datos en línea requiere que la 
                    transacción de entrada se construya sobre múltiples 
                    pantallas u operaciones?</label>
                    <br />
                    <input type="number" min="0" max="5" name="p7" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />

                    <label>8. ¿Los ALI se actualizan en línea?</label>
                    <br />
                    <input type="number" min="0" max="5" name="p8" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />

                    <label>9. ¿Las entradas, salidas, archivos o consultas son 
                    complejos?</label>
                    <br />
                    <input type="number" min="0" max="5" name="p9" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />

                    <label>10. ¿El procesamiento interno es complejo?</label>
                    <br />
                    <input type="number" min="0" max="5" name="p10" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />

                    <label>11. ¿El código se diseña para ser reutilizable?</label>
                    <br />
                    <input type="number" min="0" max="5" name="p11" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                    <br />

                    <label>12. ¿La conversión y la instalación se incluyen en el 
                    diseñ?</label>
                    <br />
                    <input type="number" min="0" max="5" name="p12" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />

                    <label>13. ¿El sistema se diseña para instalaciones múltiples en 
                    diferentes organizaciones?</label>
                    <br />
                    <input type="number" min="0" max="5" name="p13" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />

                    <label>14. ¿La aplicación se diseña para facilitar el cambio y su 
                    uso por parte del usuario?</label>
                    <input type="number" min="0" max="5" name="p14" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                    <br />
                    <div className="flex justify-center">
                        <button type="submit" className="w-1/2 inline-block rounded-md bg-indigo-600 px-8 py-3 
                        text-center font-medium text-white hover:bg-indigo-700">Continuar</button>
                    </div>
                
                </form>
                </div>
                </>
            )}
        </div>

    )
    
}

