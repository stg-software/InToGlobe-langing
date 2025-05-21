import { Box, Typography, useTheme, Button } from '@mui/material';
import { useTranslation } from '../hooks/useTranslation'; // Usa tu hook personalizado

export default function Home() {
  const theme = useTheme();
  const { t } = useTranslation();
  
  return (
    <Box sx={{ 
      p: 3,
      textAlign: 'center',
      maxWidth: '90vw',
      mx: 'auto'
    }}>
      <Typography 
        variant="h2" 
        gutterBottom
        color="text.primary"
        sx={{ mb: 4 }}
      >
        {t('home.header')}
      </Typography>
      
      <Typography 
        variant="h5" 
        gutterBottom
        color="text.primary"
        sx={{ mb: 4 }}
      >
        {t('home.title')}
      </Typography>

      <Typography 
        color="text.secondary"
        sx={{ mb: 4, fontSize: '1.1rem' }}
      >
        {t('home.p1Body')}
      </Typography>

      
      
    </Box>
  );
}