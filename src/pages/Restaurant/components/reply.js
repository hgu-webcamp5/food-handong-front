import {
  Typography,
  IconButton,
  Grid,
  Avatar,
  Paper,
} from '@mui/material';
import { amber } from '@mui/material/colors';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import userImgUrl from '../../../assets/images/user.png';

function Reply({review}) {
    const {reply} = review;
    return (
        <div>
            {reply.map((reply) => (
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
                    <Typography sx={{ padding: 0.7 }}>{reply.name}</Typography>
                    <Typography sx={{ fontSize: 17, padding: 0.5 }}>{reply.comment}</Typography>
                    </Paper>
                </Grid>
                </Grid>
            </div>
            ))}
        </div>
   );
  }
  
  export default Reply;