import React from 'react';
import { Box, List, ListItem, ListSubheader, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';

function UserAlbumsList({ albums }) {
  return (
    <List
      sx={{ padding: '1rem 0' }}
      subheader={
        <ListSubheader>
          <Typography
            variant="h6"
            sx={{ paddingBottom: '0.5rem', color: 'black' }}
          >
            Albums
          </Typography>
        </ListSubheader>
      }
    >
      {albums.map((album) => {
        return (
          <ListItem key={album.id}>
            <Link to={`/albums/${album.id}`}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0.5rem',
                }}
              >
                <PhotoAlbumIcon />
                <Typography variant="body1" sx={{ textDecoration: 'none' }}>
                  {album.title}
                </Typography>
              </Box>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}

export default React.memo(UserAlbumsList);
