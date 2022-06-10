import React, { FC, useState } from 'react';
import { Button, TextField } from '@mui/material';
import classes from './Seed.module.scss';
import setSeedCommand from '../../service/set-seed-command';

const Seed: FC<any> = function () {
  const [seedValue, setSeedValue] = useState();
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(setSeedCommand(seedValue));
  }

  const handleChange = (event: any) => {
    setSeedValue(event.target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit} style={{ maxWidth: 160 }}>
      <fieldset
        style={{
          backgroundColor: '#616161',
          border: 'none',
        }}
        className={classes.fieldset}
      >
        <legend style={{ paddingBottom: 20 }}>Random</legend>
        <div className={classes.wrap}>
          <div className={classes.mistakes}>
            <TextField
              type="number"
              label="Random number"
              variant="standard"
              onChange={handleChange}
              value={seedValue}
              required
            />
          </div>
        </div>
        <Button type="submit">Random</Button>
      </fieldset>
    </form>
  );
};

export default Seed;
