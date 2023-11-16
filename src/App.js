import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Container } from '@mui/material';
import { router } from './routs/RouterData/RouterData';

function App() {
  return (
    <Container
      sx={{
        m: { xs: '0', sm: '1rem auto', md: '1rem auto' },
        padding: { xs: '0', sm: '1rem', md: '1rem' },
        height: { xs: '100%', md: 'auto' },
        position: 'relative',
      }}
      elevation={0}
    >
      <RouterProvider router={router} />
    </Container>
  );
}
export default App;
