import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Alerts Toast
import { Toaster } from "@/components/ui/toaster"

// Home
import Home from './views/Home'
import HomeMain from './components/home/HomeMain'
import Navigation from './views/Navigation'
import Receps from './components/navigation/Receps'
import SavedReceps from './components/navigation/SavedReceps'
import Profile from './components/navigation/Profile'

// Auth
import Auth from './views/Auth'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

// Add Ingredients
import Recipes from './views/Recipes'
import Personalized from './components/recipes/Personalized'
import Categories from './components/recipes/Categories'
import Contacto from './components/contacto/Contacto'
import Detail from './views/Detail'
import { ProtectedRoute } from './components/auth/ProtectedRoutes'
import ResetPassword from './components/auth/ResetPassword'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <h1 className='text-destructive-foreground' >Error</h1>,
      element: <Home />,
      children: [
        {
          path: '/',  // home
          element: <HomeMain />
        },
        {
          path: '/contacto',
          element: <Contacto />
        },
        // {
        //   path: '/detail/:id',
        //   element: <Detail />
        // },
      ]
    },
    {
      element: <Auth />,
      children: [
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />
        },{
          path: '/reset-password',
          element: <ResetPassword />
        }
      ]
    },
    {
      // element: <ProtectedRoute />,
      // children: [
        // {
          path: '/navigation',
          element: <Navigation />,
          children: [
            {
              path: '/navigation/Profile',
              element: <Profile />
            },
            {
              path: '/navigation/Receps',
              element: <Receps />
            },
            {
              path: '/navigation/RecepsSaved',
              element: <SavedReceps />
            },
            {
              path: '/navigation/Configuration',
              element: <></>
            }
          // ]
        // }
      ]
    },
    {
      path: '/recipes',
      element: <Recipes />,
      children: [
        {
          path: 'personalized',
          element: <Personalized />
        },
        {
          path: 'categories',
          element: <Categories />
        },
        {
          path: 'detail/:id',
          element: <Detail/>
        }
      ]
    }
  ])

  return (
    <div className="font-['Lato']">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
