import { Link, useRoute } from 'wouter'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { useUser } from 'hooks/useUser'
import { ToastMessage } from 'components/Toasts'
import './Bar.css'
const items = [
  {
    label: 'Favoritos',
    icon: 'pi pi-heart-fill',
    color: 'red-600'
  }
]
export const Bar = () => {
  const { isLoggedIn, Logout } = useUser()
  const [match] = useRoute('/login')
  const [matchRegister] = useRoute('/register')

  const renderLoginButtons = ({ isLoggedIn }) => {
    return isLoggedIn
      ? <Menubar model={items} end={<Button onClick={Logout} label='Cerrar Sesion' icon='pi pi-sign-out' />} />
      : <Menubar end={
        <>
          <Link to='/login'><Button style={{ margin: '0px 12px' }} label='Iniciar Sesion' icon='pi pi-user' /></Link>
          <Link to='/register'><Button style={{ margin: '0px 12px' }} label='Registrarse' icon='pi pi-user-plus' /></Link>
        </>
        }
        />
  }

  const content = match || matchRegister
    ? <Menubar end={<Link to='/'><Button label='Home' icon='pi pi-arrow-left' /></Link>} />
    : renderLoginButtons({ isLoggedIn })

  const user = 'Nami'
  return (
    <div>
      <header>
        {
          content
        }
        <ToastMessage visibilityMsg={isLoggedIn} severity='success' summary='Inicio de Sesion' detail={`Se ha iniciado Sesion Correctamente, Bienvenid@! ${user}`} />
      </header>
    </div>
  )
}
