import Link from 'next/link'
import HeaderSimple from '../components/header-simple';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios'
// import { useState } from "react";
import useRequest from '../hooks/use-request';
import { useRouter } from 'next/router'


export default function IndexPage() {

    const router = useRouter()

    const { doRequest, errors } = useRequest({
        url: 'http://localhost:5000/v1/auth/register',
        method: 'post',
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            lastname: Yup.string().required('El apellido es obligatorio'),
            email: Yup.string().email('El email no es válido').required('El Email es obligatorio'),
            password:
                Yup.string()
                .min(6, 'La contraseña debe tener al menos 6 caracteres')
                .required('La contraseña es obligatorio'),
        }),
        onSubmit: data => {
            doRequest({
                name: `${data.name} ${data.lastname}`,
                email: data.email,
                password: data.password
            });
            router.push('/catalogo')
        }
    })

    // const registerUser = async (valores) => {
    //     console.log('env');
    //     console.log(valores.name);
    
    //     const PATH = 'http://localhost:5000/v1/auth/register'
    
    //     const response = await axios.post(PATH, {
    //         name: `${formik.name} ${formik.lastname}`,
    //         email: formik.email,
    //         password: formik.password
    //     }).then( response => {
    //         console.log(response.data);
    //     }).catch( error => {
    //         setError(error.response.data.message);
    //     });
    // }

  return (
    <div className="sm:container sm:mx-auto sm:w-80">

        <HeaderSimple />

        <div className="form-container">

          <div className="w-full">
            <nav>
                <ul className="text-center flex space-x-2">
                <li className="flex-1">
                    <h2 className="link border-b-4 border-gray-400">Crear Cuenta</h2>
                </li>
                <Link href="/iniciar-sesion">
                <li className="flex-1 cursor-pointer">
                    <h2 className="link">Iniciar Sesión</h2>
                </li>
                </Link>
                </ul>
            </nav>
          </div>

          <div className="text-center rounded-md w-full my-8 p-2 bg-blue-500">
            <span className=" text-white">Conectar con Facebook</span>
          </div>

          <div className="text-center">
            <div><span>Ó</span></div>
          </div>

        <div className="">
            <form onSubmit={formik.handleSubmit}>

                <div className="inp-container">
                    <div className="inp-label-div">
                    <span className="inp-label">Nombre</span>
                    </div>
                    <div className="inp-div">
                        <input
                            className="inp"
                            id="name"
                            type="text"
                            placeholder=""
                            value={formik.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                </div>

                { formik.touched.name && formik.errors.name ? (
                    <div className="error">
                        {formik.errors.name}
                    </div>
                ) : null }

                <div className="inp-container">
                    <div className="inp-label-div">
                    <span className="inp-label">Apellido</span>
                    </div>
                    <div className="inp-div">
                        <input
                            className="inp"
                            id="lastname"
                            type="text"
                            placeholder=""
                            value={formik.lastname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                </div>

                { formik.touched.lastname && formik.errors.lastname ? (
                    <div className="error">
                        {formik.errors.lastname}
                    </div>
                ) : null }

                <div className="inp-container">
                    <div className="inp-label-div">
                    <span className="inp-label">Email</span>
                    </div>
                    <div className="inp-div">
                        <input
                            className="inp"
                            id="email"
                            type="email"
                            placeholder=""
                            value={formik.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                </div>

                { formik.touched.email && formik.errors.email ? (
                    <div className="error">
                        {formik.errors.email}
                    </div>
                ) : null }
                
                <div className="inp-container">
                    <div className="inp-label-div">
                    <span className="inp-label">Contraseña</span>
                    </div>
                    <div className="inp-div">
                        <input
                            className="inp"
                            id="password"
                            type="password"
                            placeholder=""
                            value={formik.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                </div>

                { formik.touched.password && formik.errors.password ? (
                    <div className="error">
                        {formik.errors.password}
                    </div>
                ) : null }

                {errors}

                <div className="text-center">
                    <input
                        className="btn"
                        type="submit"
                        value="Registrar"
                    />
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}