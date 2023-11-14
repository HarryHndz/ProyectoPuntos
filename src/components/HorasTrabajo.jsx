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
        <div>
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
                    <h1>Jornada laboral</h1>

                    <label>No. De días trabajados a la semana</label>

                    <label>Horas trabajadas al día</label>
                    <input type="number" name="horas" />

                    <label>No. De trabajadores</label>
                    <input type="number" name="personas" />

                <button type="submit">Finalizar</button>
                </form>
                </>
            )}
        </div>
    )
}