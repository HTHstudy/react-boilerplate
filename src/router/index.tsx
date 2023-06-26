/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const retryLazy = (componentImport: any) =>
  lazy(async () => {
    const pageAlreadyRefreshed = JSON.parse(window.localStorage.getItem('pageRefreshed') ?? 'false');
    try {
      const component = await componentImport();
      window.localStorage.setItem('pageRefreshed', 'false');
      return component;
    } catch (error) {
      if (!pageAlreadyRefreshed) {
        window.localStorage.setItem('pageRefreshed', 'true');
        return window.location.reload();
      }
      throw error;
    }
  });

const HomePage = retryLazy(async () => await import('../pages/HomePage'));
const TodosPage = retryLazy(async () => await import('../pages/TodosPage'));
const CartPage = retryLazy(async () => await import('../pages/CartPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/todos',
    element: <TodosPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]);

export default router;
