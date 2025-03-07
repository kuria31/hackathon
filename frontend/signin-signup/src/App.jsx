import './App.css'
import Signup from './signup/Signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './signup/Login';
import Homepage from './pages/Homepage';
import ResetPassword from './signup/ResetPassword';

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
    },
    {
      path: "/resetPassword",
      element: <ResetPassword />
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
