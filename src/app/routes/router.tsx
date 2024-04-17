import { createHashRouter } from 'react-router-dom';
import { LayoutMain } from '../ui/layouts/LayoutMain';
// import { Guard } from './Guard';

export const router = createHashRouter([
  {
    path: '',
    Component: LayoutMain,
    children: [
      {
        path: '',
        // Component: Home
      },
      {
        path: 'dashboard',
        // element: <Guard><Dashboard /></Guard>
      }
    ]
  },
  {
    path: 'admin',
    // Component: LayoutAdmin,
    children: [
      {
        path: '',
        // Component: Home
      },
      {
        path: 'dashboard',
        // element: <Guard><Dashboard /></Guard>
      }
    ]
  }
]);