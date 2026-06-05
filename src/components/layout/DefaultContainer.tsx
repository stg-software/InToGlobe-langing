import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import Header from './Header';

interface DefaultContainerProps {
  children: ReactNode;
}

export default function DefaultContainer({ children }: DefaultContainerProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
    </Box>
  );
}
