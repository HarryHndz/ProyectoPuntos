export const RadioBotones = ({valorSimple,valorPromedio,valorComplejo})=>{
    return(
        <form>
            <input type="radio" name="factor_ponderado_ee" value="simple" className="radiosB" />
            <label htmlFor={valorSimple}>{valorSimple}</label>

            <input type="radio" name="factor_ponderado_ee" value="promedio" className="radiosB2" />
            <label htmlFor={valorPromedio}>{valorPromedio}</label>

            <input type="radio" name="factor_ponderado_ee" value="complejo" className="radiosB" />
            <label htmlFor={valorComplejo}>{valorComplejo}</label>
        </form>

    )
}


export const OpcionNum = () => {
    let elementos = [];

    for (var i = 0; i < 6; i++){
        elementos.push(
            <div>
                <input type="radio" name="valor" value={i} />
                <label htmlFor={i}>{i}</label>
            </div>
        );
    }

    return(
        <form>
            {elementos}
        </form>
    )
}
