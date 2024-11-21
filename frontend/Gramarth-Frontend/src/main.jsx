// import { StrictMode } from 'react'
import './index.css'; 
import About from './components/About/About.jsx';
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layourt.jsx'
import Home from './components/Home/Home.jsx';
import Sell from './components/Sell/Sell.jsx';
import Help from './components/Help/Help.jsx';
import Message from './components/Message/Message.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='about' element= {<About/>}/>
      <Route path='sell' element= {<Sell/>}/>
      <Route path='help' element= {<Help/>}/>
      <Route path='message' element= {<Message/>}/>
      <Route path='message' element= {<Message/>}/>
      <Route path='signup' element= {<Signup/>}/>
      <Route path='login' element= {<Login/>}/>
      <Route path='' element= {<Home/>}/>

       </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
 
)
