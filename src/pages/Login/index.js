import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import KakaoLogin from './Kakao';
import GoogleLogin from 'react-google-login';
import KakaoProfile from './KakaoProfile';
import { useForm } from 'react-hook-form';
import { loginWithId } from './apis/login';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/atoms';

// import GoogleButton from './googleLogin';
// import GoogleImage from './img/1.png';
// import KakaoImage from './img/2.jpeg';

function Login() {
  const setUser = useSetRecoilState(userState);
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    loginWithId(data.userId)
      .then((userData) => {
        setUser(userData);
        navigator('/');
      })
      .catch((error) => {
        alert('로그인에 실패했습니다.');
      });
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
            // disabled
            // value={user.email}
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
            // value={newDisplayName}
            // onChange={(e) => setNewDisplayName(e.target.value)}
            label="PASSWORD"
            placeholder="비밀번호를 입력하세요"
            color="secondary"
            size="small"
            fullWidth
            helperText={errors?.password?.message}
            type="password"
          />

          {/* <img src={GoogleImage} /> */}
          {/* <GoogleButton /> */}
          {/* <Button>
            <img src={KakaoImage} />
          </Button> */}
          {/* <a href=''>회원가입</a> */}
          <Link to="/login/addform">회원가입</Link>
          <KakaoLogin></KakaoLogin>
          {/* <GoogleLogin></GoogleLogin> */}
          {/* <KakaoProfile /> */}

          <Box className={styles.submitBtnContainer}>
            <Button
              type="submit"
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
