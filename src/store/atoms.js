import { atom } from 'recoil';

export const isLoginState = atom({
  key: 'isLogin',
  default: false,
});

export const userState = atom({
  key: 'user',
  default: null,
});

export const isDarkState = atom({
  key: 'isDark',
  default: localStorage.getItem('darkMode') === 'true',
});
