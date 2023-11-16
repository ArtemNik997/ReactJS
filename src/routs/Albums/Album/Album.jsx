import React, { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';

import { Box, CircularProgress, Typography } from '@mui/material';
import { Api, LoadObject, loadPromise } from '../../../utils/DataLoader.js'; //LoadObject
import PhotosView from '../../../components/Photos/PhotosView';

export const URL = {
  photos: (id) => `https://jsonplaceholder.typicode.com/photos/${id}`,
  photosId: (id) => `https://jsonplaceholder.typicode.com/photos?albumId=${id}`,
  users: (id) => `https://jsonplaceholder.typicode.com/users/${id}`,
};

export const loader = async ({ params: { id } }) => {
  try {
    const album = await Api.getAlbum({ id });
    const userPromise = Api.getUser({ id: album.userId });
    const photosPromise = Api.getPhotos({ albumId: album.id });

    return { album, userPromise, photosPromise };
  } catch (error) {
    console.error(error);
    throw new Response('', { status: 404 });
  }
};

function Album() {
  const { album, userPromise, photosPromise } = useLoaderData();

  return (
    <>
      <Box sx={{ my: '1rem' }}>
        <Typography variant="h6">Album: {album.title}</Typography>
        <Typography variant="body1">
          Author:&nbsp;&nbsp;
          <Await
            resolve={userPromise}
            errorElement="Ooops, something goes wrong!"
          >
            {(user) => {
              return <Link to={`/users/${album.userId}`}>{user.name}</Link>;
            }}
          </Await>
        </Typography>
      </Box>

      <Suspense fallback={<CircularProgress sx={{ mx: '45%', my: '4rem' }} />}>
        <Await
          resolve={photosPromise}
          errorElement={
            <Box sx={{ width: '20rem', mx: 'auto', my: '2rem' }}>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Ooops, something goes wrong!
              </Typography>
            </Box>
          }
        >
          {(photos) => {
            return <PhotosView photos={photos} />;
          }}
        </Await>
      </Suspense>
    </>
  );
}

export default React.memo(Album);
