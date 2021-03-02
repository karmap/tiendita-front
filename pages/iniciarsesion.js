import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="sm:container sm:mx-auto sm:w-80">
      Página de Inicio de Sesión{' '}
        <div className="box-content p-4 mt-20 bg-gray-100">

        <ul className="text-center flex space-x-4">
            <Link href="/registro">
            <li className="hover:underline focus:underline flex-1">Crear Cuenta</li>
            </Link>
            <Link href="/iniciarsesion">
            <li className="font-bold underline hover:underline focus:underline flex-1">Iniciar Sesión</li>
            </Link>
        </ul>
        <div className="text-center mb-5 mt-5">
            <span className="bg-blue-500 text-white">Conectar con Facebook</span>
        </div>
        <div className="text-center">
            <div><span>Ó</span></div>
        </div>

        <div className="rounded px-8 pt-6 pb-8 mb-4">
            <form action="" id="forminisesion">
                <div className="mb-4">
                    <label for="username" className="block text-grey-darker text-sm font-bold mb-2">
                        <span className="">Email</span>
                        <input id="username" type="text" placeholder="" required autoComplete="email" className="focus:ring-2 focus:ring-blue-600 rounded w-full py-2 px-3 text-grey-darker mb-3 bg-transparent shadow" />
                    </label>
                </div>
                <div className="mb-6">
                    <label for="password" className="block text-grey-darker text-sm font-bold mb-2" >
                        <span>Contraseña</span>
                        <input id="password" type="password" placeholder="" required className="focus:ring-2 focus:ring-blue-600 rounded w-full py-2 px-3 text-grey-darker mb-3 bg-transparent shadow" />
                    </label>
                </div>
                <div className="text-center">
                    <input className="bg-gray-500 hover:bg-gray-400 text-white py-2 px-4 rounded" type="submit" value="Ingresar" />
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}
