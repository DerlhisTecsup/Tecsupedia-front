import { styled } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchWrapper = styled(Paper)(({ theme }) => ({
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: 400,
  margin: '20px auto'
}));

export default function SearchBar() {
  return (
    <SearchWrapper>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </SearchWrapper>
  );
}
