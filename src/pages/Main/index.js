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

import SvgIcon from "@mui/material/SvgIcon";
import { SvgIconComponent } from "@mui/icons-material";

import {useState} from "react";
import img1 from './img/main_img_1.jpg';
import img2 from './img/main_img_2.jpg';
import img3 from './img/main_img_3.jpg';
import img4 from './img/main_img_4.jpg';
import img5 from './img/main_img_5.jpg';
import img6 from './img/main_img_6.jpg';
import img7 from './img/main_img_7.jpg';
import img8 from './img/main_img_8.jpg';

import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import { Image } from 'mui-image'
const SideBar = styled(Paper)({
    height: 785,
    width: 200,
    border: 1,
    pb: 30,
});
const Item = styled(Paper)(

    {
        // textAlign: 'center',
        color: 'secondary.contratext',
        height: 140,
        lineHeight: '60px',

    });


// const lightTheme = createTheme({ palette: { mode: 'light' } });

function Star(props) {
    return (
        <SvgIcon sx={{fontSize:15 }} component={StarIcon} inheritViewBox />
    );
}
function Heart(props) {
    return (
        <SvgIcon sx={{fontSize:15, ml:1 }} component={FavoriteIcon} inheritViewBox />
    );
}
function Comment(props) {
    return (
        <SvgIcon sx={{fontSize:15, ml:1  }} component={ChatBubbleIcon} inheritViewBox />
    );
}

function Main() {


  const [sort, setSort] = useState(0);
  const [restaurants ] = useState([
      {
          name: "샤브20",
          where: "장성동",
          menu: "평일런치\n평일디너,주말,공휴일",
          category: "육류",
          recommendation: true,
          star: 4.8,
          heart: 2,
          comment: 5,
          img : `${img1}`,
      },
    {
        name: "언양닭칼국수",
        where: "흥해읍",
        menu: "닭칼국수\n언양식칼국수",
        category: "한식",
        recommendation: false,
        star: 5.0,
        heart: 7,
        comment: 9,
        img : `${img2}`,
    },
    {
        name: "라멘구루마",
        where: "양덕동",
        menu: "부타시오라멘\n아카이부타시오라멘",
        category: "회 일식",
        recommendation: false,
        star: 5.0,
        heart: 7,
        comment: 5,
        img : `${img3}`,
    },
    {
        name: "으뜸이네",
        where: "양덕동",
        menu: "순쌀떡볶이\n찰순대",
        category: "분식",
        recommendation: false,
        star: 5.0,
        heart: 2,
        comment: 4,
        img : `${img4}`,
    },
    {
        name: "류&돈까스",
        where: "양덕동",
        menu: "히레(안심)까스(3pcs)\n로스(등심)까스",
        category: "회 일식",
        recommendation: false,
        star: 5.0,
        heart: 3,
        comment: 3,
        img : `${img5}`,
    },
    {
        name: "카페 1703",
        where: "송라면",
        menu: "1703에이드\n햄치즈크레페",
        category: "카페",
        recommendation: false,
        star: 5.0,
        heart: 1,
        comment: 3,
        img : `${img6}`,
    },
      {
          name: "샤브20",
          where: "장성동",
          menu: "평일런치\n평일디너,주말,공휴일",
          category: "육류",
          recommendation: true,
          star: 4.8,
          heart: 2,
          comment: 5,
          img : `${img7}`,
      },
      {
          name: "언양닭칼국수",
          where: "흥해읍",
          menu: "닭칼국수\n언양식칼국수",
          category: "한식",
          recommendation: false,
          star: 5.0,
          heart: 7,
          comment: 9,
          img : `${img8}`,
      },
  ]);
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
      <Grid container spacing={5} sx={{ ml:-18, mt:-6 , width : '120%' }}>
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
        <Grid item xs={10} >
            <Box
                sx={{
                    px: 1.5,
                    pt: 0,
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr' },
                    gap: 83,
                    mb:2,

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
                  p: 3,
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 6,
                }}
            >
              {restaurants.map((restaurant,index) => (

                  <Item key={index} elevation={10} sx={{
                              '&:hover': {
                                  // backgroundColor: 'action.hover',
                                  opacity: [0.8, 0.8, 0.8],
                                  border: 1,
                              },
                            p:1,
                          }}>
                      <Box component="div" id="block-image" sx={{display: 'block', width:120 , height:120,
                          ml:-3, mt:-3, mr:2
                          , float:"left"}}>
                          <Image src={restaurant.img} sx={{border:1 ,borderRadius:3,borderColor:'text.secondary',
                              '&:hover': {
                                  // backgroundColor: 'action.hover',
                                  borderColor: 'default',
                                  opacity: [0.8, 0.8, 0.8],
                                  border: 1,

                              },}} alt="img" />
                      </Box>
                      <Box component="div" id="block-firstLine" sx={{display: 'block'}}>
                            <Typography variant="h6" sx={{float: 'left'}} >{restaurant.name}</Typography> <Typography variant="body2" sx={{float: 'right', fontWeight: 'bold'}} >{restaurant.category}</Typography>
                      </Box>
                      <Box component="div" id="block-secondLine" sx={{display: 'block', mt : 3.5}}>
                          <Typography variant="body2" sx={{ mt:1, float:'left' , fontWeight:'bold'}}>{restaurant.where}</Typography> {restaurant.recommendation ? <Typography variant="body2" sx={{ float:'right', color:"error.main", fontWeight:'bold'}}>추천!</Typography> : null}
                      </Box>
                      <Box component="div" id="block-thirdLine" sx={{display: 'block' , mt: 8}}>
                          <Typography variant="body2" sx={{whiteSpace: 'pre-wrap', fontWeight:'bold' , color:'text.secondary'}}>{restaurant.menu}</Typography>
                      </Box>

                      <Box id="block-lastLine">

                          <Typography  variant="body2" sx={{float:'right'}}><Comment /> {restaurant.comment}</Typography>
                          <Typography variant="body2" sx={{float:'right'}}><Heart /> {restaurant.heart}</Typography>
                          <Typography variant="body2" sx={{float:'right'}}><Star /> {restaurant.star}</Typography>

                      </Box>


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
