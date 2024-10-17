import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

const RootLayout = () => {
  return (
    <div>
        <Provider store={store}>
        <Navbar/>
  <main>
    <Outlet></Outlet>
  </main>
  </Provider>
    </div>
  )
}

export default RootLayout
