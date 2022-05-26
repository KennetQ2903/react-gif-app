import React from 'react'
import { SearchResult } from './pages/SearchResult'
import { Link, Route, Switch } from 'wouter'
import { UserContextProvider } from 'context/UserContext'
import { GifContextProvider } from 'context/GifContext'

import { Home } from 'pages/Home'
import { Detail } from 'pages/Detail'
import { Bar } from 'components/Bar/Bar'
import { Login } from 'pages/Login'
import { NotFound } from 'pages/404'

import 'primereact/resources/themes/vela-blue/theme.css'
import 'primereact/resources/primereact.min.css' // core css
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './App.css'

function App () {
  return (
    <UserContextProvider>
      <div className='App'>
        <Bar />
        <section className='App-content'>
          <Link className='m-2 App-logo' to='/'>
            <span className='App-title'>nmkz</span>
            <img alt='nmkzGIF' src='gif.png' />
          </Link>
          <GifContextProvider>
            <Switch>
              <Route component={Home} path='/' />
              <Route
                component={SearchResult}
                path='/search/:keyword/:rating?'
              />
              <Route component={Detail} path='/gif/:id' />
              <Route component={Login} path='/login' />
              <Route component={NotFound} path='/:rest*' />
            </Switch>
          </GifContextProvider>
        </section>
      </div>
    </UserContextProvider>
  )
}

export default App
