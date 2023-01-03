import { useRecoilState } from 'recoil';
import { Switch } from '@mui/material';
import { isDarkState } from '../store/atoms';

function DarkModeToggle() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const handleChange = (event) => {
    setIsDark(event.target.checked);
  };
  localStorage.setItem('darkMode', isDark.toString());
  return <Switch checked={isDark} onChange={handleChange} />;
}

export default DarkModeToggle;
