import { atom } from 'recoil';

export const isLoginState = atom({
  key: 'isLogin',
  default: false,
});

export const userState = atom({
  key: 'user',
  default: JSON.parse(localStorage.getItem('user')),
});

export const isDarkState = atom({
  key: 'isDark',
  default: localStorage.getItem('darkMode') === 'true',
});
