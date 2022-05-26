import { Link } from 'wouter'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { useUser } from 'hooks/useUser'
import { ToastMessage } from 'components/Toasts'

const items = [
  {
    label: 'Favoritos',
    icon: 'pi pi-heart-fill',
    color: 'red-600'
  }
]
export const Bar = () => {
  const { isLoggedIn, Logout } = useUser()

  const user = 'Nami'
  return (
    <div>
      <header>
        {
            isLoggedIn
              ? <Menubar model={items} end={<Button onClick={Logout} label='Logout' icon='pi pi-sign-out' />} />
              : <Menubar end={<Link to='/login'><Button label='Login' icon='pi pi-user' /></Link>} />
        }
        <ToastMessage visibilityMsg={isLoggedIn} severity='success' summary='Inicio de Sesion' detail={`Se ha iniciado Sesion Correctamente, Bienvenid@! ${user}`} />
      </header>
    </div>
  )
}
