import { 
  Typography, 
  Box, 
  useTheme, 
  AppBar, 
  Tab, 
  Tabs } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function About() {
  const theme = useTheme();
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ 
        //p: 3,
        textAlign: 'center',
        maxWidth: '100vw',
        mx: 'auto'
      }}>
      <AppBar 
        position="static"
        sx={{
          backgroundColor: theme.palette.error.main,
          boxShadow: 'none',
        }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label={t('services.webDev')} {...a11yProps(0)} />
          <Tab label={t('services.mobileApps')} {...a11yProps(0)} />
          <Tab label={t('services.aiSolutions')} {...a11yProps(0)} />
        </Tabs>
      </AppBar>
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
          { t('services.header') }
        </Typography>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography 
            sx={{ 
              color: theme.palette.text.primary,
              mb: 4, 
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',

            }}
          >
            {t('services.wdBody')}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography 
            sx={{ 
              color: theme.palette.text.primary,
              mb: 4, 
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',

            }}
          >
            {t('services.maBody')}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Typography 
            sx={{ 
              color: theme.palette.text.primary,
              mb: 4, 
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'center',
            }}
          >
            {t('services.aiBody')}
          </Typography>
        </TabPanel>
      </Box>
      
    </Box>
  );
};
