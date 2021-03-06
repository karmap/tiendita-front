import React from 'react';
import Link from 'next/link'

const LandingHome = () => (
  <div className="container mx-auto">
    <div className="grid grid-cols-1 gap-0 mt-1">
      <h1 className='font-black text-gray-700 text-opacity-100 text-3xl m-5 text-center'>¡Hola, bienvenida!</h1>
          <div className="grid grid-cols-1 gap-0 mt-1 m-2 text-justify">
            <p className=""><strong><span>Donosura</span></strong> es una plataforma de venta por catálogo virtual que te ayudará a generar ingresos desde casa.</p>
              <br/>
            <p>Vende como tú ya sabes, donde tú ya sabes, nosotros te proporcionamos los productos de los mejores artesanos del país.</p>
          </div>
          <div className="mx-auto">
          <img className="imagen" src="https://image.freepik.com/vector-gratis/chica-elegante-ropa-moda-dibujado-mano-hermosa-nina_90395-236.jpg" alt="presentacion" />
          </div>
          
          <h1 className='text-gray-700 text-opacity-100 text-3xl m-5 text-center'>Sistema de Recompensas</h1>

            <div className="grid grid-cols-1 gap-0 mt-1 m-2 text-justify">
                  <p className="">Por cada 100 pesos ganarás 1 diamante. Por ejemplo: si una bolsa cuesta 488 pesos, obtendrás 4 diamantes.</p><br/>

                  <p className="">Cada que otra persona se una a la plataforma a través de tu link de referido y haga una compra mínima de 1000 pesos, ganarás un bonus extra de 10 diamantes.</p><br/>

                  <p className="">Podrás canjear tus diamantes por descuentos, productos gratuitos y premios como: regalos únicos, boletos de avión, viajes y demás.</p><br/>

                  <p className="">Cada 100 diamantes subirás de nivel, lo que te dará acceso a cada vez mejores beneficios.</p>
            
            </div>
            <h2 className='font-black text-gray-700 text-opacity-100 text-3xl m-5 text-center'>¡Inicia tu negocio con nosotros!</h2>
            <Link href="/catalogo">
            <h2 className='font-black text-gray-700 text-opacity-100 text-3xl m-5 text-center hover:underline focus:underline'>Catálogos disponibles</h2>
            </Link>

          <div className="grid grid-cols-1 gap-0 mt-1 mb-2 text-center mx-auto">
          
          <img className="imagen" src="https://stylelovely.com/wp-content/uploads/marcas_ropa_juvenil-736x412.jpg" alt="presentacion" />
          </div>
    </div>
  </div>
);

export default LandingHome;