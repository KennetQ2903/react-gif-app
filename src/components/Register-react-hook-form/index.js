import { ToastMessage } from 'components/Toasts'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import registerService from 'services/register'

import './Form.css'

export const RegisterHook = () => {
  const [registered, setRegistered] = useState(false)
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = values => {
    return registerService(values)
      .then(() => {
        setRegistered(true)
      })
  }

  useEffect(() => {
    if (errors.username) {
      console.log(errors)
    }
  }, [errors])

  return (
    <>
      <h4 style={{ textAlign: 'center' }}>Registro react-hook-form</h4>
      <div className='form-demo'>
        <div className='flex justify-content-center'>
          <form className='p-fluid' onSubmit={handleSubmit(onSubmit)}>
            <div className='field mt-5'>
              <span className='p-input-icon-left p-float-label'>
                <i className='pi pi-user' />
                <InputText
                  className={errors.username && 'p-invalid'}
                  id='username'
                  ref={register('username', {
                    required: true,
                    minLength: 5
                  })}
                  name='username'
                />
                <label htmlFor='username'>Nombre de Usuario</label>
              </span>
              {errors.username && <small className='p-error'>{errors.username}</small>}
            </div>
            <div className='field mt-5'>
              <span className='p-input-icon-left p-float-label'>
                <i className='pi pi-lock' />
                <InputText
                  className={errors.password && 'p-invalid'}
                  id='password'
                  {...register('password')}
                  name='password'
                  type='password'
                />
                <label htmlFor='password'>Contraseña</label>
              </span>
              {errors.password && <small className='p-error'>{errors.password}</small>}
            </div>
            <Button type='submit' disabled={isSubmitting} label='Registrarse' loading={isSubmitting} />
          </form>
        </div>
        {
            registered && <ToastMessage severity='success' summary='Registro' detail='Se ha registrado correctamente!' />
        }
      </div>
    </>
  )
}
