import { Box } from '@mui/material';
import React, { FC } from 'react';
import Form from '../components/Form/Form';
import Seed from '../components/Seed/Seed';
import TableComponent from '../components/Table/TableComponent';

const FakerPage: FC<any> = function ({
  country,
  mistakes,
  selectCountry,
  setCountMistakes,
  data,
  setData,
}) {
  return (
    <div className="container">
      <h2>FAKER</h2>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Form
          selectCountry={selectCountry}
          setCountMistakes={setCountMistakes}
          mistakes={mistakes}
          country={country}
          setData={setData}
        />
        <Seed setData={setData} />
      </Box>
      <TableComponent data={data} />
    </div>
  );
};

export default FakerPage;
