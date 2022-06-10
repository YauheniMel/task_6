import { Box } from '@mui/material';
import React, { FC } from 'react';
import Form from '../components/Form/Form';
import Seed from '../components/Seed/Seed';
import TableComponent from '../components/Table/TableComponent';

const fakeData = [
  {
    number: 1,
    id: 11,
    fullName: 'Tom Tom',
    address: 'Lithuania, Vilnius, Vitautas 3-10',
    phone: '455-65638',
  },
  {
    number: 2,
    id: 12,
    fullName: 'Bill Bill',
    address: 'USA, California, Street 3-10',
    phone: '455-65638',
  },
  {
    number: 3,
    id: 13,
    fullName: 'John Blakssss',
    address: 'USA, California, Street 3-10',
    phone: '555-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
  {
    number: 4,
    id: 14,
    fullName: 'Иван Иванов',
    address: 'Россия, Москва, Алтуфьево 3-10',
    phone: '24-433002-65638',
  },
];

const FakerPage: FC<any> = function ({
  country,
  mistakes,
  selectCountry,
  setCountMistakes,
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
        />
        <Seed />
      </Box>
      <TableComponent data={fakeData} />
    </div>
  );
};

export default FakerPage;
