import React from 'react'
import './App.css'
import { SearchResult } from './pages/SearchResult'
import { Route } from 'wouter'
import 'primereact/resources/themes/vela-blue/theme.css'
import 'primereact/resources/primereact.min.css' // core css
import 'primeicons/primeicons.css'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <Route component={Home} />
        <Route
          component={SearchResult}
          path='/search/:keyword'
        />
        <Route component={Detail} path='/gif/:id' />
      </section>
    </div>
  )
}

export default App
