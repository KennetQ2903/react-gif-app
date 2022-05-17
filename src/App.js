import React from 'react'
import './App.css'
import { SearchResult } from './pages/SearchResult'
import { Route } from 'wouter'
import 'primereact/resources/themes/vela-blue/theme.css'
import 'primereact/resources/primereact.min.css' // core css
import 'primeicons/primeicons.css'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import StaticContext from './context/StaticContext'

function App () {
  return (
    <StaticContext.Provider value={{ user: 'Namikaze', rol: 'Admin', auth: true }}>
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
    </StaticContext.Provider>
  )
}

export default App
