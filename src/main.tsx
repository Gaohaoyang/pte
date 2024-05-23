import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom'
import Error from '@/pages/Error'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyWrap = (factory: () => Promise<any>) => {
  return async () => {
    const page = await factory()
    // https://reactrouter.com/en/main/route/lazy
    return {
      Component: page.default || page.Component,
      ErrorBoundary: page.ErrorBoundary,
      loader: page.loader,
    }
  }
}

const router = createHashRouter([
  {
    path: '/',
    lazy: lazyWrap(() => import('@/pages/Layout')),
    errorElement: Error(),
  },
  {
    path: '/Wfd',
    element: <Navigate to="/Wfd/1" replace />,
  },
  {
    path: '/Wfd/:id',
    lazy: lazyWrap(() => import('@/pages/Wfd')),
  },
  {
    path: '/about',
    lazy: lazyWrap(() => import('@/pages/About')),
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
