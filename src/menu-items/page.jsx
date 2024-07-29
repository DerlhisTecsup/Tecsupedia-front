// assets
import EditOffIcon from '@mui/icons-material/EditOff';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';

// icons
const icons = {
  EditOffIcon,
  AppsIcon,
  PersonIcon
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'tecsupedia',
  title: 'Tecsupedia',
  type: 'group',
  children: [
    {
      id: 'perfil',
      title: 'Perfil',
      type: 'item',
      url: '/perfil',
      icon: icons.PersonIcon
    },
    {
      id: 'areas',
      title: 'Areas',
      type: 'item',
      url: '/area',
      icon: icons.AppsIcon
    },
    {
      id: 'redactar',
      title: 'Redactar',
      type: 'item',
      url: '/edit',
      icon: icons.EditOffIcon
    }
  ]
};

export default pages;
