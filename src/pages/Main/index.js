import {TextFields} from "@mui/icons-material";
import {Box, TextField , FormControl , InputLabel, Select , MenuItem} from "@mui/material";
import {useState} from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


function Main() {

  //
  const [age, setAge] = useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return(
  <div>
  <div>
    <Box>사이드 바</Box>
    {/*<div>gg</div>*/}
  </div>
  <div>
    <TextField id="outlined-basic" label="식당,음식,카테고리,지역 검색" variant="outlined" />
  </div>
    <div>
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
    </div>
    <div>
      <div>
        <Box>맛집</Box><Box>맛집</Box>
      </div>

      <div>
        <Box>맛집</Box><Box>맛집</Box>
      </div>
    </div>
  </div>

  );
}

export default Main;
