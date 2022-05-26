
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Password } from 'primereact/password'
import { classNames } from 'primereact/utils'
import './Form.css'
import { useLocation } from 'wouter'
import { useUser } from 'hooks/useUser'
import { ToastMessage } from 'components/Toasts'

export const Login = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [formData, setFormData] = useState({})
  const [, pushLocation] = useLocation()
  const { Login, isLoggedIn, isError, ErrorMSG } = useUser()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validate: (data) => {
      const errors = {}

      if (!data.username) {
        errors.username = 'Username is required.'
      }

      if (!data.password) {
        errors.password = 'Password is required.'
      }

      return errors
    },
    onSubmit: (data) => {
      setFormData(data)
      setShowMessage(true)
      formik.resetForm()
    }
  })

  useEffect(() => {
    if (isLoggedIn) pushLocation('/')
  }, [isLoggedIn, pushLocation])

  useEffect(() => {
    if (formData?.username) Login({ username: formData.username, password: formData.password })
  }, [Login, formData])

  const isFormFieldValid = (username) => !!(formik.touched[username] && formik.errors[username])
  const getFormErrorMessage = (username) => {
    return isFormFieldValid(username) && <small className='p-error'>{formik.errors[username]}</small>
  }
  useEffect(() => {
    if (isError) {
      setShowMessage(false)
    }
  }, [isError])

  return (
    <div className='form-demo'>
      <ToastMessage visibilityMsg={showMessage} severity='info' summary='Inicio de Sesion' detail='Iniciando Sesion...' />
      <ToastMessage visibilityMsg={isError} severity='error' summary='Error' detail={ErrorMSG} />

      <div className='flex justify-content-center'>
        <div>
          <h5 className='text-center'>Login</h5>
          <form onSubmit={formik.handleSubmit} className='p-fluid'>
            <div className='field'>
              <span className='p-float-label'>
                <InputText id='username' name='username' value={formik.values.username} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('username') })} />
                <label htmlFor='username' className={classNames({ 'p-error': isFormFieldValid('username') })}>Username*</label>
              </span>
              {getFormErrorMessage('name')}
            </div>
            <div className='field mt-5'>
              <span className='p-float-label'>
                <Password
                  id='password' name='password' value={formik.values.password} onChange={formik.handleChange} toggleMask
                  className={classNames({ 'p-invalid': isFormFieldValid('password') })}
                />
                <label htmlFor='password' className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
              </span>
              {getFormErrorMessage('password')}
            </div>

            <Button type='submit' label='Submit' className='mt-2' />
          </form>
        </div>
      </div>
    </div>
  )
}
