import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

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

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>Hello world!</div>,
    },
    {
      path: '/Wfd',
      element: <Navigate to="/Wfd/1" replace />,
    },
    {
      path: '/Wfd/:id',
      // element: <Demo />,
      lazy: lazyWrap(() => import('@/pages/Wfd')),
    },
  ],
  // {
  //   basename: '',
  // },
)

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
