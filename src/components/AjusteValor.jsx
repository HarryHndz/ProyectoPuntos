import { useState } from "react";
import { Terminamos } from "./HorasTrabajo.jsx";

export const Formulario = (Cuadro) => {
    
    const valAnte = Cuadro.x

    const [sum2,setSum2] = useState(0)

    //suma de las preguntas
    const sumaPreguntas = (n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14)=>{
        const sumaFinal2= n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+n13+n14
        setSum2(sumaFinal2)
        Terminar()
    }

    //resultado fianl
    //const [resultadoFin,setResultadoFin] =useState(0)
    const FinalResul = (sumaFinal2)=>{
        const Pfa = valAnte *(0.65+(0.01*sumaFinal2))
        let resulRedondeado = Math.round(Pfa * 100) / 100
        return (resulRedondeado)
    }

    //seguir avanzando
    const [final,setFinal] = useState(false)
    const Terminar = () => {
        setFinal(true)
    }

    return (
        <div>
            {final ? (
                <>
                <Terminamos x = {FinalResul(sum2)}/>
                </>
            ) : (
                <>
                <form onSubmit={ev=>{
                    ev.preventDefault();
                    const p1 = Number(ev.target.p1.value)
                    const p2 = Number(ev.target.p2.value)
                    const p3 = Number(ev.target.p3.value)
                    const p4 = Number(ev.target.p4.value)
                    const p5 = Number(ev.target.p5.value)
                    const p6 = Number(ev.target.p6.value)
                    const p7 = Number(ev.target.p7.value)
                    const p8 = Number(ev.target.p8.value)
                    const p9 = Number(ev.target.p9.value)
                    const p10 = Number(ev.target.p10.value)
                    const p11 = Number(ev.target.p11.value)
                    const p12 = Number(ev.target.p12.value)
                    const p13 = Number(ev.target.p13.value)
                    const p14 = Number(ev.target.p14.value)
                    sumaPreguntas(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14)
                }}>
                    <label>1. ¿El sistema requiere respaldo y recuperación confiables?</label>
                    <input type="number" name="p1" />
                    <br />
                    <label>2. ¿Se requieren comunicaciones de datos especializadas para 
                    transferir información hacia o desde la aplicación? </label>
                    <input type="number" name="p2" />
                    <br />
                    <label>3. ¿Existen funciones de procesamiento distribuidas?</label>
                    <input type="number" name="p3" />
                    <br />
                    <label>4. ¿El desempeño es crucial?</label>
                    <input type="number" name="p4" />
                    <br />
                    <label>5. ¿El sistema correrá en un entorno operativo existente enormemente utilizado?</label>
                    <input type="number" name="p5" />
                    <br />
                    <label>6. ¿El sistema requiere entrada de datos en línea?</label>
                    <input type="number" name="p6" />
                    <br />
                    <label>7. ¿La entrada de datos en línea requiere que la 
                    transacción de entrada se construya sobre múltiples 
                    pantallas u operaciones?</label>
                    <input type="number" name="p7" />
                    <br />
                    <label>8. ¿Los ALI se actualizan en línea?</label>
                    <input type="number" name="p8" />
                    <br />
                    <label>9. ¿Las entradas, salidas, archivos o consultas son 
                    complejos?</label>
                    <input type="number" name="p9" />
                    <br />
                    <label>10. ¿El procesamiento interno es complejo?</label>
                    <input type="number" name="p10" />
                    <br />
                    <label>11. ¿El código se diseña para ser reutilizable?</label>
                    <input type="number" name="p11" />
                    <br />
                    <label>12. ¿La conversión y la instalación se incluyen en el 
                    diseñ?</label>
                    <input type="number" name="p12" />
                    <br />
                    <label>13. ¿El sistema se diseña para instalaciones múltiples en 
                    diferentes organizaciones?</label>
                    <input type="number" name="p13" />
                    <br />
                    <label>14. ¿La aplicación se diseña para facilitar el cambio y su 
                    uso por parte del usuario?</label>
                    <input type="number" name="p14" />
                <button type="submit">Continuar</button>
                </form>
                <p>{sum2}</p>
                
                </>
                
            )}
        </div>


    )
    
}