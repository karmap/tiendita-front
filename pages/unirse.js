import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/registro">
        <a>ir al registro</a>
      </Link>
      <div className="border-solid border-4 border-gray-400 rounded-md m-4 p-2">
        <label className="text-grey-darker text-sm font-bold -mt-4 mb-4 bg-white">
          Nombre
        </label>
        <input className="shadow appearance-none w-full py-2 px-3 text-grey-darker" id="username2" type="text" placeholder="Username"/>
      </div>


      <div className="inp-container">
        <div className="inp-label-div">
          <span className="inp-label">Nombre</span>
        </div>
        <div className="inp-div">
          <input className="inp" id="username" type="text" placeholder=""/>
        </div>
      </div>

    </div>
  )
}
