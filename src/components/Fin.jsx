

export const MostrarResultados = (x) => {
    const resulFin = x.a
    console.log(resulFin)
    return (
        
        <div>
            <h1>
                La complejidad es:
            </h1>
            <h2>
                {resulFin.complejidad}
            </h2>
            <h1>
                El esfuerzo hora/persona es:
            </h1>
            <h2>
                {resulFin.esfuerzoHora} horas/personas
            </h2>
            <h1>
                La duración del proyecto en horas es:
            </h1>
            <h2>
                {resulFin.duracion} horas por miembro
            </h2>
        </div>
    )
}