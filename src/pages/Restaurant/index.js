import { useEffect, useState, useCallback, useRef} from 'react';
import {
  CardContent,
  Button,
  Typography,
  IconButton,
  Grid,
  Divider,
  Paper,
} from '@mui/material';
import { grey, red, yellow, teal} from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import GradeIcon from '@mui/icons-material/Grade';
import CommentIcon from '@mui/icons-material/Comment';
import CallIcon from '@mui/icons-material/Call';
import imageUrl from '../../assets/images/샤브20.jpeg';
import menuImgUrl from '../../assets/images/샤브20메뉴.jpeg';
import Review from './components/review';
import AddReview from './components/addReview';

const { kakao } = window;

function RestaurantInfo() {
  return (
    <Paper sx={{ marginLeft: -10, height: 310 }} elevation={5}>
      <CardContent>
        <Grid container sx={{ marginBottom: 2 }}>
          <Grid item xs={10}>
            <Typography style={{ fontSize: 23, fontWeight: 'bold' }}>샤브 20</Typography>
          </Grid>
          <Grid item xs={2}>
            <div>
              <IconButton sx={{ color: red[400] }} aria-label="add to favorites">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton
                sx={{ color: yellow[600] }}
                style={{ fontSize: '60px' }}
                aria-label="share"
              >
                <ShareIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <img src={imageUrl} width="180" height="200" style={{ borderRadius: '5%' }} alt="" />
          </Grid>
          <Grid item xs={8}>
            <div>
              <IconButton
                sx={{
                  color: yellow[600],
                  paddingTop: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  size: 'small',
                }}
                aria-label="별점"
              >
                <GradeIcon />
                <Typography sx={{ fontSize: 17, color: yellow[600] }}>4.8</Typography>
              </IconButton>
              <IconButton
                sx={{ color: red[400], paddingTop: 0, paddingRight: 0, size: 'small' }}
                aria-label="좋아요 수"
              >
                <FavoriteIcon />
                <Typography sx={{ fontSize: 17, color: red[400] }}>3</Typography>
              </IconButton>
              <IconButton sx={{ color: teal[400], paddingTop: 0, size: 'small' }} aria-label="리뷰">
                <CommentIcon />
                <Typography sx={{ fontSize: 17, color: teal[400] }}>2</Typography>
              </IconButton>
            </div>
            <Typography style={{ fontSize: 17 }}>육류</Typography>
            <Typography style={{ fontSize: 17, paddingTop: 2 }}>장성동</Typography>
            <Typography style={{ fontSize: 17, paddingTop: 2 }}>
              경북 포항시 북구 법원로 7
            </Typography>
            <div style={{ display: 'flex', paddingTop: 4 }}>
              <CallIcon></CallIcon>
              <Typography style={{ fontSize: 17 }}>054-254-0020</Typography>
            </div>
            <Typography style={{ fontSize: 17, paddingTop: 4 }}>매일: 11:00 - 22:00</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
}

function Menu() {
  return (
    <Paper sx={{ marginTop: 2, marginLeft: -10, heigth: 380 }} elevation={5}>
      <CardContent>
        <Typography sx={{ marginBottom: 2 }} style={{ fontSize: 23, fontWeight: 'bold' }}>
          메뉴
        </Typography>
        <Divider sx={{ marginBottom: 1 }} />
        <Grid container>
          <Grid item xs={3}>
            <img src={menuImgUrl} width="110" height="100" style={{ borderRadius: '5%' }} alt="" />
          </Grid>
          <Divider sx={{ marginBottom: 1 }} />
          <Grid item xs={9}>
            <Typography sx={{ marginLeft: -1, paddingTop: 1, fontSize: 17 }}>
              평일런치
              <br />
              17,900원
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
        <Grid container>
          <Grid item xs={3}>
            <img src={menuImgUrl} width="110" height="100" style={{ borderRadius: '5%' }} alt="" />
          </Grid>
          <Grid item xs={9}>
            <Typography sx={{ marginLeft: -1, paddingTop: 1, fontSize: 17 }}>
              평일디너,주말,공휴일
              <br />
              21,900원
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
        <Typography sx={{ fontSize: 17, padding: 0.5 }}>
          초등학생
          <br />
          9,500원
        </Typography>
        <Divider sx={{ marginBottom: 1, marignTop: 1 }} />
        <Typography sx={{ fontSize: 17, padding: 0.5 }}>
          미취학아동
          <br />
          4,900원
        </Typography>
        <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
      </CardContent>
    </Paper>
  );
}

function Map() {
  return (
    <Paper sx={{ marginTop: 2, marginLeft: -10 }} elevation={5}>
      <CardContent>
        <Grid container sx={{ marginBottom: 2 }}>
          <Grid item xs={9.6}>
            <Typography style={{ fontSize: 23, fontWeight: 'bold' }}>지도</Typography>
          </Grid>
          <Grid item xs={2.4}>
            <Button
              sx={{
                marginLeft: 3,
                bgcolor: red[400],
                color: grey[50],
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              식당 위치
            </Button>
          </Grid>
        </Grid>
        <KakaoMap />
      </CardContent>
    </Paper>
  );
}

function KakaoMap() {

  useEffect(() => {
    const lat = 36.103116;
    const lon = 129.388368
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options); //지도 생성

    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lon),
      title: "한동대",
    });

    marker.setMap(map);
    // if(navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     currLat = position.coords.latitude;
    //     currLon = position.coords.longitude;
      
    //     const locPosition = new kakao.maps.LatLng(currLat, currLon);
    //     console.log("locPosition: " + locPosition);
    //     // displayMarker(locPosition, message);

    //   });
    // } else {
    //     currLat = 33.450701;
    //     currLon = 126.570667;
    // }
    
    
  }, []);

  return <div id="map" style={{ backgroundColor: 'black', width: '100%', height: '400px' }}></div>;
}


function Restaurant() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "김성경",
      date: "오늘",
      rate: 5,
      comment: "너무 맛있어요!!",
      heartNum: 3,
      replyNum: 1,
      reply: [{
          name: "사장님",
          comment: "감사합니다:)",
      }],
      // replyName: "사장님",
      // replycomment: "감사합니다:)",
    },
    {
      id: 2,
      name: "김성경",
      date: "어제",
      rate: 1,
      comment: "맛없어요",
      heartNum: 0,
      replyNum: 1,
      reply: [{
          name: "사장님",
          comment: "맛이 없으셨군요ㅠ",
      }],
    },
  ]);
  
  const nextId = useRef(reviews.length+1);
  const onInsert  = useCallback(
    (text, rate) => {
      const newReview = {
        id: nextId.current,
        name: "김성경",
        date: "오늘",
        rate: rate,
        comment: text,
        heartNum: 0,
        replyNum: 0,
      };
      setReviews(reviews.concat(newReview));
      nextId.current++;
      console.log(text);
    },
    [reviews],
  );

  return (
    <div>
      <Grid container spacing={5} justifyContent="space" sx={{ marign: 0 }}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <RestaurantInfo />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <AddReview onInsert={onInsert}/>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Menu />
          <Map />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Review reviews={reviews}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Restaurant;
