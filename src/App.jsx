import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header/Header';
import ChatBox from './components/ChatBox/ChatBox';
import Footer from './components/Footer/Footer';
import { ChatProvider } from './context/ChatContext';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3799',
    },
    secondary: {
      main: '#4a69bd',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatProvider>
        <div className="app">
          <Header />
          <main className="main-content">
            <ChatBox />
          </main>
          <Footer />
        </div>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App; 