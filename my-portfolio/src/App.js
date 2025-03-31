import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import ErrorBoundary from './ErrorBoundary';
import { MantineProvider } from '@mantine/core';



const App = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </ErrorBoundary>
  </React.StrictMode>
);


export default App;