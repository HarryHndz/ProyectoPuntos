import { OpcionNum } from "./InputBtn.jsx"

export const Formulario = () => {
    return (
        <form>
            <label>1. ¿El sistema requiere respaldo y recuperación confiables?</label>
            <OpcionNum />

            <label>2. ¿Se requieren comunicaciones de datos especializadas para 
            transferir información hacia o desde la aplicación? </label>
            <OpcionNum />

            <label>3. ¿Existen funciones de procesamiento distribuidas?</label>
            <OpcionNum />

            <label>4. ¿El desempeño es crucial?</label>
            <OpcionNum />

            <label>5. ¿El sistema correrá en un entorno operativo existente enormemente utilizado?</label>
            <OpcionNum />

            <label>6. ¿El sistema requiere entrada de datos en línea?</label>
            <OpcionNum />

            <label>7. ¿La entrada de datos en línea requiere que la 
            transacción de entrada se construya sobre múltiples 
            pantallas u operaciones?</label>
            <OpcionNum />

            <label>8. ¿Los ALI se actualizan en línea?</label>
            <OpcionNum />

            <label>9. ¿Las entradas, salidas, archivos o consultas son 
            complejos?</label>
            <OpcionNum />

            <label>10. ¿El procesamiento interno es complejo?</label>
            <OpcionNum />

            <label>11. ¿El código se diseña para ser reutilizable?</label>
            <OpcionNum />

            <label>12. ¿La conversión y la instalación se incluyen en el 
            diseñ?</label>
            <OpcionNum />

            <label>13. ¿El sistema se diseña para instalaciones múltiples en 
            diferentes organizaciones?</label>
            <OpcionNum />

            <label>14. ¿La aplicación se diseña para facilitar el cambio y su 
            uso por parte del usuario?</label>
            <OpcionNum />

        </form>
    )
    
}