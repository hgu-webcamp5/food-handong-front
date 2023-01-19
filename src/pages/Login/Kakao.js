import Auth from '../../Auth';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
// import KakaoProfile from './KakaoProfile';
import Kakaoimage from './img/kakao_login_medium_narrow.png';
// src/pages/Login/img/kakao_login_medium_narrow.png

function KakaoLogin() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
  return (
    <a href={KAKAO_AUTH_URL}>
      <img src={Kakaoimage} width = '130'
      ></img>
    </a>
    // <Auth />
  );
}
export default KakaoLogin;
