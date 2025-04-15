import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import CoffeeDetail from "../Pages/CoffeeDetail";
import Dashboard from "../Pages/Dashboard";
import CoffeeCard from "../Components/CoffeeCard";
  
const routes = createBrowserRouter([
    {
      path: '/',
      element : <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element : <Home></Home>,
          loader: ()=>fetch('../categories.json'),
 
          children: [
            {
              path: '/',
              element: <CoffeeCard></CoffeeCard>,
              loader: ()=>fetch('../coffees.json'),
            },
            {
              path: 'card/:coffeeCategoryName',
              element: <CoffeeCard></CoffeeCard>,
              loader: ()=>fetch('../coffees.json'),
            },
          ]
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