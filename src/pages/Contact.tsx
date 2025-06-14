import { Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{ 
        p: 3,
        textAlign: 'center',
        maxWidth: '80vw',
        mx: 'auto'
      }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contacto
      </Typography>
    </Box>
  );
};

export default About;