import React from 'react'
import './App.css'
import { SearchResult } from './pages/SearchResult'
import { Link, Route } from 'wouter'
import 'primereact/resources/themes/vela-blue/theme.css'
import 'primereact/resources/primereact.min.css' // core css
import 'primeicons/primeicons.css'
import { Home } from 'pages/Home'
import { Detail } from 'pages/Detail'
import StaticContext from 'context/StaticContext'
import { GifContextProvider } from 'context/GifContext'
import 'primeflex/primeflex.css'

function App () {
  return (
    <StaticContext.Provider value={{ user: 'Namikaze', rol: 'Admin', auth: true }}>
      <div className='App'>
        <section className='App-content'>
          <GifContextProvider>
            <Link to='/'><h1 className='App-title'>nmkzGIFS</h1></Link>
            <Route component={Home} />
            <Route
              component={SearchResult}
              path='/search/:keyword/:rating?'
            />
            <Route component={Detail} path='/gif/:id' />
            <Route component={() => <h1>Parece que este GIF no existe</h1>} path='/404' />
          </GifContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

export default App
