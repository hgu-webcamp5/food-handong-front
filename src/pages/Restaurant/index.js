import { useEffect, useState, useCallback, useRef } from 'react';
import { CardContent, Button, Typography, IconButton, Grid, Divider, Paper } from '@mui/material';
import { grey, red, yellow, teal } from '@mui/material/colors';
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
import { getReviewById, getReviews } from './apis/review';
import { getRestaurantById } from './apis/restaurant';
import { useParams } from 'react-router-dom';
import { addLike, checkLike, unlike } from './apis/like';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/atoms';

const { kakao } = window;

function RestaurantInfo() {
  const user = useRecoilValue(userState);
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();
  const [isLike, setIsLike] = useState(false);
  const loadData = async () => {
    const response = await getRestaurantById(id);
    setRestaurant(response);
    if (user) {
      const isLike = await checkLike(user.userId, id);
      console.log(isLike);
      setIsLike(isLike);
    }
  };
  const handleLike = async () => {
    if (!user) {
      alert('로그인이 필요한 서비스 입니다.');
      return;
    }
    await addLike(user.userId, id);
    loadData();
  };
  const handleUnlike = async () => {
    await unlike(user.userId, id);
    loadData();
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <Paper sx={{ marginLeft: -10, height: 310 }} elevation={5}>
      {restaurant && (
        <CardContent>
          <Grid container sx={{ marginBottom: 2 }}>
            <Grid item xs={10}>
              <Typography style={{ fontSize: 23, fontWeight: 'bold' }}>
                {restaurant.name}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <div>
                <IconButton sx={{ color: red[400] }} onClick={isLike ? handleUnlike : handleLike}>
                  {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
              <img
                src={restaurant.imageUrl}
                width="180"
                height="200"
                style={{ borderRadius: '5%' }}
                alt=""
              />
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
                  <Typography sx={{ fontSize: 17, color: yellow[600] }}>
                    {restaurant.rate}
                  </Typography>
                </IconButton>
                <IconButton
                  sx={{ color: red[400], paddingTop: 0, paddingRight: 0, size: 'small' }}
                  aria-label="좋아요 수"
                >
                  <FavoriteIcon />
                  <Typography sx={{ fontSize: 17, color: red[400] }}>{restaurant.heart}</Typography>
                </IconButton>
                <IconButton
                  sx={{ color: teal[400], paddingTop: 0, size: 'small' }}
                  aria-label="리뷰"
                >
                  <CommentIcon />
                  <Typography sx={{ fontSize: 17, color: teal[400] }}>
                    {restaurant.comment}
                  </Typography>
                </IconButton>
              </div>
              <Typography style={{ fontSize: 17 }}>육류</Typography>
              <Typography style={{ fontSize: 17, paddingTop: 2 }}>{restaurant.dong}</Typography>
              <Typography style={{ fontSize: 17, paddingTop: 2 }}>{restaurant.location}</Typography>
              <div style={{ display: 'flex', paddingTop: 4 }}>
                <CallIcon></CallIcon>
                <Typography style={{ fontSize: 17 }}>{restaurant.contact}</Typography>
              </div>
              <Typography style={{ fontSize: 17, paddingTop: 4 }}>
                {restaurant.openingHours}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      )}
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
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();
  const loadData = async () => {
    const response = await getRestaurantById(id);
    setRestaurant(response);
  };
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!restaurant) return;
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(restaurant.latitude, restaurant.longitude),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options); //지도 생성

    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(restaurant.latitude, restaurant.longitude),
      title: restaurant.name,
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
  }, [restaurant]);

  return <div id="map" style={{ backgroundColor: 'black', width: '100%', height: '400px' }}></div>;
}

function Restaurant() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  const nextId = useRef(reviews.length + 1);
  const onInsert = useCallback(
    (text, rate) => {
      const newReview = {
        id: nextId.current,
        name: '김성경',
        date: '오늘',
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

  const loadData = async () => {
    const response = await getReviewById(id);
    setReviews(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Grid container spacing={5} justifyContent="space" sx={{ marign: 0 }}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <RestaurantInfo />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <AddReview onInsert={onInsert} restaurantId={id} loadData={loadData} />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Menu />
          <Map />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Review reviews={reviews} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Restaurant;
