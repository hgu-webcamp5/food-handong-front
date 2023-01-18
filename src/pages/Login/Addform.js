import * as React from 'react';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import styles from './Login.module.css';
import { useForm } from 'react-hook-form';
import { join } from './apis/login';
import { useNavigate } from 'react-router-dom';

function Addform() {
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onValid = (data) => {
    if (data.password !== data.password2) {
      setError('password2', { message: '비밀번호가 일치하지 않습니다.' });
      return;
    }
    join(data)
      .then(() => navigator('/login'))
      .catch((error) => {
        alert('중복되는 ID입니다. 다시 시도해주세요.');
      });

    console.log(data);
  };

  return (
    <>
      <Box className={styles.root}>
        <Paper className={styles.container} component="form" onSubmit={handleSubmit(onValid)}>
          <Typography className={styles.title} variant="h6">
            회원가입
          </Typography>
          <TextField
            className={styles.textField}
            {...register('userId', {
              required: '아이디를 입력하세요',
              minLength: { value: 6, message: 'ID가 너무 짧습니다' },
            })}
            label="ID"
            placeholder="아이디를 입력하세요"
            color="secondary"
            size="small"
            fullWidth
            helperText={errors?.userId?.message}
          />
          <TextField
            className={styles.textField}
            {...register('password', { required: '비밀번호를 입력하세요' })}
            label="PASSWORD"
            placeholder="비밀번호를 입력하세요"
            color="secondary"
            size="small"
            fullWidth
            helperText={errors?.password?.message}
            type="password"
          />
          <TextField
            className={styles.textField}
            {...register('password2', { required: '비밀번호를 확인해주세요' })}
            label="PASSWORD 확인"
            placeholder="비밀번호를 확인해주세요"
            color="secondary"
            size="small"
            fullWidth
            helperText={errors?.password2?.message}
            type="password"
          />
          <TextField
            className={styles.textField}
            {...register('email', { required: '이메일을 입력하세요' })}
            label="EMAIL"
            placeholder="이메일을 입력하세요"
            color="secondary"
            size="small"
            fullWidth
            helperText={errors?.email?.message}
            type="email"
          />
          <TextField
            className={styles.textField}
            {...register('name', { required: '이름을 입력하세요' })}
            label="NAME"
            placeholder="이름을 입력하세요"
            color="secondary"
            size="small"
            fullWidth
            helperText={errors?.name?.message}
          />
          <TextField
            className={styles.textField}
            {...register('nickname', { required: '닉네임을 입력하세요' })}
            label="NICKNAME"
            placeholder="별명을 입력하세요"
            color="secondary"
            size="small"
            fullWidth
            helperText={errors?.nickname?.message}
          />
          <Box className={styles.submitBtnContainer}>
            <Button type="submit" variant="contained" color="primary">
              가입하기
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Addform;
