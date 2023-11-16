import { createBrowserRouter } from 'react-router-dom';
import Users, { loader as usersLoader } from '../Users/Users';
import User, { loader as userLoader } from '../Users/User/User';
import Albums, { loader as albumsLoader } from '../Albums/Albums';
import Album, { loader as albumLoader } from '../Albums/Album/Album';
import Layout from '../Layout/Layout';
import ErrorPage from '../ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        loader: usersLoader,
        element: <Users />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/users/:id',
        loader: userLoader,
        element: <User />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/albums',
        loader: albumsLoader,
        element: <Albums />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/albums/:id',
        loader: albumLoader,
        element: <Album />,
        errorElement: <ErrorPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
