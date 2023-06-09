import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';

const BASE_URL = '/ai'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename={BASE_URL}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);
