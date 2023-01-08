import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styles from "./a.css";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import imgA from './profile.png';
import Restaurant from './restaurant.jpg'
import Link from '@mui/material/Link';
import { spacing } from '@mui/system';
import { Scale } from '@mui/icons-material';
import { Label } from '@mui/icons-material';

// import StarIcon from '@mui/icons-material/Star';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Dashboard() {
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
  const [value, setValue] = useState("Art Dog");
  const [size, setSize] = useState(false);
  const [more, setMore] = useState(true);
  const [rev, showReview] = useState(true);
  return (
    <Grid container spacing={10}>
      <Grid item xs={4}>
        <>
          <img
            alt=''
            src={imgA}
            width={250}
            height={250}
            style={{
              borderRadius: 100
            }}
          ></img>
          <Grid item xs={4} sx={{
            marginTop: 3,
            fontWeight: "bold",
            minwidth: 500
          }}>
            {show && <label>{value}</label>}
          </Grid>
          {show && <Button variant="outlined" sx={{ width: 250, marginTop: 1 }} onClick={() => toggleShow(!show)}>
            Edit profile
          </Button>}
          {!show &&
            <TextField
              id="outlined-required"
              label="Email"
              defaultValue={email}
              disabled
              size="small"
              sx={{ width: 250 }}
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
        <Link href="#" underline="none">
          {/* 더보기 X */}
          {more && <Card sx={{ width: 550 }} onMouseEnter={() => { setSize(false) }} onMouseLeave={() => { setSize(true) }}>
            <Grid container>
              <Grid item xs={5}>
                <CardContent sx={{ paddingRight: 0 }}>
                  <img
                    alt=''
                    src={Restaurant}
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
                    {restaurant[0]}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    {restaurant[1]}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5, marginTop: 1 }} color="text.secondary">
                    {restaurant[2]}
                  </Typography>
                  {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star Restaurant_starIcon__NVFG4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                </svg> */}
                </CardContent>
              </Grid>
              <Grid item xs={2}>
                <CardContent>
                  <Typography sx={{ fontSize: 14, textAlign: "end" }} gutterBottom>
                    {restaurant[3]}
                  </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: 5 }}>
                  <Button size="small" sx={{ marginLeft: 1.5 }} onClick={() => { setMore(!more); showReview(false);}}>더보기 ⟩</Button>
                </CardActions>
              </Grid>
            </Grid>
          </Card>}
          {/* 더보기 O */}
          {!more && <Card sx={{ width: 450 }} onMouseEnter={() => { setSize(false) }} onMouseLeave={() => { setSize(true) }}>
            <Grid container>
              <Grid item xs={5}>
                <CardContent sx={{ paddingRight: 0 }}>
                  <img
                    alt=''
                    src={Restaurant}
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
                    {restaurant[0]}
                  </Typography>
                  <Typography sx={{ fontSize: 13 }} gutterBottom>
                    {restaurant[1]}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5, marginTop: 1, fontSize: 13 }} color="text.secondary">
                    {restaurant[2]}
                  </Typography>
                  {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star Restaurant_starIcon__NVFG4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                </svg> */}
                </CardContent>
              </Grid>
              <Grid item xs={2}>
                <CardContent>
                  <Typography sx={{ fontSize: 14, textAlign: "end" }} gutterBottom>
                    {restaurant[3]}
                  </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: 5 }}>
                  <Button size="small" onClick={() => { setMore(!more) }}> {more ? "더보기 ⟩" : "접기 ⟨"}</Button>
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
        {/* 더보기 X */}
        {more && <Grid container>
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
                      <Link href="#" underline="hover">
                        {review[0]} ➜
                      </Link>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                      별 5개
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
                    <Button size="small" sx={{ marginLeft: 1 }} onClick={() => { setMore(!more); showReview(true); }}>{more ? "더보기 ⟩" : "접기 ⟨"} </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>}
        {/* 더보기 O */}
        {!more && <Grid container>
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
                      <Link href="#" underline="hover">
                        {review[0]} ➜
                      </Link>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                      별 5개
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
                    <Button size="small" sx={{ marginLeft: 1 }} onClick={() => { setMore(!more); showReview(!rev); }}>{more ? "더보기 ⟩" : "접기 ⟨"}</Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>}
      </Grid>
      {!more && !rev && <Grid item xs={4} sx={{ marginLeft: -8, marginRight: -20 }}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',textAlign: 'center', fontWeight: 'bold' }}>
          내가 좋아요한 식당들
          <ListItem alignItems="flex-start">
              <Card sx={{ width: 550, height: 100 }} onMouseEnter={() => { setSize(false) }} onMouseLeave={() => { setSize(true) }}>
                <Grid container>
                  <Grid item xs={5}>
                    <CardContent>
                      <img
                        alt=''
                        src={Restaurant}
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
                        {restaurant[0]}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        {restaurant[1]}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
              <Card sx={{ width: 550, height: 100 }} onMouseEnter={() => { setSize(false) }} onMouseLeave={() => { setSize(true) }}>
                <Grid container>
                  <Grid item xs={5}>
                    <CardContent>
                      <img
                        alt=''
                        src={Restaurant}
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
                        {restaurant[0]}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        {restaurant[1]}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
              <Card sx={{ width: 550, height: 100 }} onMouseEnter={() => { setSize(false) }} onMouseLeave={() => { setSize(true) }}>
                <Grid container>
                  <Grid item xs={5}>
                    <CardContent>
                      <img
                        alt=''
                        src={Restaurant}
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
                        {restaurant[0]}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        {restaurant[1]}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
          </ListItem>
        </List>
      </Grid>}
      {!more && rev && <Grid item xs={4} sx={{ marginLeft: -8, marginRight: -20 }}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',textAlign: 'center', fontWeight: 'bold' }}>
          내가 쓴 리뷰
          `<ListItem alignItems="flex-start">
              <Card sx={{ width: 550, height: 100 }} onMouseEnter={() => { setSize(false) }} onMouseLeave={() => { setSize(true) }}>
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
                        별 5개
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        {review[1]}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
              <Card sx={{ width: 550, height: 100 }} onMouseEnter={() => { setSize(false) }} onMouseLeave={() => { setSize(true) }}>
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
                        별 5개
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        {review[1]}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
              <Card sx={{ width: 550, height: 100 }} onMouseEnter={() => { setSize(false) }} onMouseLeave={() => { setSize(true) }}>
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
                        별 5개
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        {review[1]}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
          </ListItem>
        </List>
      </Grid>}
    </Grid>
  )
}

export default Dashboard;

