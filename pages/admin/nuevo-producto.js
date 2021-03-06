import Link from 'next/link'
import HeaderSimple from '../../components/header-simple';
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios'
// import { useState } from "react";
import useRequest from '../../hooks/use-request';

export default function NuevoProducto() {

    const { doRequest, errors } = useRequest({
        url: 'http://localhost:5000/v1/products',
        method: 'post',
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            type: '',
            price: '',
            count: '',
            image: null
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            description: Yup.string().required('La descripción es obligatorio'),
            type: Yup.string().required('El tipo es obligatorio'),
            price: Yup.number().required('El precio es obligatorio'),
            count: Yup.number().required('El total es obligatorio'),
            image: Yup.mixed().required('La imagen es obligatoria'),
        }),
        onSubmit: data => {
            console.log(data);

            const formData = new FormData();
            const url = 'http://localhost:5000/v1/products'
            formData.append('name', data.name)
            formData.append('description', data.descrtion)
            formData.append('type', data.type)
            formData.append('price', data.price)
            formData.append('count', data.count)
            formData.append('image', data.image)
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            axios.post(url, formData, config).then((response)=>{
                console.log(response.data);
                alert("Producto creado!")
                router.reload()
            })

            // const response = doRequest(data);
            // console.log(response);
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
            <h2 className="link border-b-4 border-gray-400 mb-10">Nuevo Producto</h2>
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
                    <span className="inp-label">Descripción</span>
                    </div>
                    <div className="inp-div">
                        <input
                            className="inp"
                            id="description"
                            type="text"
                            placeholder=""
                            value={formik.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                </div>

                { formik.touched.description && formik.errors.description ? (
                    <div className="error">
                        {formik.errors.description}
                    </div>
                ) : null }

                <div className="inp-container">
                    <div className="inp-label-div">
                    <span className="inp-label">Tipo</span>
                    </div>
                    <div className="inp-div">
                        <input
                            className="inp"
                            id="type"
                            type="text"
                            placeholder=""
                            value={formik.type}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                </div>

                { formik.touched.type && formik.errors.type ? (
                    <div className="error">
                        {formik.errors.type}
                    </div>
                ) : null }

                <div className="inp-container">
                    <div className="inp-label-div">
                    <span className="inp-label">Precio</span>
                    </div>
                    <div className="inp-div">
                        <input
                            className="inp"
                            id="price"
                            type="text"
                            placeholder=""
                            value={formik.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                </div>

                { formik.touched.price && formik.errors.price ? (
                    <div className="error">
                        {formik.errors.price}
                    </div>
                ) : null }

                <div className="inp-container">
                    <div className="inp-label-div">
                    <span className="inp-label">Total en inventario</span>
                    </div>
                    <div className="inp-div">
                        <input
                            className="inp"
                            id="count"
                            type="text"
                            placeholder=""
                            value={formik.count}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                </div>

                { formik.touched.count && formik.errors.count ? (
                    <div className="error">
                        {formik.errors.count}
                    </div>
                ) : null }

                <div className="inp-container">
                    <div className="inp-label-div">
                    <span className="inp-label">Seleccionar imagen</span>
                    </div>
                    <div className="inp-div">
                        <input
                            id="image"
                            type="file"
                            onBlur={formik.handleBlur}
                            onChange={(event) => {
                                formik.setFieldValue("image", event.currentTarget.files[0]);
                              }}
                        />
                    </div>
                </div>

                { formik.touched.image && formik.errors.image ? (
                    <div className="error">
                        {formik.errors.image}
                    </div>
                ) : null }                

                {errors}

                <div className="text-center">
                    <input
                        className="btn"
                        type="submit"
                        value="Crear producto"
                    />
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}