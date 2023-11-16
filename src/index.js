import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { theme } from './theme/theme';

// const theme = responsiveFontSizes(
//   createTheme({
//     palette: {
//       primary: {
//         main: '#1976d2',
//       },
//       secondary: {
//         main: '#9c27b0',
//       },
//     },
//     typography: {
//       h4: {
//         fontSize: '1.7rem',
//         fontWeight: 600,
//       },
//       h5: {
//         fontSize: '1.5rem',
//         fontWeight: 600,
//       },
//       h6: {
//         fontSize: '1.3rem',
//         fontWeight: 600,
//       },
//       h10: {
//         fontSize: { xs: '0.5em' },
//       },
//     },
//   })
// );
//theme = theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
