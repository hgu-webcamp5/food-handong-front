import { useEffect, useState } from 'react';
import {
  Box,
  CardContent,
  Button,
  ButtonGroup,
  Typography,
  TextField,
  IconButton,
  Grid,
  Avatar,
  Tab,
  Tabs,
  Rating,
  Divider,
  Paper,
  Stack,
} from '@mui/material';
import { grey, red, yellow, teal, amber } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import GradeIcon from '@mui/icons-material/Grade';
import CommentIcon from '@mui/icons-material/Comment';
import CallIcon from '@mui/icons-material/Call';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import imageUrl from '../../assets/images/샤브20.jpeg';
import menuImgUrl from '../../assets/images/샤브20메뉴.jpeg';
import userImgUrl from '../../assets/images/user.png';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

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
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return <div id="map" style={{ backgroundColor: 'black', width: '100%', height: '400px' }}></div>;
}

function AddReview() {
  return (
    <Paper sx={{ marginRight: -10, height: 310 }} elevation={5}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack direction="row" alignItems="center">
          <IconButton sx={{ color: yellow[700], marginTop: -2 }} size="large">
            <RestaurantIcon />
          </IconButton>
          <Typography style={{ fontSize: 17, fontWeight: 'bold' }} sx={{ marginBottom: 2 }}>
            이 식당을 평가해주세요!
          </Typography>
          <IconButton sx={{ color: yellow[700], marginTop: -2 }} size="large">
            <RestaurantIcon />
          </IconButton>
        </Stack>
        {/* <Typography style={{fontSize: 17, fontWeight: "bold"}} sx={{marginBottom: 2}}>이 식당을 평가해주세요!</Typography> */}
        <Rating sx={{ padding: 1 }} size="large" />
        <TextField
          id="outlined-textarea"
          placeholder="리뷰를 적어주세요"
          multiline
          sx={{ width: '100%' }}
          rows={3}
        />
        <Stack direction="row" alignItems="center">
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
          <Button
            sx={{ bgcolor: red[400], color: grey[50], margin: 3, paddingLeft: 5, paddingRight: 5 }}
          >
            리뷰 추가
          </Button>
        </Stack>
      </CardContent>
    </Paper>
  );
}

function Review() {
  const [tab, setTab] = useState('1');

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const [heart1, setHeart1] = useState(1);

  const handleHeartClick1 = () => {
    setHeart1((currentValue) => currentValue + 1);
    console.log(heart1);
  };

  const [heart2, setHeart2] = useState(0);

  const handleHeartClick2 = () => {
    setHeart2((currentValue) => currentValue + 1);
    console.log(heart2);
  };

  return (
    <div>
      <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', marginLeft: 5 }}>
        <Tabs value={tab} onChange={handleTabChange} sx={{ marginLeft: '70%' }}>
          <Tab label="최신순" value="1" />
          <Tab label="오래된 순" value="2" />
        </Tabs>
      </Box>
      <Grid container sx={{ paddingTop: 3 }}>
        <Grid item xs={2}>
          <Avatar src={userImgUrl} sx={{ width: 73, height: 73, marginTop: 5 }} aria-label="김성경">
            김
          </Avatar>
        </Grid>
        <Grid item xs={10}>
          <ReviewContent
            name="김성경"
            date="오늘"
            rate={5}
            comment="너무 맛있어요!!"
            heartNum={heart1}
            setHeart={handleHeartClick1}
            commentNum={1}
            replyName="사장님"
            replycomment="감사합니다:)"
          />
        </Grid>
      </Grid>
      <Grid container sx={{ paddingTop: 3 }}>
        <Grid item xs={2}>
          <Avatar src={userImgUrl} sx={{ width: 73, height: 73, marginTop: 5 }} aria-label="김성경">
            김
          </Avatar>
        </Grid>
        <Grid item xs={10}>
          <ReviewContent
            name="김성경"
            date="어제"
            rate={1}
            comment="맛없어요"
            heartNum={heart2}
            setHeart={handleHeartClick2}
            commentNum={1}
            replyName="사장님"
            replycomment="맛이 없으셨군요 ㅠ"
          />
        </Grid>
      </Grid>
    </div>
  );
}

function ReviewContent(props) {
  const [writeShow, setWriteShow] = useState(false);
  const [commentShow, setCommentShow] = useState(false);

  const handleWriteClick = () => {
    setWriteShow(!writeShow);
  };

  const handleCommentClick = () => {
    setCommentShow(!commentShow);
  };

  return (
    <div>
      <Paper sx={{ marginRight: -10 }} elevation={3}>
        <CardContent>
          <Grid container justifyContent="between">
            <Grid item xs={8.3}>
              <Typography>{props.name}</Typography>
            </Grid>
            <Grid item xs={2.7}>
              <ButtonGroup
                variant="outlined"
                size="small"
                align="end"
                aria-label="좋아요 댓글 버튼"
              >
                <Button value="heart" onClick={props.setHeart}>
                  좋아요
                </Button>
                <Button value="comment" onClick={handleWriteClick}>
                  댓글
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={1} sx={{ marginTop: 0.5 }}>
              <Typography>{props.date}</Typography>
            </Grid>
          </Grid>
          <div style={{ display: 'flex', marginBottom: 4 }}>
            <Rating value={props.rate} readOnly />
            <Typography style={{ marginLeft: 4, fontSize: 17 }}>{props.rate}</Typography>
          </div>
          <img style={{ marginBottom: 15 }} src={imageUrl} width="180" height="100" alt="" />
          <Typography>{props.comment}</Typography>

          <div>
            <IconButton
              sx={{ color: red[400], paddingBottom: 0, marginBottom: -1.8, size: 'small' }}
              aria-label="좋아요 수"
            >
              <FavoriteIcon />
              <Typography sx={{ fontSize: 17, color: red[400] }}>{props.heartNum}</Typography>
            </IconButton>
            <IconButton
              onClick={handleCommentClick}
              sx={{ color: teal[400], paddingBottom: 0, marginBottom: -2, size: 'small' }}
              aria-label="댓글"
            >
              <CommentIcon />
              <Typography>{props.commentNum}</Typography>
            </IconButton>

            {writeShow && (
              <div>
                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                <TextField
                  id="outlined-textarea"
                  placeholder="대댓글을 적어주세요"
                  multiline
                  sx={{ width: '100%', marginBottom: 1 }}
                  rows={1}
                />
                <div sx={{ marginLeft: '85%' }}>
                  <Button
                    size="small"
                    onClick={handleWriteClick}
                    variant="outlined"
                    sx={{ color: red[300], marginLeft: '70%' }}
                  >
                    취소
                  </Button>
                  <Button
                    size="small"
                    onClick={handleWriteClick}
                    sx={{ bgcolor: red[300], color: grey[50], marginLeft: 1 }}
                  >
                    등록
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Paper>
      <div>
        {commentShow && <Reply replyName={props.replyName} replycomment={props.replycomment} />}
      </div>
    </div>
  );
}

function Reply(props) {
  return (
    <div>
      <Grid container sx={{ paddingTop: 3 }}>
        <Grid item xs={1}>
          <IconButton size="large" aria-label="대댓글">
            <SubdirectoryArrowRightIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <Avatar
            src={userImgUrl}
            sx={{ width: 40, height: 40, marginLeft: 2 }}
            aria-label="사장님"
          >
            사
          </Avatar>
        </Grid>
        <Grid item xs={9}>
          <Paper elevation={5} sx={{ backgroundColor: amber[50] }}>
            <Typography sx={{ padding: 0.7 }}>{props.replyName}</Typography>
            <Typography sx={{ fontSize: 17, padding: 0.5 }}>{props.replycomment}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

function Restaurant() {
  return (
    <div>
      <Grid container spacing={5} justifyContent="space" sx={{ marign: 0 }}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <RestaurantInfo />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <AddReview />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Menu />
          <Map />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Review />
        </Grid>
      </Grid>
    </div>
  );
}

export default Restaurant;
