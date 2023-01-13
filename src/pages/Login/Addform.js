import * as React from 'react';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

import styles from './Login.module.css';

function Addform() {
  return (
    <>
      <Box className={styles.root}>
        <Paper className={styles.container}>
          <Typography className={styles.title} variant="h6">
            회원가입
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
          <TextField
            className={styles.textField}
            // value={newDisplayName}
            // onChange={(e) => setNewDisplayName(e.target.value)}
            label="EMAIL"
            placeholder="이메일을 입력하세요"
            color="secondary"
            size="small"
            fullWidth
          />
          <TextField
            className={styles.textField}
            // value={newDisplayName}
            // onChange={(e) => setNewDisplayName(e.target.value)}
            label="NICKNAME"
            placeholder="별명을 입력하세요"
            color="secondary"
            size="small"
            fullWidth
          />
          <Box className={styles.submitBtnContainer}>
            <Button
              // onClick={saveProfile}
              variant="contained"
              color="primary"
            >
              회원가입
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Addform;
