import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages/Home'
import Trade from './app/pages/Trade'
import Login from './app/pages/Login'
import Markets from './app/pages/Markets'
import Register from './app/pages/Register'
import Collections from './app/pages/Collections'
import './App.css'

const coins = { coin: 'KLV-USDT' }

function App () {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/pt' element={<Home />} />
        <Route path='/pt/markets' element={<Markets />} />
        <Route
          path={`/pt/trade/${coins.coin}`}
          element={<Trade coins={coins} />}
        />
        <Route path='/pt/nft/collections' element={<Collections />} />
        <Route path='/pt/login' element={<Login />} />
        <Route path='/pt/login/registation' element={<Register />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
