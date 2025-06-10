import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultContainer from './components/layout/DefaultContainer';
import Home from './pages/Home';
import Nosotros from './pages/About';
import Servicios from './pages/Services';
import Contacto from './pages/Contact';
import { useThemeContext } from './context/ThemeContext';
import { CssBaseline } from '@mui/material';
import '@fontsource/birthstone/400.css';
import '@fontsource/inter/300.css'; // body
import '@fontsource/poppins/400.css'; // headers

function App() {
  useThemeContext();

  return (
    <BrowserRouter>
      {/* CssBaseline resetea los estilos y aplica el tema global */}
      <CssBaseline />
      <DefaultContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </DefaultContainer>
    </BrowserRouter>
  );
}

export default App;