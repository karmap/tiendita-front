import React from 'react';
import Link from 'next/link'

const Footer = () => (
  <footer className="footer">
    <div className="text-center item-center mt-8 mb-1">
      <div className="grid grid-cols-3 gap-0 mx-auto">
        <div>
        <img className="mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDJFzS8a2QBUT-hNHnUO9IgQ9yBA52PR3LA&usqp=CAU" alt="Facebook" width="50" height="50" />    
        </div>
        <div className="mx-auto">
            <img className="" src="data:image/png;base64,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" alt="Twitter" width="50" height="50" />
        </div>
        <div className="mx-auto">
            <img className="" src="https://image.flaticon.com/icons/png/512/2168/2168302.png" alt="Instagram" width="50" height="50" />
        </div>
      </div>

        <div className="mt-4">
            <ul className="text-center flex space-x-4 mt-12 mb-16">
                <Link href="/registro">
                  <li className="flex-1">
                    <label className="label-btn">
                      Crear cuenta
                    </label>
                  </li>
                </Link>
                <Link href="/iniciar-sesion">
                  <li className="flex-1">
                    <label className="label-btn">
                      Iniciar Sesión
                    </label>
                  </li>
                </Link>
            </ul>
        </div>
    </div>
  </footer>
);

export default Footer;