import React,{ useState } from 'react';
import {Home} from './pages/Home';
import {Cart} from './Pages/Cart';
import { Favourites } from './Pages/Favourites'; 
import {Order} from './Pages/Order';
import './App.css'
import Sidebar from './components/Sidebar';
import {createBrowserRouter,RouterProvider,createRoutesFromElements, Outlet,Route}from 'react-router-dom';

function App() {
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/favs' element={<Favourites/>}/>
    <Route path='/orders' element={<Order/>}/>
  </Route>
  )
)
  return (
   <div className='App'>
    <RouterProvider router={router }/>
   </div>
  )
}

export default App
const Root =()=>{
  return (
    <>
    <div><Sidebar /></div>
    <div><Outlet /></div>
    </>
  )
}
