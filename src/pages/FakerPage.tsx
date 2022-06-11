import React, { FC } from 'react';
import { Box } from '@mui/material';
import Form from '../components/Form/Form';
import Seed from '../components/Seed/Seed';
import TableComponent from '../components/Table/TableComponent';
// import getData from '../api/get-data';

const FakerPage: FC<any> = function ({
  country,
  mistakes,
  selectCountry,
  setCountMistakes,
  setData,
  data,
  setCommand,
  command,
  page,
  setPage,
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
          setCommandStr={setCommand}
        />
        <Seed setCommand={setCommand} setData={setData} />
      </Box>
      <TableComponent
        data={data}
        command={command}
        setData={setData}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default FakerPage;
