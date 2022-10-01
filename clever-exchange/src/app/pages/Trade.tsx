import React from 'react'
import Header from '../components/Header'

interface ICoins {
  coins: {
    coin: string
  }
}

function Trade ({ coins }: ICoins) {
  return (
    <React.Fragment>
      <Header />
      <h1>Trade</h1>
      <span>{coins.coin}</span>
    </React.Fragment>
  )
}

export default Trade
