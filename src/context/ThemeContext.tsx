import React, { createContext, useState, useMemo, useContext } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem('theme') as Theme | null;
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const value = useMemo(() => ({
    theme,
    toggleTheme: () => {
      setTheme(prev => {
        const next = prev === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', next);
        return next;
      });
    },
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme === 'dark' ? 'dark' : ''} style={{ minHeight: '100vh' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
