
import './App.css'
import { Route, createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'

import Card from './product/Card'

import RootLayout from './product/RootLayout'
import Home from './product/Home'


function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route  path='/' element={<RootLayout/>}>
    <Route index element={<Home />}/>
    <Route path='/card' element={<Card/>}/>
   </Route>
  ))
 

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
