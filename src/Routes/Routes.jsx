import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import CoffeeDetail from "../Pages/CoffeeDetail";
import Dashboard from "../Pages/Dashboard";
 
const routes = createBrowserRouter([
    {
      path: '/',
      element : <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element : <Home></Home>
        },
        {
          path: '/coffees',
          element : <CoffeeDetail></CoffeeDetail> 
        },
        {
          path: '/dashboard',
          element : <Dashboard></Dashboard>
        },
      ]
    }
  ])

export default routes;