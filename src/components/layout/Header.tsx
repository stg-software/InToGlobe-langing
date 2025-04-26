import { AppBar, Toolbar, IconButton, useTheme, Box, Popper, Grow, Paper, ClickAwayListener, MenuItem, MenuList } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../../context/ThemeContext';
import logo from '../../assets/logo2.svg';
import { useTranslation } from '../../hooks/useTranslation'; // Usa tu hook personalizado
import React from 'react';

//import { useTranslation } from 'react-i18next';


export default function Header() {
  const { t, changeLanguage } = useTranslation();
  const theme = useTheme();
  const { toggleColorMode } = useThemeContext();
  const [open, setOpen] = React.useState(false);
  const langMenue = React.useRef(null);
  //const { t, i18n } = useTranslation();
  
  const langMenuToggler = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const langMenueClose = (event, lang: string | null=null) => {
    if (langMenue.current && langMenue.current.contains(event.target)) {
      return;
    }
    if (lang) {
      changeLanguage(lang);
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <AppBar 
      position="static"
      sx={{
        height: 80,
        width: '95%',
        borderRadius: 2,
        margin: 2,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 1,
        boxShadow: theme.shadows[4],
        transition: 'all 0.3s ease',
        // Elige una de estas opciones de fondo:
        backgroundColor: 'background.secondary', // Fondo claro
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}>
        <Box 
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            backgroundColor: '#e8d5b5', // Usando el color del tema
            height: 40,
            borderRadius: 2,
            pl: 1,
            pr: 1,
            // filter: theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'none'
          }}
        />

        <Box>
          <IconButton 
            color="inherit" 
            ref={langMenue}
            id="language-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={langMenuToggler}>

            <LanguageIcon />
          </IconButton>
          <Popper
            open={open}
            anchorEl={langMenue.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={langMenueClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem 
                        onClick={(event) => langMenueClose(event, 'es')}
                      >
                        Español
                      </MenuItem>
                      <MenuItem 
                        onClick={(event) => langMenueClose(event, 'en')}
                      >
                        English
                      </MenuItem>
                      <MenuItem 
                        onClick={(event) => langMenueClose(event,'fr')}
                      >
                        Français
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <IconButton onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
}