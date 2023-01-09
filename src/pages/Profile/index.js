import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import styles from './Profile.module.css';

function Profile() {
  return (
    <>
      <Box className={styles.root}>
        <Paper className={styles.container}>
          <Typography className={styles.title} variant="h6">
            Profile
          </Typography>
          <TextField
            className={styles.textField}
            // disabled
            // value={user.email}
            label="Email"
            color="secondary"
            size="small"
            fullWidth
          />
          <TextField
            className={styles.textField}
            // value={newDisplayName}
            // onChange={(e) => setNewDisplayName(e.target.value)}
            label="Name"
            color="secondary"
            size="small"
            fullWidth
          />
          <TextField
            className={styles.textField}
            label="Age"
            color="secondary"
            size="small"
            fullWidth
          />
          <FormControl className={styles.textField}>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <Box className={styles.submitBtnContainer}>
            <Button
              // onClick={saveProfile}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Profile;
