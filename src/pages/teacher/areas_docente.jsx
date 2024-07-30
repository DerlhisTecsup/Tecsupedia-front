import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Areas_docente = () => {
  const areas = [
    'Extracción de minerales, la explotación y la gestión de minas.',
    'Estudio de la geología de yacimientos.',
    'Procesos de mecánica automotriz.',
    'Procesamiento de minerales.',
    'Construcción de infraestructuras.',
    'Riesgos y seguridad.',
    'Procesos químicos.'
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: '#d3d3d3', borderRadius: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Avatar 
            alt="Imagen"
            src="/tec123.png" 
            variant="square"
            sx={{ width: '100%', height: 'auto', marginBottom: 2 }} 
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <List>
            {areas.map((area, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <PlayArrowIcon />
                </ListItemIcon>
                <ListItemText primary={area} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Areas_docente;
