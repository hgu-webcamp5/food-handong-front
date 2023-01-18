import * as React from 'react';

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
            label="Email"
            color="secondary"
            size="small"
            fullWidth
          />
          <TextField
            className={styles.textField}
            label="Name"
            color="secondary"
            size="small"
            fullWidth
          />
          <TextField
            className={styles.textField}
            label="Nickname"
            color="secondary"
            size="small"
            fullWidth
          />
         

          <Box className={styles.submitBtnContainer}>
            <Button
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
