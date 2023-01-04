import {TextFields} from "@mui/icons-material";
import {
  Typography,
  styled,
  Paper,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  makeStyles
} from "@mui/material";
import {useState} from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {createTheme , ThemeProvider} from "@mui/material/styles";

const SideBar = styled(Paper)({
    height: 800,
    width: 220,
    border: 1,
    color: 'secondary.contratext',
});
const Item = styled(Paper)({
  textAlign: 'center',
  color: 'secondary.contratext',
  height: 130,
  lineHeight: '60px',
});
// const lightTheme = createTheme({ palette: { mode: 'light' } });

function Main() {

  const [age, setAge] = useState(0);
  const [restaurants , setRestaurants] = useState([1,2,3,4,5,6,7,8]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return(
  <div>
    <div>
      <Grid container spacing={5} sx={{ ml:-18 , width : '120%' }}>
        <Grid item xs={2} >
              <SideBar elevation={5} >side bar</SideBar>
        </Grid>
        <Grid item xs={10}>
            <Box
                sx={{
                    p: 2,
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr' },
                    gap: 80,
                }}
            >
            <TextField id="outlined-basic" label="식당,음식,카테고리,지역 검색" variant="outlined" />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"> Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            </Box>

            <Box
                sx={{
                  p: 3,
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 5,
                }}
            >
              {restaurants.map((index) => (
                  <Item key={index} elevation={5}>
                    {`음식점${index}`}
                  </Item>
              ))}
            </Box>
        </Grid>

      </Grid>
  </div>


  </div>

  );
}

export default Main;
