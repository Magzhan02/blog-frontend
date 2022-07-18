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
        {[...Array(5)].map(() => (
          <Grid item xs={5}>
            <Post
              id={1}
              title="One-Punch Man"
              imageUrl="https://gen.jut.su/uploads/newsthumbs/1545736844_bez-imeni-1.jpg"
              createdAt={'12 июня 2022 г.'}
              viewsCount={150}
              commentsCount={3}
              tags={['React', '#FrontEnd', 'BackEnd']}>
              <p>
                «One-Punch Man» побил все рекорды популярности в 2015 году, на полноправной основе
                став главным хитом года и заслужив признание поклонников аниме по всему миру за счёт
                головокружительной проработки боевых сцен и, разумеется, хорошего юмора. «One-Punch
                Man» побил все рекорды популярности в 2015 году, на полноправной основе став главным
                хитом года и заслужив признание поклонников аниме по всему миру за счёт
                головокружительной проработки боевых сцен и, разумеется, хорошего юмора. «One-Punch
                Man» побил все рекорды популярности в 2015 году, на полноправной основе став главным
                хитом года и заслужив признание поклонников аниме по всему миру за счёт
                головокружительной проработки боевых сцен и, разумеется, хорошего юмора. «One-Punch
                Man» побил все рекорды популярности в 2015 году, на полноправной основе став главным
                хитом года и заслужив признание поклонников аниме по всему миру за счёт
                головокружительной проработки боевых сцен и, разумеется, хорошего юмора. «One-Punch
                Man» побил все рекорды популярности в 2015 году, на полноправной основе став главным
                хитом года и заслужив признание поклонников аниме по всему миру за счёт
                головокружительной проработки боевых сцен и, разумеется, хорошего юмора.
              </p>
            </Post>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
