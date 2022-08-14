import React from 'react';
import Post from '../components/Post';
import ReactMarkdown from 'react-markdown';
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

  return (
    <div>
      <Post
        id={post._id}
        title={post.title}
        imageUrl={post.image ? `http://localhost:4444${post.image}` : ''}
        createdAt={post.createdAt}
        viewsCount={5}
        tags={post.tags}
        isFullPost>
        <ReactMarkdown children={post.text} />
      </Post>
    </div>
  );
};

export default FullPost;
