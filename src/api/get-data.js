import axios from 'axios';

export default async function getData(command) {
  const response = await axios.post('/api/data', { command });

  // eslint-disable-next-line @typescript-eslint/return-await
  return response.data;
}
