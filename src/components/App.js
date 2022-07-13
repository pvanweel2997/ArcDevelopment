import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';

import Header from './ui/Header';
import Footer from './ui/Footer';
import theme from './ui/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import Estimate from './ui/Estimate';
import CustomSoftware from './ui/CustomSoftware';
import MobileApps from './ui/MobileApps';
import Websites from './ui/Websites';
import Revolution from './ui/Revolution';
import About from './ui/About';
import Contact from './ui/Contact';
import Services from './ui/Services';
import Fonts from './ui/Fonts';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

function App() {
  Fonts();
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
          <Route
            exact
            path="/"
            element={
              <LandingPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            exact
            path="/customsoftware"
            element={
              <CustomSoftware
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            exact
            path="/mobileapps"
            element={
              <MobileApps
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            exact
            path="/websites"
            element={
              <Websites
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            exact
            path="/revolution"
            element={
              <Revolution
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={
              <About setValue={setValue} setSelectedIndex={setSelectedIndex} />
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <Contact
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            exact
            path="/services"
            element={
              <Services
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route exact path="/estimate" element={<Estimate />} />
        </Routes>
        <LazyLoadComponent threshold={400}>
          <Footer
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            value={value}
            setValue={setValue}
          />
        </LazyLoadComponent>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
