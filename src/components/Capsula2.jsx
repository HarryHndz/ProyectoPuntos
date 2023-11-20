import { Fragment,useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'



export function MostrarResultados(x) {
  const resulFin = x.a
  const [open, setOpen] = useState(true)



  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 sm:mx-0 sm:h-10 sm:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-5xl font-semibold leading-6 text-gray-900">
                        Resultado Final
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-2xl text-gray-500">
                          <br />
                        <h1>La complejidad es:</h1>
                        <h2 className='font-bold'>{resulFin.complejidad}</h2>
                        <br />

                        <h1>El esfuerzo hora/persona es:</h1>
                        <h2 className='font-bold'>{resulFin.esfuerzoHora} horas/personas</h2>
                        <br />

                        <h1>La duración del proyecto en horas es:</h1>
                        <h2 className='font-bold'>{resulFin.duracion}  horas por miembro</h2>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-3 flex justify-center">
                  <button
                    type="button"
                    className="w-60 rounded-md bg-indigo-500  px-5 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-600"
                    onClick={() => setOpen(false)}>Finalizar</button>
                </div>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
  }




