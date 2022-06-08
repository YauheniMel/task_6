import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import FakerPageContainer from './pages/FakerPageContainer';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FAFAFA',
      },
      secondary: {
        main: '#F4511E',
        light: '#FAFAFA',
      },
      text: {
        secondary: '#d3d3d3',
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <FakerPageContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
