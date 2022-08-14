import React from 'react';
import { Tabs, Tab, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { getPosts } from '../redux/slice/posts';
import { PostsSkeleton } from '../components/Post/Skeleton';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);
  const [isActive, setIsActive] = React.useState(0);
  const isLoading = posts.status === 'loading';

  React.useEffect(() => {
    dispatch(getPosts());
  }, []);

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
        {(isLoading ? [...Array(4)] : posts.items).map((obj, i) =>
          isLoading ? (
            <Grid item xs={5} key={i}>
              <PostsSkeleton />
            </Grid>
          ) : (
            <Grid item xs={5} key={obj._id}>
              <Post
                id={obj._id}
                title={obj.title}
                imageUrl={obj.image ? `http://localhost:4444${obj.image}` : ''}
                createdAt={obj.createdAt}
                viewsCount={5}
                commentsCount={3}
                tags={obj.tags}>
                <span>{obj.text}</span>
              </Post>
            </Grid>
          ),
        )}
      </Grid>
    </>
  );
};

export default Home;
