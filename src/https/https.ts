import { API_URL } from '../consts/consts';
import { IDogsRequstResponse, INumbersPairedResponse } from '../types/types';

const controller = new AbortController();
const signal = controller.signal;

const makeRequest = async (): Promise<IDogsRequstResponse> => {
  const urls = [API_URL, API_URL];
  const promises = urls.map(url => fetch(url, { signal }));
  try {
    const responses = await Promise.all(promises);
    const data = await Promise.all(responses.map(response => response.json()));
    return { data };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return { error: errorMessage, data: [] };
  }
};

export const isNumbersPaired = async (): Promise<INumbersPairedResponse> => {
  let isPaired = false;
  const response = await makeRequest();
  if (response.error) {
    return { errorMessage: response.error, isPaired };
  }
  const numbersCount = response.data.reduce((prev, current) => {
    return prev + current;
  }, 0);
  if (numbersCount % 2 === 0) {
    isPaired = true;
    controller.abort();
    return { isPaired };
  }
  return { isPaired };
};
