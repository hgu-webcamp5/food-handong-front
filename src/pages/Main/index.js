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
} from "@mui/material";
import {useState} from "react";

const SideBar = styled(Paper)({
    height: 712,
    width: 220,
    border: 1,
});
const Item = styled(Paper)({
  textAlign: 'center',
  color: 'secondary.contratext',
  height: 130,
  lineHeight: '60px',
});

// const lightTheme = createTheme({ palette: { mode: 'light' } });

function Main() {

  const [sort, setSort] = useState(0);
  const [restaurants ] = useState([1,2,3,4,5,6,7,8]);
  const [reviews ] = useState([
          {
            text: "맛있었어요ㅎㅎ",
            name: "라멘구루마"
          },
          {
              text: "찹쌀 도너츠 안먹으면 간첩 의...",
              name: "으뜸이네"
          },
          {
              text: "진짜 맛있는 물회집",
              name: "태화횟집"
          },
          {
              text: "커피 맛집! 서울에서도 생각...",
              name: "커피유야"
          }
      ]);
  const [categories] = useState(["전체보기 (12)" , "한식 (31)" ,
"회 ,일식 (26)" , "중식 (12)", "양식 (13)", "아시안 (2)" , "분식 (5)" , "육류 (18)" , "치킨 (3)" ,
"술집 (5)" , "카페 (7)" , "디저트 (2)"]);

  const handleChange = (event) => {
    setSort(event.target.value);
  };
        return(
  <div>
    <div>
      <Grid container spacing={5} sx={{ ml:-18 , width : '120%' }}>
        <Grid item xs={2} >
              <SideBar elevation={5} sx={{
                  '&:hover': {
                      // backgroundColor: 'action.hover',
                      opacity: [0.8, 0.8, 0.8],
                      border:1,
                  },
              }}>
                  <Box id={"category"} sx={{p:2, pb: 1.5 , fontWeight: 'bold' ,}}>
                      <Typography variant="body1">카테고리</Typography>
                      <Box sx={{p:1}}>
                          {categories.map((category,index) => (
                              <Typography variant="body2" key={index} sx={{
                                  p:0.5,
                                  "&:hover": {
                                      textDecoration: "underline",
                                  },
                              }}>{category}</Typography>
                          ))}
                      </Box>
                  </Box>
                  <Box id={"review"} sx={{px:2 , fontWeight: 'bold'}}>
                      <Typography variant="body1" sx={{pb:0.5}}>최근 리뷰</Typography>
                      <Box>
                          {reviews.map((review,index)=> (
                              <Box sx={{
                                  p:0.7,
                                  "&:hover": {
                                      textDecoration: "underline",
                                  },
                              }} key={index}>
                                  <Typography variant="body2">{review.text}</Typography>
                                  <Typography variant="body2">{review.name}</Typography>
                              </Box>
                          ))}
                      </Box>

                  </Box>
              </SideBar>
        </Grid>
        <Grid item xs={10}>
            <Box
                sx={{
                    px: 5,
                    pt: 0,
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr' },
                    gap: 78,
                }}
            >
            <TextField id="outlined-basic" size='small' label="식당, 음식, 카테고리, 지역 검색" variant="outlined"  sx={{ width:300}} InputProps={{ style: { height: "40px" } }}/>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" > Sort</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    label="Sort"
                    onChange={handleChange}
                    sx={{width:110, height:40}}
                >
                    <MenuItem value={1}>평점 순</MenuItem>
                    <MenuItem value={2}>좋아요 순</MenuItem>
                    <MenuItem value={3}>댓글 순</MenuItem>
                </Select>
            </FormControl>
            </Box>

            <Box
                sx={{
                  p: 4, px : 5,
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 5,
                }}
            >
              {restaurants.map((index) => (
                  <Item key={index} elevation={5} sx={{
                              '&:hover': {
                                  // backgroundColor: 'action.hover',
                                  opacity: [0.8, 0.8, 0.8],
                                  border: 1,
                              },
                          }}>
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
