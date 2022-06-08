import React, { FC } from 'react';
import Slider from '@mui/material/Slider';
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import classes from './Form.module.scss';

function valuetext(value: number) {
  return `${value} mistakes`;
}

const Form: FC<any> = function ({
  selectCountry,
  setCountMistakes,
  mistakes,
  country,
}) {
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log('SUBMIT');
  }

  const handleChangeSelect = (event: SelectChangeEvent) => {
    selectCountry(event.target.value);
  };

  const handleChangeSlider = (event: any) => {
    setCountMistakes(event.target.value);
  };

  const handleChangeInputNumber = (event: any) => {
    setCountMistakes(event.target.value);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      style={{ maxWidth: '40%', minWidth: 400 }}
    >
      <fieldset
        style={{
          backgroundColor: '#616161',
          border: 'none',
        }}
        className={classes.fieldset}
      >
        <legend style={{ paddingBottom: 20 }}>Fake data generator</legend>
        <div className={classes.wrap}>
          <div className={classes.country}>
            <InputLabel htmlFor="country">Country</InputLabel>
            <Select
              labelId="country"
              value={country}
              sx={{ width: 160 }}
              color="secondary"
              variant="outlined"
              onChange={handleChangeSelect}
              required
            >
              <MenuItem value="" />
              <MenuItem value="RUS">Russia</MenuItem>
              <MenuItem value="LT">Lithuania</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
            </Select>
          </div>
          <div className={classes.mistakes}>
            <Slider
              aria-label="Mistakes"
              defaultValue={3}
              onChange={handleChangeSlider}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              name="mistake"
              color="secondary"
              value={mistakes}
              step={0.25}
              marks
              min={0}
              max={10}
            />
            <TextField
              type="number"
              label="Standard"
              variant="standard"
              onChange={handleChangeInputNumber}
              value={mistakes}
              InputProps={{ inputProps: { min: 0, max: 1000 } }}
            />
          </div>
        </div>

        <Button type="submit">
          Confirm
          <CheckIcon sx={{ marginLeft: 1 }} />
        </Button>
      </fieldset>
    </form>
  );
};

export default Form;
