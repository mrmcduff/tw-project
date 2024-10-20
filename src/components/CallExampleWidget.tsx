import { useEffect } from 'react';
import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

const client = axios.create({
  baseURL: 'https://api.polygon.io'
});

export function CallExampleWidget() {
  const apiKey = import.meta.env.VITE_POLYGON_IO_API_KEY;

  useEffect(() => {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${apiKey}`
      } as RawAxiosRequestHeaders
    };
    async function getSimpleData() {
      await client
        .get('v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09', config)
        .then((res) => console.log(res.data))
        .catch((reason) => console.error(reason));
    }
    getSimpleData();
  }, [apiKey]);
  return <div>Hello</div>;
}
