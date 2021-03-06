import React from 'react';
import { useState } from "react";
import ProductList from '../components/productlist'
import { robots } from './robots'
import Header from '../components/header';
import Footer from '../components/footer';
import Busqueda from '../components/busqueda';
//import Paginado from '../components/paginado';

//console.log (robots)

  export default function AutoGrid() {

  //console.log (robots)
  const [_robots, setRobots] = useState(robots)

  return (
    <div className="mx-auto">
          <div className='mx-auto'>
            <Header />
            <Busqueda />
            <ProductList robots={ _robots } />
            <Footer />
        </div>
    </div>
  );
}