import { render, screen } from '@testing-library/react'
import App from './App'

test('renders without crashing', () => {
  render(<App />)
  const linkElement = screen.getByText(/Ultimas Busquedas/i)
  expect(linkElement).toBeInTheDocument()
})
