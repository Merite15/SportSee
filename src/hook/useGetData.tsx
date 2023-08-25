import { useEffect, useState } from 'react';
import { ErrorData } from '@/models/ErrorData';

export const FetchData = (url: string, timer: number, Factory: any, apiType: string) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          const userData = new Factory(data, apiType);
          if (!(userData.data instanceof ErrorData)) {
            setData(userData.data);
          } else {
            setIsError(true);
            setError(userData.data);
          }
          setIsLoading(false);
        }, timer);
      })
      .catch(() => {
        setTimeout(() => {
          setIsError(true);
          setIsLoading(false);
          throw new ErrorData('Erreur 400', 'Données non disponibles');
        }, timer);
      });
  }, [url, timer, Factory, apiType]);

  return [data, isLoading, isError, error];
};
