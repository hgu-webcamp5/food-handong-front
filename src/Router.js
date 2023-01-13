import { Container as MuiContainer } from '@mui/material';
import { styled } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Main from './pages/Main';
import Page404 from './pages/Page404';
import Profile from './pages/Profile';
import Restaurant from './pages/Restaurant';
import Addform from './pages/Login/Addform';

export const Container = styled(MuiContainer)(({ theme }) => ({
  paddingTop: theme.mixins.toolbar.minHeight * 2,
}));

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path='/login/addform' element={<Addform />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default Router;
