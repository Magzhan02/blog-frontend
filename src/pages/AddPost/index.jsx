import React from 'react';
import { Paper, Button, TextField } from '@mui/material';
import SimpleMDE from 'react-simplemde-editor';

import styles from './AddPost.module.scss';

const AddPost = () => {
  const [value, setValue] = React.useState('');

  const onChangeContent = React.useCallback((value) => {
    setValue(value);
  }, []);

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
      },
    }),
    [],
  );

  return (
    <Paper style={{ padding: 30 }}>
      <Button variant="outlined" size="large">
        Загрузить превью
      </Button>
      <input type="file" hidden />
      <TextField
        /* classes={{ root: styles.title }} */
        variant="standard"
        placeholder="Заголовок статьи..."
        fullWidth
      />
      <SimpleMDE
        className={styles.editor}
        onChange={onChangeContent}
        value={value}
        options={options}
        getLineAndCursor={getLineAndCursorCallback}
      />
    </Paper>
  );
};

export default AddPost;
