import * as React from 'react';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import KakaoLogin from './Kakao';
import { useForm } from 'react-hook-form';
import { loginWithId, loginWithPassword } from './apis/login';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/atoms';

function Login() {
  const setUser = useSetRecoilState(userState);
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    loginWithPassword(data.userId, data.password)
      .then((userData) => {
        setUser(userData);
        navigator('/');
      })
      .catch((error) => {
        alert('로그인에 실패했습니다.');
      });

    console.log(data);
  };

  return (
    <>
      <Box className={styles.root}>
        <Paper className={styles.container} component="form" onSubmit={handleSubmit(onValid)}>
          <Typography className={styles.title} variant="h6">
            로그인
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
          <Box className={styles.addFormBtnContainer}>
            <Button
              className={styles.addFormBtn}
              variant="contained"
              color="primary"
              component={Link}
              to="addform"
            >
              회원가입
            </Button>
            <KakaoLogin></KakaoLogin>
          </Box>

          <Box className={styles.submitBtnContainer}>
            <Button type="submit" variant="contained" color="primary">
              Log In
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Login;
