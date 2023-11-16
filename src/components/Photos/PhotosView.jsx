import { Box, Grid, ImageList, Typography } from '@mui/material';

import React from 'react';
import PhotoView from './PhotoView';

function PhotosView({ photos }) {
  if (!photos.length) {
    <Box sx={{ width: '20rem', m: 'auto' }}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        Album is empty
      </Typography>
    </Box>;
  }

  return (
    <Grid
      container
      spacing={{ xs: '0.1rem', sm: '0.3rem', md: '0.5rem' }}
      columns={12}
      sx={{ marginY: '1rem' }}
    >
      {photos.map((photo) => {
        return <PhotoView photo={photo} key={photo.id} />;
      })}
    </Grid>
  );
}

export default React.memo(PhotosView);
