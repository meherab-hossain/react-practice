// import cookies from '@utils/cookies';
import axios from 'axios';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // headers: {
  //   'Authorization': `Bearer ${cookies.get('token')}`,
  //   'Content-Type': 'application/json',
  // }
});

export { http };
