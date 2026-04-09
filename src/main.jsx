import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello world!</div>,
  },
  {
    path: "home",
    element: <div>this is home</div>,
  },
  {
    path: "/footer",
    element: <div>hello footer</div>,
  },
  {
    path: 'app',
    Component: App
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
