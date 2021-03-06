import React from 'react';
import Link from 'next/link'

const Header = () => (
  <header className="header">
    <div className="">
      <div className="grid grid-cols-2 gap-0 mt-1">
          <Link href="/home">
            <h1 className='font-serif text-gray-700 text-opacity-50 text-3xl m-5 cursor-pointer'>Donosura</h1>
          </Link>
          <div className="mt-4 ml-10">
            <div className="grid grid-flow-col auto-cols">
              <img className="cuenta" src="/cuenta.svg" alt="Cuenta" height="30" width="30" />
              <img className="notificacion" src="/notificacion.svg" alt="Busqueda" height="30" width="30" />
              <img className="carrito" src="/carrito.svg" alt="Carrito" height="30" width="30" />
            </div>
          </div>
      </div>
    </div>
  </header>
);

export default Header;

