import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import React from 'react';
import '@styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError(err) {
        console.log({ err });
      },
    },
    mutations: {
      onError(err) {
        console.log({ err }, '전체 포괄 오류');
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
