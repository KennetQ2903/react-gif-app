import { Toast } from 'primereact/toast'
import { useCallback, useEffect, useRef } from 'react'
import './Toast.css'
export const ToastMessage = ({ severity = 'info', summary = 'Info', detail = 'Default Message', life = 3000, visibilityMsg = true, sticky = false }) => {
  const toast = useRef(null)

  const showMessage = useCallback(() => {
    toast.current.show({ severity, summary, detail, life, sticky })
  }, [severity, summary, detail, life, sticky])

  const clear = useCallback(() => {
    toast.current.clear()
  }, [])
  useEffect(() => {
    if (visibilityMsg) showMessage()
    else clear()
  }, [visibilityMsg, showMessage, clear])

  return (
    <div className='toast'>
      <Toast ref={toast} position='bottom-right' />
    </div>
  )
}
