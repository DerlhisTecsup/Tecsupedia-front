import React from 'react';
import { Box, TextField, Avatar, Typography, Grid } from '@mui/material';

const Perfil_docente = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: '#d3d3d3', borderRadius: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar 
            alt="Usuario" 
            src="/path-to-your-image.png" 
            sx={{ width: 100, height: 100 }} 
          />
        </Grid>
        <Grid item xs>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField 
              label="USUARIO" 
              variant="outlined" 
              fullWidth 
            />
            <TextField 
              label="ESPECIALIDAD" 
              variant="outlined" 
              fullWidth 
            />
            <TextField 
              label="CODIGO DE DOCENTE" 
              variant="outlined" 
              fullWidth 
            />
            <TextField 
              label="AREA" 
              variant="outlined" 
              fullWidth 
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Perfil_docente;
