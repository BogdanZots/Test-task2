import { useEffect, useState } from 'react';
import { INumbersPairedReponse, IUseRequestResponse } from '../types/types';

export const useRequest = <T extends () => Promise<INumbersPairedReponse>>(
  cb: T,
): IUseRequestResponse => {
  const [response, setResponse] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await cb();
      if (data.errorMessage) {
        setErrorMessage(data.errorMessage);
        setIsLoading(false);
        return;
      }
      if (!data.isPaired) {
        fetchData();
        setIsLoading(false);
        return;
      }
      setResponse(data.isPaired);
    };
    fetchData();
  }, []);

  return { response: response ? response : false, errorMessage, isLoading };
};
