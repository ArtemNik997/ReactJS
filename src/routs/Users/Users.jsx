import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

import { Box, List, ListItem, Typography } from '@mui/material';
import { Api } from '../../utils/DataLoader.js';

export const loader = async () => {
  try {
    const users = await Api.getUsers();
    console.log(users);
    return { users };
  } catch (error) {
    console.error(error);
    throw new Response('', { status: 404 });
  }
};

function Users() {
  const { users } = useLoaderData();
  console.log(users);

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <Link to={`/users/${user.id}`} style={{ textDecoration: '' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5rem',
              }}
            >
              <PersonIcon color="black" />
              <Typography variant="body1" sx={{ textDecoration: 'none' }}>
                {user.name}
              </Typography>
            </Box>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default React.memo(Users);
