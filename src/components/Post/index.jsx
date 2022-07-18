import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteIcon from '@mui/icons-material/Clear';
import clsx from 'clsx';

import styles from './Post.module.scss';

const index = ({
  _id,
  title,
  createdAt,
  imageUrl,
  viewsCount,
  tags,
  children,
  isFullPost,
  isLoading,
}) => {
  return (
    <div className={clsx(styles.post, { [styles.postFull]: isFullPost })}>
      <div className={styles.editButton}>
        <a href={`/post/${_id}/edit`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </a>
        <a href={`/post/${_id}/delete`}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </a>
      </div>
      <img width={480} height={260} src={imageUrl} alt={title} />
      <div className={styles.wrapper}>
        <div className={clsx(styles.content, { [styles.contentFull]: isFullPost })}>
          <h2 className={styles.title}>{title}</h2>
          {children && <div className={styles.description}>{children}</div>}
          <div className={styles.info}>
            <span className={styles.createdAt}>{createdAt}</span>
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
        </div>
      </div>
    </div>
  );
};

export default index;
