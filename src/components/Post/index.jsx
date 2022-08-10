import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteIcon from '@mui/icons-material/Clear';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

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
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div className={clsx(styles.post, { [styles.postFull]: isFullPost })}>
      <div className={styles.editButton}>
        <Link to={`/posts/${id}/edit`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>
        <Link to={`/posts/${id}/delete`}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Link>
      </div>
      {imageUrl ? <img src={imageUrl} alt={title} /> : ''}
      <div className={styles.wrapper}>
        <div className={clsx(styles.content, { [styles.contentFull]: isFullPost })}>
          <Link to={`/posts/${id}`}>
            <h2 className={styles.title}>{title}</h2>
            {children && <div className={styles.description}>{children}</div>}
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
