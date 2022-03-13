import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import { UserInfoContext } from '../../context/userInfoContext';

const UserInfroForm = () => {
  const { info, setInfo } = useContext(UserInfoContext);
  const handleNextButton = () => {};
  return (
    <form onSubmit={handleNextButton} noValidate>
      <FormControl sx={{ m: 1 }} variant='standard'>
        <Stack spacing={2}>
          <TextField
            id='name'
            label='Name'
            variant='outlined'
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />

          <Stack direction='row' spacing={2}>
            <Grid lg={6}>
              <FormControl fullWidth variant='standard'>
                <TextField
                  id='st'
                  label='Street Name'
                  variant='outlined'
                  onChange={(e) => setInfo({ ...info, st: e.target.value })}
                />
              </FormControl>
            </Grid>{' '}
            <Grid lg={3}>
              <FormControl fullWidth variant='standard'>
                <TextField
                  id='numb'
                  label='House Number'
                  variant='outlined'
                  onChange={(e) => setInfo({ ...info, numb: e.target.value })}
                />
              </FormControl>{' '}
            </Grid>
            <Grid lg={3}>
              <FormControl fullWidth variant='standard'>
                <TextField
                  id='postal'
                  label='Postal code'
                  variant='outlined'
                  onChange={(e) => setInfo({ ...info, postal: e.target.value })}
                />
              </FormControl>{' '}
            </Grid>
          </Stack>
          <TextField
            id='city'
            label='City'
            variant='outlined'
            onChange={(e) => setInfo({ ...info, city: e.target.value })}
          />
          <TextField
            id='Phone'
            label='Enter Phone Number'
            variant='outlined'
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
          />
          <Button variant='contained' onClick={handleNextButton}>
            Next
          </Button>
        </Stack>
      </FormControl>
    </form>
  );
};

export default UserInfroForm;
