import { Typography, Box, useTheme, Alert, Button, Stack, TextField, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const theme = useTheme();
  const { t } = useTranslation();

  const listItems = t('contact.contactList'); 
  const itemsArray = listItems.split('/');

  
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
    services: string[];
  }>({
    name: '',
    email: '',
    message: '',
    services: []
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleServiceChange = (event: React.ChangeEvent<{ value: unknown }> | any) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      services: typeof value === 'string' ? value.split(',') : value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message, services } = formData;

    if (!name || !email || !message || services.length === 0) {
      setError(t('contact.errorMessage'));
      return;
    }

    // Aquí puedes enviar los datos a un backend o servicio externo
    console.log('Datos enviados:', formData);

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
      services: []
    });
  };

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
        {t('contact.header')}
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
        {t('contact.p1body')}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 500, mx: 'auto', mt: 4, p: 2 }}
      >
        <Stack spacing={2}>
          {submitted && (
            <Alert 
              sx={{ 
                textAlign:'center',       
                backgroundColor: theme.palette.warning.main, // Color de fondo personalizado
                color: theme.palette.text.primary, // Color del texto
              }}>
                {t('contact.successMessage')}
            </Alert>
          )}

          {error && (
            <Alert severity="error">{error}</Alert>
          )}

          <TextField
            label={t('contact.name')}
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            sx={{
              "& .MuiInputBase-input": {
                color: theme.palette.text.primary, // Color del texto ingresado
              },
              "& .MuiInputBase-input::placeholder": {
                color: theme.palette.text.primary, // Color del placeholder
                opacity: 1, // Por defecto MUI usa opacidad 0.5, lo forzamos a 1
              },
              "& .MuiInputLabel-root": {
                color: theme.palette.text.primary, // Color del label
              },
              mb: 4, 
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',
            }}
          />
          <TextField
            label={t('contact.email')}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            sx={{
              "& .MuiInputBase-input": {
                color: theme.palette.text.primary, // Color del texto ingresado
              },
              "& .MuiInputBase-input::placeholder": {
                color: theme.palette.text.primary, // Color del placeholder
                opacity: 1, // Por defecto MUI usa opacidad 0.5, lo forzamos a 1
              },
              "& .MuiInputLabel-root": {
                color: theme.palette.text.primary, // Color del label
              },
              mb: 4, 
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',
            }}
          />

          <Typography 
            sx={{ 
              color: theme.palette.text.primary,
              mb: 4, 
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',
            }}
          >
            {t('contact.listTitle')}
          </Typography>

          <FormControl fullWidth>
            <Select
              labelId="service-label"
              multiple
              name="services"
              value={formData.services}
              onChange={handleServiceChange}
              renderValue={(selected) => selected.join(', ')}
            >
              {itemsArray.map((item) => (
                <MenuItem key={item} value={item}>
                  <Checkbox checked={formData.services.includes(item)} />
                  <ListItemText 
                    primary={item} 
                    sx={{ 
                      color: theme.palette.text.primary,
                      mb: 4, 
                      fontSize: '1.1rem',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label={t('contact.message')}
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            fullWidth
            sx={{
              "& .MuiInputBase-input": {
                color: theme.palette.text.primary, // Color del texto ingresado
              },
              "& .MuiInputBase-input::placeholder": {
                color: theme.palette.text.primary, // Color del placeholder
                opacity: 1, // Por defecto MUI usa opacidad 0.5, lo forzamos a 1
              },
              "& .MuiInputLabel-root": {
                color: theme.palette.text.primary, // Color del label
              },
              mb: 4, 
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            {t('contact.submit')}
          </Button>
        </Stack>
      </Box>

    </Box>
  );
};
