//import React, { useImperativeHandle } from 'react';
import React from 'react';

const Producto = ({ name, color, desc, id, precio }) => {
  return (
    <div className='grid grid-cols-1 gap-2 rounded bg-gray-100 ml-2 mx-auto'>
      <div className="bg-gray-100 text-right">
        <a href="/catalogo">+</a>
      </div>
      <div className="mx-auto">
        {//<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
        }
        <img alt='robots' src={`/${id}.jpg?size=200x200`} />
      </div>
      <div className="xs:text-xs sm:text-sm md:text-md xl:text-xl font-thin mx-auto">
        <h2>{name}</h2>
        <p>{id}</p>
        <p>{color}</p>
        <p>{desc}</p>
        <p>{precio}</p>
      </div>
    </div>
  );
}

export default Producto;