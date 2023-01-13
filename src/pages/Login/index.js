import * as React from 'react';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

import styles from './Login.module.css';

// import GoogleButton from './googleLogin';
import GoogleImage from './img/1.png';
import KakaoImage from './img/2.jpeg';

function Login() {
  return (
    <>
      <Box className={styles.root}>
        <Paper className={styles.container}>
          <Typography className={styles.title} variant="h6">
            로그인
          </Typography>
          <TextField
            className={styles.textField}
            // disabled
            // value={user.email}
            label="ID"
            placeholder="아이디를 입력하세요"
            color="secondary"
            size="small"
            fullWidth
          />
          <TextField
            className={styles.textField}
            // value={newDisplayName}
            // onChange={(e) => setNewDisplayName(e.target.value)}
            label="PASSWORD"
            placeholder="비밀번호를 입력하세요"
            color="secondary"
            size="small"
            fullWidth
          />

          {/* <img src={GoogleImage} /> */}
          {/* <GoogleButton /> */}
          {/* <Button>
            <img src={KakaoImage} />
          </Button> */}
          {/* <a href=''>회원가입</a> */}
          <Link to="/login/addform">회원가입</Link>
          <Box className={styles.submitBtnContainer}>
            <Button
              // onClick={saveProfile}
              variant="contained"
              color="primary"
            >
              Log In
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Login;
