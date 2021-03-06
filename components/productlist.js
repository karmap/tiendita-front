import React from 'react';
import Producto from './producto';


const ProductList = ({ robots }) => {
  return (
  <div className="container mx-auto">
    <div className="text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {
        robots.map((robot) => {
          return (
            <Producto
              key={robot.id}
              id={robot.id}
              name={robot.name}
              Color={robot.Color}
              desc={robot.desc}
              precio={robot.precio}
              />
          );
        })
      }
    </div>
  </div>
  );
}

export default ProductList;