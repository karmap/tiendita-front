import Link from 'next/link'
import HeaderSimple from '../../components/header-simple';
// import { Formik, useFormik } from "formik";
// import * as Yup from "yup";
import axios from 'axios'
import { useState, useEffect } from "react";
import useRequest from '../../hooks/use-request';
import { useRouter } from 'next/router'

export default function Productos() {

    const [productos, setProductos] = useState()

    useEffect(() => {
        const url = 'http://localhost:5000/v1/products'
        axios.get(url).then((response)=>{
            console.log(response.data.results);
            setProductos(response.results);
        })
    });

  return (
    <div className="sm:container sm:mx-auto sm:w-80">

        <HeaderSimple />

        <div className="form-container">

          <div className="w-full">
            <h2 className="link border-b-4 border-gray-400 mb-10">Administrar Productos</h2>
          </div>

        <div className="">
            {
                productos &&
                productos.map((producto) => {
                    producto.name
                })
            }
        </div>
        </div>
    </div>
  )
}