import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import AddMovie from './pages/AddMovie'
import EditMovie from './pages/EditMovie'
import ViewMovie from './pages/ViewMovie'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'add', element: <AddMovie /> },
      { path: 'edit/:id', element: <EditMovie /> },
      { path: 'movie/:id', element: <ViewMovie /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
