import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { join, loginWithId } from './pages/Login/apis/login';
import { useSetRecoilState } from 'recoil';
import { userState } from './store/atoms';

const Auth = () => {
  const setUser = useSetRecoilState(userState);

  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get('code');

  const history = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_REST_API_KEY,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      code: code,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    });

    try {
      // access token 가져오기
      const res = await axios.post('https://kauth.kakao.com/oauth/token', payload);

      // Kakao Javascript SDK 초기화
      window.Kakao.init(process.env.REACT_APP_REST_API_KEY);
      // access token 설정
      await window.Kakao.Auth.setAccessToken(res.data.access_token);
      try {
        // Kakao SDK API를 이용해 사용자 정보 획득
        let data = await window.Kakao.API.request({
          url: '/v2/user/me',
        });

        loginWithId(data.id)
          .then((userData) => {
            setUser(userData);
            history('/');
          })
          .catch(() => {
            join({
              userId: data.id,
              name: data.properties.nickname,
              nickname: data.properties.nickname,
              email: data.properties.account_email,
              profileUrl: data.properties.profile_image,
            }).then(() => {
              history('/login');
            });
          });
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return null;
};

export default Auth;
