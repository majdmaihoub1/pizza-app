import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import FormControl from '@mui/material/FormControl';
import validator from 'validator';

const PaymentForm = () => {
  const [date, setDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorHelper, seterrorHelper] = useState(false);
  const [pin, setPin] = useState();

  const handleChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) {
      setPin('');
    } else if (val >= 0 && val < 9999) {
      setPin(val);
    }
  };

  const validateCreditCard = (value) => {
    if (validator.isCreditCard(value)) {
      setErrorMessage('CreditCard Number is valid');
      seterrorHelper(false);
    } else {
      setErrorMessage('Enter valid CreditCard Number!');
      seterrorHelper(true);
    }
  };
  console.log(date);
  return (
    <form noValidate>
      <FormControl sx={{ m: 1 }} variant='standard'>
        <TextField
          id='cardNumber'
          label='Card Number'
          variant='outlined'
          onBlur={(e) => validateCreditCard(e.target.value)}
          helperText={errorMessage}
          error={errorHelper}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }} variant='standard'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={['year', 'month']}
            label='Year and Month'
            minDate={new Date('2012-03-01')}
            maxDate={new Date('2023-06-01')}
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} helperText={null} />
            )}
          />
        </LocalizationProvider>
      </FormControl>
      <FormControl sx={{ m: 1 }} variant='standard'>
        <TextField
          value={isNaN(pin) ? '' : pin}
          type='text'
          id='cardPin'
          label='Card PIN'
          variant='outlined'
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }} variant='standard'>
        <Button variant='contained'>Next</Button>
      </FormControl>
    </form>
  );
};

export default PaymentForm;
