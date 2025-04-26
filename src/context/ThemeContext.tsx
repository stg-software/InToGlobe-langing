import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

type ThemeContextType = {
  mode: PaletteMode;
  toggleColorMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleColorMode: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          // Paleta para modo claro
          ...(mode === 'light'
            ? {
                primary: { main: '#6c007f', contrastText: '#ffffff' }, //morado
                secondary: { main: '#7d1300', contrastText: '#ffffff' }, //Rojo quemado
                error: { main: '#b94a03' }, // Naranja
                warning: { main: '#e8d5b5' }, // Beige
                info: { main: '#9baccf' }, // Azul más claro
                success: { main: '#807381' }, // Gris
                background: { default: '#f5f5f5', paper: '#ffffff' }, // claro -- claro 
                text: { primary: '#2d2d2d', secondary: '#6c007f' }, // Negro -- Morado
              }
            : // Paleta para modo oscuro
              {
                primary: { main: '#9baccf', contrastText: '#000000' },
                secondary: { main: '#e8d5b5', contrastText: '#000000' },
                error: { main: '#ff7043' }, // Naranja más claro
                warning: { main: '#ffb74d' }, // Versión clara del beige
                info: { main: '#64b5f6' }, // Azul más vibrante
                success: { main: '#81c784' }, // Verde suave
                background: { default: '#121212', paper: '#1e1e1e' },
                text: { primary: '#ffffff', secondary: '#9baccf' },
              }),
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};