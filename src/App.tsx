import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultContainer from './components/layout/DefaultContainer';
import Home from './pages/Home';
import { useThemeContext } from './context/ThemeContext';
import { CssBaseline } from '@mui/material';
import '@fontsource/birthstone'; // textos manuscrito
import '@fontsource/inter/300.css'; // body
import '@fontsource/poppins/400.css'; // headers

function App() {
  const { mode } = useThemeContext();

  return (
    <BrowserRouter>
      {/* CssBaseline resetea los estilos y aplica el tema global */}
      <CssBaseline />
      <DefaultContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Puedes añadir más rutas aquí */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </DefaultContainer>
    </BrowserRouter>
  );
}

export default App;