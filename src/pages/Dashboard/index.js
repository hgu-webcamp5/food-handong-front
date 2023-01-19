import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styles from "./a.css";
import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import imgA from './profile.png';
import Restaurant from './restaurant.jpg'
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import {getRestaurantById} from "../Restaurant/apis/restaurant";
import {checkLike} from "../Restaurant/apis/like";
import {getLikeRestaurants} from "./apis/dashboarad";
import {useRecoilValue} from "recoil";
import {userState} from "../../store/atoms";
import {Link} from "react-router-dom";

function Dashboard() {
  const user = useRecoilValue(userState);
  const email = "21900064@handong.ac.kr";
  const restaurant = [
    "샤브20",
    "장성동",
    "평일런치, 평일디너, 주말, 공휴일",
    "육류",
  ];
  const score = [
    4.8, 3, 5
  ];
  const review = [
    "언양닭칼국수",
    "맛있어요!",
    "4일전"
  ]
  const [show, toggleShow] = useState(true);
  const [value, setValue] = useState(user.name);
  let [res, setRestaurant] = useState(false);
  let [rev, showReview] = useState(false);
  const [likeRestaurants, setLikeRestaurants] = useState([]);
  const loadData = async () => {
    if (user) {
      const response = await getLikeRestaurants(user.userId);
      setLikeRestaurants(response);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Grid container spacing={10}>
      {/* 프로필 */}
      <Grid item xs={4}>
        <>
          <img
            alt=''
            src={user.profileUrl}
            width={250}
            height={250}
            style={{
              borderRadius: 100
            }}
            sx={{position: "relative"}}
          ></img>

          <Box sx={{
            marginTop: 3,
            width: 250,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}>
            {show && value}
          </Box>
          {show && <Button variant="outlined" sx={{ width: 250, marginTop: 1 }} onClick={() => toggleShow(!show)}>
            Edit profile
          </Button>}
          {!show &&
              <Button variant="outlined" aria-label="upload picture" component="label" sx={{
                width: 250,
              }} onClick={() => {}}>
                <input hidden accept="image/*" type="file" />
                이미지 변경
              </Button>
          }
          {!show &&
            <TextField
              id="outlined-required"
              label="Email"
              defaultValue={email}
              disabled
              size="small"
              sx={{ width: 250, marginTop: 3}}
            />
          }
          {!show &&
            <TextField
              id="outlined-required"
              label="Name"
              defaultValue={value}
              size="small"
              sx={{ marginTop: 3, width: 250 }}
              onChange={(event) => setValue(event.target.value)}
            />
          }
          {!show && <Button variant="outlined" sx={{
            width: 70,
            marginTop: 3,
            marginLeft: 11
          }} onClick={() => toggleShow(!show)}>
            Save
          </Button>}
        </>
      </Grid>
      <Grid item xs={6}>
        <Typography className={styles.title} variant="h6">
          최근 좋아요한 식당
        </Typography>
        <br />
        <Link style={{ textDecoration: 'none'}}>
          {/* 더보기 누르기전 큰 버전 */}
          {(res==false && rev==false) && <Card sx={{ width: 550, ":hover": {transform: "scale(1.02)"} }}>
            <Grid container>
              <Grid item xs={5}>
                <CardContent sx={{ paddingRight: 0 }}>
                  <img
                    alt=''
                    src={likeRestaurants[0]?.imageUrl}
                    width={110}
                    height={110}
                    style={{
                      objectFit: "fill",
                      margin: 0,
                      borderRadius: 30
                    }}
                  ></img>
                </CardContent>
              </Grid>
              <Grid item xs={5}>
                <CardContent sx={{ marginLeft: -9 }}>
                  <Typography variant="h5" component="div">
                    {likeRestaurants[0]?.name}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    {likeRestaurants[0]?.dong}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5, marginTop: 1 }} color="text.secondary">
                    {likeRestaurants[0]?.openingHours}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5, marginTop: 1 }} color="text.secondary">
                    <StarIcon sx={{color: '#ffcc33', fontSize: 20, marginBottom: -0.5}}/> {likeRestaurants[0]?.rate}
                    <FavoriteIcon sx={{color: '#ff6666', fontSize: 19, marginLeft: 1, marginBottom: -0.5}}/> {likeRestaurants[0]?.heart}
                    <ChatBubbleIcon sx={{color: "#33cccc", fontSize: 18, marginLeft: 1, marginBottom: -0.5}}/> {likeRestaurants[0]?.comment}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={2}>
                <CardContent>
                  <Typography sx={{ fontSize: 14, textAlign: "end" }} gutterBottom>
                    {likeRestaurants[0]?.category.name}
                  </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: 5 }}>
                  <Button size="small" sx={{ marginLeft: 1.5 }} onClick={() => { setRestaurant(true);}}>{res==false ? "더보기 ⟩" : "접기 ⟨"}</Button>
                </CardActions>
              </Grid>
            </Grid>
          </Card>}
          {/* 더보기 누른 후 작은버전 */}
          {(rev==true || res==true) && <Card sx={{ width: 450, ":hover": {transform: "scale(1.02)"} }} >
            <Grid container>
              <Grid item xs={5}>
                <CardContent sx={{ paddingRight: 0 }}>
                  <img
                    alt=''
                    src={likeRestaurants[0]?.imageUrl}
                    width={90}
                    height={90}
                    style={{
                      objectFit: "fill",
                      margin: 0,
                      borderRadius: 30
                    }}
                  ></img>
                </CardContent>
              </Grid>
              <Grid item xs={5}>
                <CardContent sx={{ marginLeft: -9 }}>
                  <Typography variant="h6" component="div">
                    {likeRestaurants[0]?.name}
                  </Typography>
                  <Typography sx={{ fontSize: 13 }} gutterBottom>
                    {likeRestaurants[0]?.dong}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5, marginTop: 1, fontSize: 13 }} color="text.secondary">
                    {likeRestaurants[0]?.openingHours}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5, marginTop: 1, fontSize: 12}} color="text.secondary">
                    <StarIcon sx={{color: '#ffcc33', fontSize: 18, marginBottom: -0.5}}/> {likeRestaurants[0]?.rate}
                    <FavoriteIcon sx={{color: '#ff6666', fontSize: 17, marginLeft: 1, marginBottom: -0.5}}/> {likeRestaurants[0]?.heart}
                    <ChatBubbleIcon sx={{color: "#33cccc", fontSize: 16, marginLeft: 1, marginBottom: -0.5}}/> {likeRestaurants[0]?.commnet}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={2}>
                <CardContent>
                  <Typography sx={{ fontSize: 14, textAlign: "end" }} gutterBottom>
                    {restaurant[3]}
                  </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: 5 }}>
                  <Button size="small" onClick={() => { setRestaurant(!res); if(res==false && rev==true) showReview(false); }}>{res==false ? "더보기 ⟩" : "접기 ⟨"}</Button>
                </CardActions>
              </Grid>
            </Grid>
          </Card>}
        </Link>
        <br /><br />
        <Typography className={styles.title} variant="h6">
          최근 쓴 리뷰
        </Typography>
        <br />
        {/* 더보기 누르기전 큰버전 */}
        {(rev==false && res==false) && <Grid container>
          <Grid item xs={3.7}>
            <img
              alt=''
              src={imgA}
              width={100}
              height={100}
              style={{
                borderRadius: 100
              }}
            ></img>
          </Grid>
          <Grid item xs={1} sx={{ marginLeft: -5.3 }}>
            <Card sx={{ width: 428 }}>
              <Grid container>
                <Grid item xs={9.5}>
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ marginBottom: 1 }}>
                      <Link style={{ textDecoration: 'none'}}>
                        {review[0]} ➜
                      </Link>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                      <StarIcon sx={{color: '#ffcc33', fontSize: 20, marginBottom: -0.5}}/>
                      <StarIcon sx={{color: '#ffcc33', fontSize: 20, marginBottom: -0.5}}/>
                      <StarIcon sx={{color: '#ffcc33', fontSize: 20, marginBottom: -0.5}}/>
                      <StarIcon sx={{color: '#ffcc33', fontSize: 20, marginBottom: -0.5}}/>
                      <StarIcon sx={{color: '#ffcc33', fontSize: 20, marginBottom: -0.5}}/>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                      {review[1]}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={2.5}>
                  <CardContent>
                    <Typography variant="body2" sx={{ mb: 1.5, marginLeft: 1 }} color="text.secondary">
                      {review[2]}
                    </Typography>
                  </CardContent>
                  <br />
                  <CardActions>
                    <Button size="small" sx={{ marginLeft: 1 }} onClick={() => { showReview(true);}}>{!rev ? "더보기 ⟩" : "접기 ⟨"}</Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>}
        {/* 더보기 누른 후 작은버전 */}
        {(rev==true || res==true) && <Grid container>
          <Grid item xs={3.7}>
            <img
              alt=''
              src={imgA}
              width={80}
              height={80}
              style={{
                borderRadius: 100
              }}
            ></img>
          </Grid>
          <Grid item xs={1} sx={{ marginLeft: -8.3 }}>
            <Card sx={{ width: 352 }}>
              <Grid container>
                <Grid item xs={9}>
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ marginBottom: 1 }}>
                      <Link style={{ textDecoration: 'none'}}>
                        {review[0]} ➜
                      </Link>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                      <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                      <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                      <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                      <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                      <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                      {review[1]}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={3}>
                  <CardContent>
                    <Typography variant="body2" sx={{ mb: 1.5, marginLeft: 1 }} color="text.secondary">
                      {review[2]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{ marginLeft: 1 }} onClick={() => { showReview(!rev); if(res==true && rev==false) setRestaurant(false); }}>{!rev ? "더보기 ⟩" : "접기 ⟨"}</Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>}
      </Grid>
      {/* 내가 좋아요한 식당 List */}
      {(res==true&&rev==false) && <Grid item xs={4} sx={{ marginLeft: -8, marginRight: -20 }}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',textAlign: 'center', fontWeight: 'bold' }}>
          내가 좋아요한 식당들
          {likeRestaurants.map(item => (
          <Link to={`/restaurant/${item.id}`} style={{ textDecoration: 'none'}}>
            <ListItem alignItems="flex-start" sx={{":hover": {transform: "scale(1.02)"}}}>
              <Card sx={{ width: 550, height: 100 }}>
                <Grid container>
                  <Grid item xs={5}>
                    <CardContent>
                      <img
                        alt=''
                        src={item.imageUrl}
                        width={50}
                        height={50}
                        style={{
                          objectFit: "fill",
                          margin: 0,
                          borderRadius: 30
                        }}
                      ></img>
                    </CardContent>
                  </Grid>
                  <Grid item xs={7}>
                    <CardContent sx={{ marginLeft: -6, marginTop: -1}}>
                      <Typography variant="h7" component="div">
                        {item.name}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        {item.dong}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1.5, marginTop: -0.5, fontSize: 12}} color="text.secondary">
                        <StarIcon sx={{color: '#ffcc33', fontSize: 18, marginBottom: -0.5}}/> {item.rate}
                        <FavoriteIcon sx={{color: '#ff6666', fontSize: 17, marginLeft: 1, marginBottom: -0.5}}/> {item.heart}
                        <ChatBubbleIcon sx={{color: "#33cccc", fontSize: 16, marginLeft: 1, marginBottom: -0.5}}/> {item.comment}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </ListItem>
          </Link>))}
          <Divider variant="inset" component="li" />
        </List>
      </Grid>}
      {/* 내가 쓴 리뷰 List*/}
      {(rev==true&&res==false) && <Grid item xs={4} sx={{ marginLeft: -8, marginRight: -20 }}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',textAlign: 'center', fontWeight: 'bold' }}>
          내가 쓴 리뷰
          `<Link style={{ textDecoration: 'none'}}>
            <ListItem alignItems="flex-start" sx={{":hover": {transform: "scale(1.02)"}}}>
              <Card sx={{ width: 550, height: 100 }}>
                <Grid container>
                  <Grid item xs={5}>
                    <CardContent>
                      <img
                        alt=''
                        src={imgA}
                        width={50}
                        height={50}
                        style={{
                          objectFit: "fill",
                          margin: 0,
                          borderRadius: 30
                        }}
                      ></img>
                    </CardContent>
                  </Grid>
                  <Grid item xs={7}>
                    <CardContent sx={{ marginLeft: -6, marginTop: -1}}>
                      <Typography variant="h7" component="div">
                        {review[0]}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        {review[1]}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </ListItem>
          </Link>
          <Divider variant="inset" component="li" />
          <Link style={{ textDecoration: 'none'}}>
            <ListItem alignItems="flex-start" sx={{":hover": {transform: "scale(1.02)"}}}>
              <Card sx={{ width: 550, height: 100 }}>
                <Grid container>
                  <Grid item xs={5}>
                    <CardContent>
                      <img
                        alt=''
                        src={imgA}
                        width={50}
                        height={50}
                        style={{
                          objectFit: "fill",
                          margin: 0,
                          borderRadius: 30
                        }}
                      ></img>
                    </CardContent>
                  </Grid>
                  <Grid item xs={7}>
                    <CardContent sx={{ marginLeft: -6, marginTop: -1}}>
                      <Typography variant="h7" component="div">
                        {review[0]}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        {review[1]}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </ListItem>
          </Link>
          <Divider variant="inset" component="li" />
          <Link style={{ textDecoration: 'none'}}>
            <ListItem alignItems="flex-start" sx={{":hover": {transform: "scale(1.02)"}}}>
              <Card sx={{ width: 550, height: 100 }}>
                <Grid container>
                  <Grid item xs={5}>
                    <CardContent>
                      <img
                        alt=''
                        src={imgA}
                        width={50}
                        height={50}
                        style={{
                          objectFit: "fill",
                          margin: 0,
                          borderRadius: 30
                        }}
                      ></img>
                    </CardContent>
                  </Grid>
                  <Grid item xs={7}>
                    <CardContent sx={{ marginLeft: -6, marginTop: -1}}>
                      <Typography variant="h7" component="div">
                        {review[0]}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                        <StarIcon sx={{color: '#ffcc33', fontSize: 17, marginBottom: -0.5}}/>
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        {review[1]}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </ListItem>
          </Link>
        </List>
      </Grid>}
    </Grid>
  )
}

export default Dashboard;
