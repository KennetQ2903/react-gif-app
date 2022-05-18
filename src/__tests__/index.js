import { fireEvent, render, screen } from '@testing-library/react'
import App from 'App'

test('home works as expected', async () => {

})

test('Search works as expected', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, { target: { value: 'Nami' } })
  fireEvent.click(button)
  const title = await screen.findByText(/Busqueda "Nami"/i)
  expect(title).toBeVisible()
})
