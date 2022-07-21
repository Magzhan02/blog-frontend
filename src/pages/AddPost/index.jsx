import React from 'react';
import { Paper, Button, TextField } from '@mui/material';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import axios from 'axios';

import styles from './AddPost.module.scss';

const AddPost = () => {
  const [value, setValue] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState();
  const inputRef = React.useRef(null);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      formData.append('image', event.target.files[0]);
      const { data } = await axios.post('/uploads', formData);
      setImageUrl(data.url);
    } catch (error) {
      console.warn(error);
    }
  };

  const onChangeContent = React.useCallback((value) => {
    setValue(value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'I am the placeholder',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
        uniqueId: 'demo',
      },
    }),
    [],
  );

  return (
    <Paper style={{ padding: 30, marginBottom: 30 }}>
      {imageUrl ? (
        <>
          <Button variant="outlined" color="error" size="large" /* onClick={onClickRemoveImage} */>
            Удалить превью
          </Button>
          <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="image" />
        </>
      ) : (
        <>
          <Button variant="outlined" size="large" onClick={() => inputRef.current.click()}>
            Загрузить превью
          </Button>
          <input ref={inputRef} type="file" onChange={handleChangeFile} hidden />
        </>
      )}
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок статьи..."
        fullWidth
      />
      <TextField classes={{ root: styles.tags }} variant="standard" placeholder="Тэги" fullWidth />
      <SimpleMDE
        className={styles.editor}
        value={value}
        onChange={onChangeContent}
        options={options}
      />
    </Paper>
  );
};

export default AddPost;
