import { 
  Typography, 
  useTheme, 
  Grid, 
  List, 
  ListItem,  
  ListItemText, 
  Box } from '@mui/material';
import { useTranslation } from '../hooks/useTranslation'; // Usa tu hook personalizado
import aboutImg1 from '../assets/about/about03.png';
import aboutImg2 from '../assets/about/about01.png';
import aboutImg3 from '../assets/about/about02.png';

export default function About () {
    const theme = useTheme();
    const { t } = useTranslation();
    const listItems = t('about.aboutList');
    const itemsArray = listItems.split('/');
    
  return (
    <Box
      sx={{
        p: 3,
        textAlign: 'center',
        maxWidth: '80vw',
        mx: 'auto'
      }}>
      <Typography 
        variant="h2" 
        gutterBottom
        sx={{
          color: theme.palette.text.primary,
          //m: 4,
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        {t('about.header1')}
      </Typography>
      
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ 
          color: theme.palette.text.secondary,
          m: 4,
          fontFamily: 'Birthstone, cursive',
          fontSize: '3rem',
        }}
      >
        {t('about.p3body')}
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
            sx={{ 
              color: theme.palette.text.primary,
              mb: 4, 
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'justify',
              maxWidth: '80%',

            }}
          >
            {t('about.p1body')}
          </Typography>
        </Grid>
        <Grid
          borderRadius={2} 
          size={{ xs: 12, md: 6 }} 
          sx={{ 
            backgroundColor: theme.palette.custom.infoSecondary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Box
            component="img"
            alt="imagen1"
            sx={{
              height: 'auto',
              maxWidth: '50%',
              width: '50%',
              borderRadius: theme.shape.borderRadius,
            }}
            src={aboutImg1}
          />
        </Grid>  
        <Grid
          borderRadius={2} 
          size={{ xs: 12, md: 6 }} 
          sx={{ 
            backgroundColor: theme.palette.custom.infoSecondary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Box
            component="img"
            alt="imagen1"
            sx={{
              height: 'auto',
              maxWidth: '50%',
              width: '50%',
              borderRadius: theme.shape.borderRadius,
            }}
            src={aboutImg2}
          />
        </Grid>
        <Grid 
          size={{ xs: 12, md: 6 }}
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              //m: 4,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {t('about.header2')}
          </Typography>

          <Typography 
            sx={{ 
              color: theme.palette.text.primary,
              mb: 4, 
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'justify',
              maxWidth: '80%',

            }}
          >
            {t('about.p2body')}
          </Typography>
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
              color: theme.palette.text.primary, 
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            {t('about.aboutListTitle')}
          </Typography>
          
          <List>
            {itemsArray.map((item, index) => (
              <ListItem key={index}>
                <ListItemText 
                  primary={
                    <Typography 
                      sx={{
                        color: theme.palette.text.primary,
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1.1rem'
                      }}
                    >
                      {item}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          borderRadius={2} 
          size={{ xs: 12, md: 6 }} 
          sx={{ 
            backgroundColor: theme.palette.custom.infoSecondary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Box
            component="img"
            alt="imagen1"
            sx={{
              height: 'auto',
              maxWidth: '80%',
              width: '80%',
              borderRadius: theme.shape.borderRadius,
            }}
            src={aboutImg3}
          />
        </Grid>

      </Grid>

    </Box>
  );
};