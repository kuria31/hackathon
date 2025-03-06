import { useState } from 'react'
import './App.css'
import Signup from './signup/Signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './signup/login';
import Homepage from './pages/Homepage';

function App() {
  const route = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/homepage",
      element: <Homepage />
    }
  ]);
  return (
    <>
      <div className="App">
        <RouterProvider router={route} />
      </div>
    </>
  )
}

export default App
