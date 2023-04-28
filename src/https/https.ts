import { API_URL } from '../consts/consts';
import { DogsRequstType, INumbersPairedReponse } from '../types/types';

const controller = new AbortController();
const signal = controller.signal;

const makeRequest = async (): Promise<DogsRequstType> => {
  const urls = [API_URL, API_URL];
  const promises = urls.map(url => fetch(url, { signal }));
  return Promise.all(promises)
    .then(responses => {
      return Promise.all(responses.map(response => response.json()));
    })
    .catch(error => {
      return error.message;
    });
};

export const isNumbersPaired = async (): Promise<INumbersPairedReponse> => {
  const data = { isPaired: false };
  const response = await makeRequest();
  if (typeof response === 'string') {
    return { errorMessage: response, ...data };
  }
  const numbersCount = response.reduce((prev, current) => {
    return prev + current;
  }, 0);
  if (numbersCount % 2 === 0) {
    controller.abort();
    return { ...data, isPaired: true };
  }
  return data;
};
