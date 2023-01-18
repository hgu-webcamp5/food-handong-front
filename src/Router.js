import { Container as MuiContainer } from '@mui/material';
import { styled } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Main from './pages/Main';
import Page404 from './pages/Page404';
import Profile from './pages/Profile';
import Restaurant from './pages/Restaurant';
import Addform from './pages/Login/Addform';
import KakaoLogin from './pages/Login/Kakao';
import KakaoProfile from './pages/Login/KakaoProfile';
import GoogleLogin from './pages/Login/GoogleLogin';
import Auth from './Auth';
import { useRecoilValue } from 'recoil';
import { userState } from './store/atoms';

export const Container = styled(MuiContainer)(({ theme }) => ({
  paddingTop: theme.mixins.toolbar.minHeight * 2,
  minHeight: `calc(100vh - 154px)`,
}));

function Router() {
  const user = useRecoilValue(userState);
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          {!user && <Route path="/login" element={<Login />} />}
          {!user &&  <Route path="/login/addform" element={<Addform />} />}
          <Route path="/oauth/kakao/callback" element={<KakaoLogin />} />
          {/* <Route path="/login/google" element={<GoogleLogin />} /> */}
          <Route path="/Kakaoprofile" element={<KakaoProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
