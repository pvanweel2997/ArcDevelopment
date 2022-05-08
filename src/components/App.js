import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';

import Header from './ui/Header';
import Footer from './ui/Footer';
import theme from './ui/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          value={value}
          setValue={setValue}
        />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/customsoftware" element={() => <div>home</div>} />
          <Route exact path="/mobileapps" element={() => <div>home</div>} />
          <Route exact path="/websites" element={() => <div>home</div>} />
          <Route exact path="/revolution" element={() => <div>home</div>} />
          <Route exact path="/about" element={() => <div>home</div>} />
          <Route exact path="/contact" element={() => <div>home</div>} />
          <Route exact path="/estimate" element={() => <div>home</div>} />
        </Routes>
        <Footer
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          value={value}
          setValue={setValue}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
