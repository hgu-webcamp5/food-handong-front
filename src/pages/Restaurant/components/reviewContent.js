import { useState } from 'react';
import {
  CardContent,
  Button,
  ButtonGroup,
  Typography,
  TextField,
  IconButton,
  Grid,
  Rating,
  Divider,
  Paper,
} from '@mui/material';
import { grey, red, teal } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import Reply from './reply';
import { displayedAt } from '../utils/displayTime';

function ReviewContent({ reviewObj }) {
  console.log(reviewObj);
  const { createdTime, userName, rating, review, imageUrl } = reviewObj;
  const heartNum = 0;
  const replyNum = 0;
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
              <Typography>{userName}</Typography>
            </Grid>
            <Grid item xs={2.7}>
              <ButtonGroup
                variant="outlined"
                size="small"
                align="end"
                aria-label="좋아요 댓글 버튼"
              >
                <Button value="heart">좋아요</Button>
                <Button value="comment" onClick={handleWriteClick}>
                  댓글
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={1} sx={{ marginTop: 0.5 }}>
              <Typography>{displayedAt(createdTime)}</Typography>
            </Grid>
          </Grid>
          <div style={{ display: 'flex', marginBottom: 4 }}>
            <Rating value={rating} readOnly />
            <Typography style={{ marginLeft: 4, fontSize: 17 }}>{rating}</Typography>
          </div>
          {imageUrl && (
            <img style={{ marginBottom: 15 }} src={imageUrl} width="180" height="100" alt="" />
          )}
          <Typography>{review}</Typography>

          <div>
            <IconButton
              sx={{ color: red[400], paddingBottom: 0, marginBottom: -1.8, size: 'small' }}
              aria-label="좋아요 수"
            >
              <FavoriteIcon />
              <Typography sx={{ fontSize: 17, color: red[400] }}>{heartNum}</Typography>
            </IconButton>
            <IconButton
              onClick={handleCommentClick}
              sx={{ color: teal[400], paddingBottom: 0, marginBottom: -2, size: 'small' }}
              aria-label="댓글"
            >
              <CommentIcon />
              <Typography>{replyNum}</Typography>
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
      <div>{commentShow && <Reply review={reviewObj} />}</div>
    </div>
  );
}

export default ReviewContent;
