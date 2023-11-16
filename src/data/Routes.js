import ErrorPage from '../routs/ErrorPage/ErrorPage';
import Layout from '../routs/Layout/Layout';
import Albums, { loader as albumsLoader } from '../../routs/Albums/Albums';
import Album, { loader as albumLoader } from '../../routs/Albums/Album/Album';
import Users, { loader as usersLoader } from '../../routs/Users/Users';
import User, { loader as userLoader } from '../../routs/Users/User/User';
import { createBrowserRouter } from 'react-router-dom';

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
