import { Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Acerca de Nosotros
      </Typography>
      <Typography paragraph>
        Esta es una landing page de ejemplo construida con React, TypeScript y Material UI.
        Incluye un sistema de temas claro/oscuro y navegación básica.
      </Typography>
      <Typography paragraph>
        Puedes personalizar esta página para mostrar información sobre tu empresa,
        producto o servicio.
      </Typography>
    </Box>
  );
};

export default About;