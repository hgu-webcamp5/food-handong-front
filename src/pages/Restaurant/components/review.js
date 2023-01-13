import {useState} from 'react';
import {
    Box,
    Grid,
    Avatar,
    Tab,
    Tabs,
  } from '@mui/material';
import ReviewContent from './reviewContent';
import userImgUrl from '../../../assets/images/user.png';

function Review({reviews}) {

    const [tab, setTab] = useState('1');
  
    const handleTabChange = (event, newValue) => {
      setTab(newValue);
    };
  
    // const [heart1, setHeart1] = useState(1);
  
    // const handleHeartClick1 = () => {
    //   setHeart1((currentValue) => currentValue + 1);
    //   console.log(heart1);
    // };
  
    // const [heart2, setHeart2] = useState(0);
  
    // const handleHeartClick2 = () => {
    //   setHeart2((currentValue) => currentValue + 1);
    //   console.log(heart2);
    // };
  
    return (
      <div>
        <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', marginLeft: 5 }}>
          <Tabs value={tab} onChange={handleTabChange} sx={{ marginLeft: '70%' }}>
            <Tab label="최신순" value="1" />
            <Tab label="오래된 순" value="2" />
          </Tabs>
        </Box>
        {reviews.map((review) => (
            <Grid container sx={{ paddingTop: 3 }}>
            <Grid item xs={2}>
              <Avatar src={userImgUrl} sx={{ width: 73, height: 73, marginTop: 5 }} aria-label="김성경">
                김
              </Avatar>
            </Grid>
            <Grid item xs={10}>
              <ReviewContent review={review} key={review.id}/>
             </Grid>
           </Grid>
        ))}
      </div>
    );
  }

  export default Review;