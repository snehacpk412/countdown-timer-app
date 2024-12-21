
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// // import '@shopify/polaris/dist/styles.css';

// ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom/client'; // Important for React 18
import App from './App';
// import '@shopify/polaris/dist/styles.css';
import { AppProvider } from '@shopify/polaris';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Create a custom theme (optional)
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Example color for primary
    },
    secondary: {
      main: '#dc004e', // Example color for secondary
    },
  },
});

// Create i18n context (optional, for localization)
const i18n = {
  en: {
    Polaris: {
      TextField: {
        placeholder: 'Enter text',  // Example placeholder translation
      },
    },
  },
};

// Use ReactDOM.createRoot() for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <AppProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </AppProvider>
);
