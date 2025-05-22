import React from "react"
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from "./Components/HomePage"
import Task_1 from "./Components/Task-1"
import Task_2 from "./Components/Task-2"
import Task_3 from "./Components/Task-3"
import NotFound from "./Components/NotFound"

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound />
  },
  {
    path: '/task-1',
    element: <Task_1 />
  },
  {
    path: '/task-2',
    element: <Task_2 />
  },
  {
    path: '/task-3',
    element: <Task_3 />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
