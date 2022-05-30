import { Link, Button } from './styles'

export default function ButtonStyled ({ children, href }) {
  return href
    ? <Link to={href}>{children}</Link>
    : <Button>{children}</Button>
}
