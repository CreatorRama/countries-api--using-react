import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './app';
import Contact from './components/contact';
import Home from './components/home';
import Error from './components/error';
import Countrydetails from './components/Countrydetails';
import leftarrow from './assets/left-arrow.png'; // Adjusted path for asset import
import './country.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router basename='/countries-api--using-react'>
    <Routes>
      <Route exact path="/countries-api--using-react" element={<App />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path=":country" element={<Countrydetails imageurl={leftarrow} />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </Router>
);
