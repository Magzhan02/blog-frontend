import React from 'react';
import { Tabs, Tab } from '@mui/material';

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
        style={{ marginBottom: 15 }}
        value={isActive}
        aria-label="basic tabs example"
        onClick={handleChange}>
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
    </>
  );
};

export default Home;
