import { ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';
import Header from './Header';
// import Footer from './Footer';

interface DefaultContainerProps {
  children: ReactNode;
}

export default function DefaultContainer({ children }: DefaultContainerProps) {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: theme.palette.background.default
      }}
    >
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      {/* <Footer /> */}
    </Box>
  );
}