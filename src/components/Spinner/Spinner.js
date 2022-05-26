
import { ProgressSpinner } from 'primereact/progressspinner'
import './Spinner.css'
export const Spinner = () => {
  return (
    <div>
      <div className='container'>
        <ProgressSpinner style={{ width: '100px', height: '100px' }} strokeWidth='5' animationDuration='.5s' />
      </div>
    </div>
  )
}
