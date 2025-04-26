import { Box, Typography, useTheme } from '@mui/material';

export default function Footer() {
  const theme = useTheme();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto', 
        backgroundColor: theme.palette.primary.main 
      }}
    >
      <Typography variant="body1" color="text.primary" textAlign="center">
        © {new Date().getFullYear()} Mi Empresa - Todos los derechos reservados
      </Typography>
    </Box>
  );
}