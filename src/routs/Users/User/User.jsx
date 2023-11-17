import React from 'react';
import {
  Await,
  useLoaderData,
} from 'react-router-dom';
import {
  Api
} from '../../../utils/DataLoader.js';
import {
  Box,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from '@mui/material';
import AlbumsListView from '../../../components/AlbumsListView.jsx';

export const loader = async ({ params: { id } }) => {
  try {
    const user = await Api.getUser({ id });
    const albumsPromise = Api.getUserAlbums({ userId: user.id });

    return { user, albumsPromise };
  } catch (error) {
    console.error(error);
    throw new Response('', { status: 404 });
  }
};

function User() {
  const { user, albumsPromise } = useLoaderData();

  return (
    <>
      <List
        sx={{ my: '1rem' }}
        subheader={
          <ListSubheader>
            <Typography
              variant="h6"
              sx={{ paddingBottom: '0.5rem', color: 'black' }}
            >
              {user.name}
            </Typography>
          </ListSubheader>
        }
      >
        <ListItem>Username: {user.username}</ListItem>
        <ListItem>Email: {user.email}</ListItem>
        <ListItem>Phone: {user.phone}</ListItem>
        <ListItem>Site: {user.website}</ListItem>
      </List>

      <Await
        resolve={albumsPromise}
        errorElement={
          <Box sx={{ width: '20rem', mx: 'auto', my: '2rem' }}>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Ooops, something goes wrong!
            </Typography>
          </Box>
        }
      >
        {(albums) => {
          return <AlbumsListView albums={albums} />;
        }}
      </Await>
    </>
  );
}

export default React.memo(User);
