import { ToastMessage } from 'components/Toasts'
import { ErrorMessage, Form, Formik } from 'formik'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import registerService from 'services/register'
import './Form.css'

export const Register = () => {
  const [registered, setRegistered] = useState(false)
  const validateFields = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Nombre de Usuario Obligatorio'
    }
    if (!values.password) {
      errors.password = 'Contraseña Obligatoria'
    } else if (values.password.length < 8) {
      errors.password = 'La contraseña debe tener minimo 8 caracteres'
    }

    return errors
  }
  const handleSubmit = (values, { setFieldError }) => {
    return registerService(values)
      .then(() => {
        setRegistered(true)
      })
      .catch(() => {
        setFieldError('username', 'Nombre de usuario no disponible')
      })
  }
  const initialValues = {
    username: '',
    password: ''
  }
  return (
    <>
      <h4 style={{ textAlign: 'center' }}>Registro</h4>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={handleSubmit}
      >
        {
          ({ handleChange, isSubmitting, errors, values }) => {
            return (
              <div className='form-demo'>
                <div className='flex justify-content-center'>
                  <Form className='p-fluid'>
                    <div className='field mt-5'>
                      <span className='p-input-icon-left p-float-label'>
                        <i className='pi pi-user' />
                        <InputText
                          className={errors.username && 'p-invalid'}
                          id='username'
                          name='username'
                          onChange={handleChange}
                          value={values.username}
                        />
                        <label htmlFor='username'>Nombre de Usuario</label>
                      </span>
                      <ErrorMessage className='p-error' component='small' name='username' />
                    </div>
                    <div className='field mt-5'>
                      <span className='p-input-icon-left p-float-label'>
                        <i className='pi pi-lock' />
                        <InputText
                          className={errors.password && 'p-invalid'}
                          id='password'
                          name='password'
                          onChange={handleChange}
                          type='password'
                          value={values.password}
                        />
                        <label htmlFor='password'>Contraseña</label>
                      </span>
                      <ErrorMessage className='p-error' component='small' name='password' />
                    </div>
                    <Button type='submit' disabled={isSubmitting} label='Registrarse' loading={isSubmitting} />
                  </Form>
                </div>
                {
                  registered && <ToastMessage severity='success' summary='Registro' detail='Se ha registrado correctamente!' />
                }
              </div>
            )
          }
        }
      </Formik>
    </>
  )
}
