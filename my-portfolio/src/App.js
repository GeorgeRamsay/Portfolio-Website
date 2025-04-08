import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import ErrorBoundary from './ErrorBoundary';
import { MantineProvider } from '@mantine/core';



const App = () => {
  useEffect(() => {
    const setCustomCursor = () => {
      document.body.style.cursor = "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 24 24\"><path fill=\"%232D2D2D\" stroke=\"%23CF9FFF\" stroke-width=\"1.5\" d=\"M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z\"></path></svg>'), auto";
    };

    setCustomCursor();

    // Reapply the custom cursor on page navigation
    window.addEventListener('popstate', setCustomCursor);

    return () => {
      window.removeEventListener('popstate', setCustomCursor);
    };
  }, []);

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <MantineProvider>
          <RouterProvider router={router} />
        </MantineProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default App;