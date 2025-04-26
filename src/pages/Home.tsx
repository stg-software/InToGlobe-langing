import { Box, Typography, useTheme, Button, ButtonGroup } from '@mui/material';
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
        component="h1" 
        gutterBottom
        color="text.primary"
        sx={{ mb: 4 }}
      >
        {t('home.header')}
      </Typography>
      
      <Typography 
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, fontSize: '1.1rem' }}
      >
        {t('home.body')}
      </Typography>
      
      <Button 
        variant="contained" 
        color="primary"
        size="large"
        sx={{
          px: 4,
          py: 2,
          fontSize: '1.1rem',
          borderRadius: 2
        }}
      >
        {t('home.ctaButton')}
      </Button>
    </Box>
  );
}