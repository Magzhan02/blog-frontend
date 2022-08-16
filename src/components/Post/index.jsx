import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteIcon from '@mui/icons-material/Clear';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';

import { isAuthUser } from '../../redux/slice/auth';
import { deletePost } from '../../redux/slice/posts';
import styles from './Post.module.scss';

const Post = ({
  id,
  title,
  createdAt,
  imageUrl,
  viewsCount,
  tags,
  children,
  isLoading,
  isFullPost,
}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthUser);

  if (isLoading) {
    return <div>loading...</div>;
  }

  const onClickDeletePost = () => {
    dispatch(deletePost(id));
  };

  return (
    <div className={clsx(styles.post, { [styles.postFull]: isFullPost })}>
      {isAuth && (
        <div className={styles.editButton}>
          <Link to={`/posts/${id}/edit`}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickDeletePost}>
            <DeleteIcon />
          </IconButton>
        </div>
      )}

      {imageUrl ? <img src={imageUrl} alt={title} /> : ''}
      <div className={styles.wrapper}>
        <div className={clsx(styles.content, { [styles.contentFull]: isFullPost })}>
          <Link to={`/posts/${id}`}>
            <h2 className={styles.title}>{title}</h2>
            {children && (
              <div className={styles.description}>
                <p>{children}</p>
              </div>
            )}
            <div className={styles.info}>
              <Moment element="span" className={styles.createdAt} format="YYYY/MM/DD">
                {createdAt}
              </Moment>
              <ul className={styles.tags}>
                {tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
              <span className={styles.viewCount}>
                <EyeIcon />
                {viewsCount}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
