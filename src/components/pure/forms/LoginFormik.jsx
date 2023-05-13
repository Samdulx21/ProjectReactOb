import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup  from 'yup';

//* Esquema de yup 
const loginSquema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format.').required('Email is requerid.'),
        password: Yup.string().required('Password is required.')
    }
)

const LoginFormik = () => {

    //* Objeto
    const valoresIniciales = {
        email: '',
        password: '',
    }

    return (
        <div>
            <h4>Login Formik</h4>
            {/* Ejemplo uno: Valores Iniciales (Con configuarion props)  */}
            <Formik
             //**** Valor Inicial */
             initialValues={ valoresIniciales }
             
             //**** Yup valition Schema */
             validationSchema={ loginSquema }

             //**** OnSubmit evento */
             onSubmit={async (values) => {
                 await new Promise((r) => setTimeout(r, 1000));
                 alert(JSON.stringify(values, null, 2));

                 //* Sirve para que estos valores queden registrado en el navegador
                 localStorage.setItem('credentials', values)
             }}
            >
                {/* Obtener los props de formik  */}

                {/* Mas resumida */}
                {({ values, errors, touched, isSubmitting, hundleChange, hundleBlur }) => (

                    <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" type="email" placeholder="Example@email.com" />

                            {/* Validacion de errores de email */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component="div" />
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                            />

                            {/* Validacion de errores de password */}
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component="div" />
                                )
                            }

                            <button type="submit">Login</button>

                            { isSubmitting ? (<p>Login your credentials...</p>) : null }
                        </Form>
                    )
                }
                 
                
            </Formik>
        </div>
    )
}

export default LoginFormik;