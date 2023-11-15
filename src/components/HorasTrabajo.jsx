import { useState } from "react";
import { MostrarResultados } from "./Fin.jsx";

export const Terminamos = (Pfa) => {

    const resulFin = Pfa.x

    const [conteo, setConteo] = useState(0)
    const contar = (horas, personas) => {
        const totalDatos = {
            'horas' : horas,
            'personas' : personas
        }
        setConteo(totalDatos)
        Acaba()
    }
    const calculoFinal = (a) => {
        const horas = a.horas
        const personas = a.personas
        const esfuerzoHP = Math.round((resulFin / (1 / horas))*100) / 100
        const duracionProyect = Math.round((esfuerzoHP / personas)*100) / 100
        const valores = {
            'complejidad' : resulFin,
            'esfuerzoHora' : esfuerzoHP,
            'duracion' : duracionProyect
        }
        return (valores)
    }

    const [concluir,setConcluir] = useState(false)
        const Acaba = () => {
            setConcluir(true)
        }

    return (

        <div className="w-3/4">
            <div className="text-center"> 
                <h1>Jornada Laboral</h1>
            </div>
            {concluir ? (
                <>
                <MostrarResultados a = {calculoFinal(conteo)} />
                </>
            ) : (
                <>
                <form onSubmit={ev=>{
                    ev.preventDefault();
                    const horas = Number(ev.target.horas.value)
                    const personas = Number(ev.target.personas.value)
                    contar(horas, personas)
                }}>
                    <label>Horas trabajadas al día</label>
                    <input type="number" name="horas" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />

                    <label>No. De trabajadores</label>
                    <input type="number" name="personas" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                <div className="flex justify-center">
                    <button type="submit" className="m-10 inline-block rounded-md bg-indigo-600 px-8 py-3 text-center 
                    font-medium text-white hover:bg-indigo-700">Finalizar</button>
                </div>
                
                </form>
                </>
            )}
        </div>
    )
}