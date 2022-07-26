import React from 'react';
import Post from '../components/Post';

import { useParams } from 'react-router-dom';
import axios from '../axios';

const FullPost = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((resp) => {
        setPost(resp.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />;
  }
  console.log(post);

  return (
    <div>
      <Post
        id={post._id}
        title={post.title}
        imageUrl="https://gen.jut.su/uploads/newsthumbs/1545736844_bez-imeni-1.jpg"
        createdAt={post.createdAt}
        viewsCount={5}
        tags={post.tags}
        isFullPost>
        <p>{post.text}</p>
      </Post>
    </div>
  );
};

export default FullPost;
