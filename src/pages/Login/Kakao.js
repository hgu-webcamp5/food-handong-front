import Auth from '../../Auth';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import KakaoProfile from './KakaoProfile';

function KakaoLogin() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
  return (
    <div className="App">
      <h1>
        <a href={KAKAO_AUTH_URL}>Kakao Login</a>
      </h1>
      <Auth />
      {/* <KakaoProfile/> */}
    </div>
  );
}
export default KakaoLogin;
