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
      url: '/areas',
      icon: icons.AppsIcon
    },
    {
      id: 'redactar',
      title: 'Redactar',
      type: 'item',
      url: '/edit',
      icon: icons.EditOffIcon
    },
  


// ==============================|| MENU ITEMS - EXTRA PAGES - Docente ||============================== //
{
  id: 'areas_docente',
  title: 'Areas',
  type: 'item',
  url: '/areas_docente',
  icon: icons.AppsIcon
},
{
  id: 'perfil_docente',
  title: 'Perfil',
  type: 'item',
  url: '/perfil_docente',
  icon: icons.AppsIcon
},
{
  id: 'glosario',
  title: 'Glosario',
  type: 'item',
  url: '/glosario',
  icon: icons.AppsIcon
}
]
};
export default pages;
