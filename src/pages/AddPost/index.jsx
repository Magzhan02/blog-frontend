import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Button, TextField } from '@mui/material';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import axios from '../../axios';

import styles from './AddPost.module.scss';

const AddPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState('');
  const [value, setValue] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState();
  const inputRef = React.useRef(null);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData);
      setImageUrl(data.url);
    } catch (error) {
      console.warn(error);
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl('');
  };

  const onChangeText = React.useCallback((value) => {
    setValue(value);
  }, []);
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeTags = (e) => {
    setTags(e.target.value);
  };

  const onSubmit = async () => {
    try {
      const field = {
        title,
        tags,
        imageUrl,
        text: value,
      };

      const { data } = await axios.post('/posts', field);
      const id = data._id;

      navigate(`/posts/${id}`);
    } catch (error) {
      console.warn(error);
    }
  };

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: '',
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
        <div className={styles.postImg}>
          <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="image" />
          <Button variant="outlined" color="error" size="large" onClick={onClickRemoveImage}>
            Удалить превью
          </Button>
        </div>
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
        value={title}
        onChange={(e) => onChangeTitle(e)}
        fullWidth
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Теги"
        value={tags}
        onChange={onChangeTags}
        fullWidth
      />
      <SimpleMDE
        className={styles.editor}
        value={value}
        onChange={onChangeText}
        options={options}
      />
      <div className={styles.buttons}>
        <Button onClick={onSubmit} variant="outlined" color="success" size="large">
          Опубликовать
        </Button>
        <Button variant="outlined" color="error" size="large">
          Отменить
        </Button>
      </div>
    </Paper>
  );
};

export default AddPost;
