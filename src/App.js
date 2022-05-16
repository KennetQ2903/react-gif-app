import React from 'react'
import './App.css'
import { ListOfGifs } from './components/ListOfGifs'
import { Link, Route } from 'wouter'
import 'primereact/resources/themes/vela-blue/theme.css'
import 'primereact/resources/primereact.min.css' // core css
import 'primeicons/primeicons.css'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1>App</h1>
        <Link to='/gif/Nami'>Gifs de Nami</Link>
        <Link to='/gif/Nico Robin'>Gifs de Nico Robin</Link>
        <Link to='/gif/Boa Hancock'>Gifs de Boa Hancock</Link>
        <Route
          component={ListOfGifs}
          path='/gif/:keyword'
        />
      </section>
    </div>
  )
}

export default App
