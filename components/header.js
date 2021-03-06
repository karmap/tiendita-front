import React from 'react';
import Link from 'next/link'

const Header = () => (
  <header className="header">
    <div className="">
      <div className="grid grid-cols-2 gap-0 mt-1">
          <Link href="/home">
          <h1 className='font-black text-gray-700 text-opacity-50 text-3xl m-5'>Donosura</h1>
          </Link>
          <div className="grid grid-cols-3 gap-0 mt-3 mb-2">
          <img className="cuenta" src="/cuenta.svg" alt="Cuenta" height="40" width="40" />
          <img className="notificacion" src="/notificacion.svg" alt="Busqueda" height="40" width="40" />
          <img className="carrito" src="/carrito.svg" alt="Carrito" height="40" width="40" />
          </div>
      </div>
    </div>
  </header>
);

export default Header;

