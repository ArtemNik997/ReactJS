import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
  Paper,
  Typography,
} from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import { Api, LoadObject } from '../../utils/DataLoader.js';

export const loader = async () => {
  try {
    // const albums = await LoadObject(
    //   'https://jsonplaceholder.typicode.com/albums'
    // );
    const albums = await Api.getAlbums();

    return { albums };
  } catch (error) {
    throw new Response('', { status: 404 });
  }
};

function Albums() {
  const { albums } = useLoaderData();

  return (
    <List sx={{ padding: '1rem 0' }}>
      {albums.length ? (
        albums.map((album) => {
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
                  <Typography variant="body1">{album.title}</Typography>
                </Box>
              </Link>
            </ListItem>
          );
        })
      ) : (
        <Box sx={{ width: '20rem', mx: 'auto', my: '2rem' }}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Album is empty
          </Typography>
        </Box>
      )}
    </List>
  );
}
export default Albums;

/*
Old style

export const loader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');

  if (!response.ok) {
    console.log(response.status);
    throw new Response({
      status: response.status,
      statusText: 'Not found',
    });
  }

  const albums = await response.json();
  return { albums };
};
*/
