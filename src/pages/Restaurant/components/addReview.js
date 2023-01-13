import { useState, useCallback} from 'react';
import {
  CardContent,
  Button,
  Typography,
  TextField,
  IconButton,
  Rating,
  Paper,
  Stack,
} from '@mui/material';
import { grey, red, yellow} from '@mui/material/colors';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function AddReview({onInsert}) {
    const [textValue, setTextValue] = useState('');
    const [rateValue, setRateValue] = useState(0);
    const [image, setImage] = useState(null);

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    }
    const handleRateChange = (event, newValue) => {
        setRateValue(newValue);
    }

    const handleImageUpload = (event) => {
        if(event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(URL.createObjectURL(img));
        }
    }

    const onSubmit = useCallback(
        e => {
            console.log("submit");
            onInsert(textValue, rateValue);
            setTextValue('');
            setRateValue(0);
            e.preventDefault();
        },[onInsert, textValue, rateValue]
    )

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
          <Rating value={rateValue} onChange={handleRateChange} sx={{ padding: 1 }} size="large" />
          <TextField
            id="outlined-textarea"
            placeholder="리뷰를 적어주세요"
            multiline
            sx={{ width: '100%' }}
            rows={3}
            onChange={handleTextChange}
          />
          <Stack direction="row" spacing={28}>
            <img src={image} width="100" height="80" style={{marginTop: 5}}/>
            <div>
                <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={handleImageUpload}/>
                <PhotoCamera />
                </IconButton>
                <Button
                sx={{ bgcolor: red[400], color: grey[50], margin: 3, paddingLeft: 5, paddingRight: 5 }}
                onClick={onSubmit}>
                리뷰 추가
                </Button>
            </div>
          </Stack>
        </CardContent>
      </Paper>
    );
  }

  export default AddReview;