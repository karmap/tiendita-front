import Link from 'next/link'
import HeaderSimple from '../components/header-simple';
import { useFormik } from "formik";
import * as Yup from "yup";

export default function IndexPage() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('El email no es válido').required('El Email es obligatorio'),
            password:
                Yup.string()
                .min(6, 'La contraseña debe tener al menos 6 caracteres')
                .required('La contraseña es obligatorio'),
        }),
        onSubmit: valores => {
            console.log('env');
            console.log(valores);
        }
    })

  return (
    <div className="sm:container sm:mx-auto sm:w-80">
      
      <HeaderSimple />
      
      <div className="form-container">

        <div className="w-full">
        <nav>
            <ul className="text-center flex space-x-2">
            <Link href="/registro">
            <li className="flex-1 cursor-pointer">
                <h2 className="link">Crear Cuenta</h2>
            </li>
            </Link>
            <Link href="/iniciar-sesion">
            <li className="flex-1">
                <h2 className="link border-b-4 border-gray-400">Iniciar Sesión</h2>
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
            
            <div className="text-center">
                <input
                    className="btn"
                    type="submit"
                    value="Ingresar"
                />
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}
