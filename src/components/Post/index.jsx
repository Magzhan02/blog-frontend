import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteIcon from '@mui/icons-material/Clear';

import styles from './Post.module.scss';

const index = () => {
  return (
    <div className={styles.post}>
      <div className={styles.editButton}>
        <a href="/post/1/edit">
          <IconButton>
            <EditIcon />
          </IconButton>
        </a>
        <a href="/post/1/delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </a>
      </div>
      <img
        width={480}
        height={260}
        src="https://gen.jut.su/uploads/newsthumbs/1545736844_bez-imeni-1.jpg"
        alt="postImage"
      />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Title Title 1Title Title 1Title Title 1Title1</h2>
          <p className={styles.description}>
            «One-Punch Man» побил все рекорды популярности в 2015 году, на полноправной основе став
            главным хитом года и заслужив признание поклонников аниме по всему миру за счёт
            головокружительной проработки боевых сцен и, разумеется, хорошего юмора.
          </p>
          <div className={styles.info}>
            <ul className={styles.tags}>
              <li>#React</li>
              <li>#FrontEnd</li>
              <li>#BackEnd</li>
            </ul>
            <span className={styles.viewCount}>
              <EyeIcon />
              123
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
