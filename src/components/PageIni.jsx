import myImagen from '../img/hola1.jpg';
import myImagen2 from '../img/hola2.jpg';
import myImagen3 from '../img/3297225.jpg';
import myImagen4 from '../img/hola4.jpg';
import myImagen5 from '../img/hola5.jpg';
import myImagen6 from '../img/hola6.jpg';
import myImagen7 from '../img/hola7.jpg';

import { useState } from "react"
import {ResultadoForm} from "./InterpretFinal"

export const PaginaIincio = ()=>{
    const [mostrar,setMostrar] = useState(false)
    
    const mostrarFormulario = ()=>{
        setMostrar(true)
    }

    const volverInicio = ()=>{
        setMostrar(false)
    }

    return (
        <div>
            {mostrar ? (
            <>
            <ResultadoForm />
            <button onClick={volverInicio}>Volver Inicio</button>
            </>
        ) : (
            <div className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Conoce el valor de tu software
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                    Bienvenido aquí podrás conocer el tamaño de la funcionalidad de tu software
                    ¿Cómo calculamos o expresamos este resultado?
                    Se calcula a través de una suma ponderada de las características del producto
                </p>
                </div>
                <div>
                <div className="mt-10">
                    {/* Decorative image grid */}
                    <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                    >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                                src={myImagen}
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src={myImagen2}
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src={myImagen3}
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src={myImagen4}
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src={myImagen5}
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src={myImagen6}
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src={myImagen7}
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
    
                    <button
                    nClick={mostrarFormulario}
                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                    >
                    Comenzar
                    </button>
                </div>
                </div>
            </div>
            </div>

        </div>
            )}
        </div>
    )
}
