import React from 'react';
import { Tabs, Tab, Grid } from '@mui/material';

import Post from '../components/Post';

const Home = () => {
  const [isActive, setIsActive] = React.useState(0);

  const handleChange = () => {
    if (isActive === 0) {
      setIsActive(1);
    } else {
      setIsActive(0);
    }
  };

  return (
    <>
      <Tabs
        style={{ marginBottom: 35 }}
        value={isActive}
        aria-label="basic tabs example"
        onClick={handleChange}>
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={12} style={{ marginBottom: 35 }}>
        <Grid item xs={5}>
          <Post />
        </Grid>
        <Grid item xs={5}>
          <Post />
        </Grid>
        <Grid item xs={5}>
          <Post />
        </Grid>
        <Grid item xs={5}>
          <Post />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
