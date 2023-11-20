

export const BotonInicio =({volverInicio})=>{
    return (
        <div className="flex justify-center px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button className='w-1/3 inline-block rounded-md bg-indigo-600 px-8 py-3 text-center font-medium text-white 
            hover:bg-indigo-700' onClick={volverInicio}>Home</button>
        </div>
    )
}