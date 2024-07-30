import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';

export default function TecsupediaHeader() {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tecsupedia
        </Typography>
        <Button color="inherit">Iniciar Sesion</Button>
        <Button color="inherit">Registrarse</Button>
        <IconButton color="inherit">
          <LanguageIcon />
        </IconButton>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
