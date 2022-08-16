import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, Button, TextField } from '@mui/material';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import axios from '../../axios';

import styles from './AddPost.module.scss';

const AddPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = React.useState('');
  const [value, setValue] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [image, setImage] = React.useState();
  const inputRef = React.useRef(null);
  const isEdit = Boolean(id);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData);
      setImage(data.url);
    } catch (error) {
      console.warn(error);
    }
  };

  const onClickRemoveImage = () => {
    setImage('');
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
      const fields = {
        title,
        tags,
        image,
        text: value,
      };

      if (isEdit) {
        await axios.patch(`/posts/${id}`, fields);
        navigate(`/posts/${id}`);
      }

      const { data } = await axios.post('/posts', fields);
      const _id = data._id;

      navigate(`/posts/${_id}`);
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

  React.useEffect(() => {
    if (id) {
      axios.get(`posts/${id}`).then(({ data }) => {
        setTitle(data.title);
        setImage(data.image);
        setTags(data.tags);
        setValue(data.text);
      });
    }
  }, []);

  return (
    <Paper style={{ padding: 30, marginBottom: 30 }}>
      {image ? (
        <div className={styles.postImg}>
          <img className={styles.image} src={`http://localhost:4444${image}`} alt="image" />
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
          {isEdit ? 'Редактировать' : 'Опубликовать'}
        </Button>
        <Button variant="outlined" color="error" size="large">
          Отменить
        </Button>
      </div>
    </Paper>
  );
};

export default AddPost;
