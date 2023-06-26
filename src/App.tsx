import router from './router';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </>
  );
}

export default App;
