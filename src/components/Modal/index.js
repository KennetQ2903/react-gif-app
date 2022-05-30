import * as ReactDOM from 'react-dom'
import { Button } from 'primereact/button'
import './Modal.css'

const Modal = ({ children, onClose }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <Button onClick={onClose} className='mt-2 btn' icon='pi pi-times' />
        {children}
      </div>
    </div>
  )
}

export default function ModalPortal ({ children, onClose }) {
  const modalRoot = document.getElementById('modal-root')
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    modalRoot
  )
}
