import axios from 'axios';

export default async function getData(command, page = 0) {
  const response = await axios.post(`/api/data/${page}`, { command });

  // eslint-disable-next-line @typescript-eslint/return-await
  return response.data;
}
