import { 
  Box, 
  Typography, 
  useTheme, 
  Grid, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText } from '@mui/material';
import { useTranslation } from '../hooks/useTranslation'; // Usa tu hook personalizado
import homeImg1 from '../assets/home/home_img_1.png';
import homeImg2 from '../assets/home/home_img_2.png';
import { CheckCircle } from '@mui/icons-material';
import LaptopIcon from '@mui/icons-material/Laptop';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

export default function Home() {
  const theme = useTheme();
  const { t } = useTranslation();
  const listItems = t('home.listItems'); 
  const itemsArray = listItems.split('/');

  console.log('t(home.listItems):', listItems);
  console.log('itemsArray:', itemsArray);
  
  return (
    <Box sx={{ 
      p: 3,
      textAlign: 'center',
      maxWidth: '80vw',
      mx: 'auto'
    }}>
      <Typography 
        variant="h2" 
        gutterBottom
        color="text.primary"
        sx={{ 
          mb: 4,
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        {t('home.header')}
      </Typography>
      
      <Typography 
        variant="h4" 
        gutterBottom
        color="text.primary"
        sx={{ 
          mb: 4,
          fontFamily: 'Birthstone, cursive',
        }}
      >
        {t('home.title')}
      </Typography>

      <Grid container spacing={2}>
        <Grid 
          size={{ xs: 12, md: 6 }}
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography 
            color="text.secondary"
            sx={{ 
              mb: 4, 
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'justify',
              maxWidth: '80%',

            }}
          >
            {t('home.p1Body')}
          </Typography>
        </Grid>
        <Grid
          borderRadius={2} 
          size={{ xs: 12, md: 6 }} 
          backgroundColor={theme.palette.info.main}>
          <Box
            component="img"
            alt="imagen1"
            sx={{
              height: 'auto',
              maxWidth: '50%',
              width: '50%',
              borderRadius: theme.shape.borderRadius,
            }}
            src={homeImg1}
          />
        </Grid>

        <Grid
          borderRadius={2}
          size={{ xs: 12, md: 6 }}
          backgroundColor={theme.palette.info.main}
        >
          <Box
            component="img"
            alt="imagen2"
            sx={{
              height: 'auto',
              maxWidth: '75%',
              width: '75%',
              borderRadius: theme.shape.borderRadius,
            }}
            src={homeImg2}
          />
        </Grid>

        <Grid 
          size={{ xs: 12, md: 6 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'left'
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 2, 
              color: 'primary.main', 
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            {t('home.listTitle')}
          </Typography>
          
          <List>
            {itemsArray.map((item, index) => {
              // Función para determinar el ícono según el contenido
              const getItemIcon = (itemText: string) => {
                const lowerText = itemText.toLowerCase();
                
                if (lowerText.includes('landing')) {
                  return <LaptopIcon sx={{ color: theme.palette.primary.main }} />;
                }
                if (lowerText.includes('app')) {
                  return <PhoneAndroidIcon sx={{ color: theme.palette.primary.main }} />;
                }
                if (lowerText.includes('ia') || lowerText.includes('ai')) {
                  return <PsychologyOutlinedIcon sx={{ color: theme.palette.primary.main }} />;
                }
                // Ícono por defecto (puedes elegir cuál mostrar por defecto)
                return <CheckCircle sx={{ color: theme.palette.primary.main }} />;
              };

              return (
                <ListItem 
                  key={index} 
                  sx={{ 
                    pl: 0,
                  }}>
                  <ListItemIcon>
                    {getItemIcon(item)}
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography 
                        sx={{
                          color: theme.palette.primary.main,
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '1.1rem'
                        }}
                      >
                        {item}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>

        <Grid 
          size={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} 
        >
          <Typography 
            variant="h4" 
            gutterBottom
            color="text.primary"
            sx={{ 
              mb: 4,
              mt: 4,
              fontFamily: 'Birthstone, cursive',
            }}
          >
            {t('home.p2Body')}
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
}