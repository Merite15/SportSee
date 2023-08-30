import { useEffect, useState } from 'react';
import { ErrorData } from '@/models/ErrorData';

/**
 * The `useFetchData` function is a custom hook in TypeScript React that fetches data from a given URL,
 * handles loading and error states, and returns the fetched data, loading state, error state, and
 * error object.
 * @param {string} url - The URL from which to fetch the data.
 * @param {number} timer - The `timer` parameter is the time in milliseconds that the function will
 * wait before fetching the data. This can be useful for simulating loading times or delaying the
 * request.
 * @param {any} Factory - The `Factory` parameter is a class or function that is used to create an
 * instance of a specific data model. It is responsible for processing the raw data received from the
 * API and transforming it into the desired format.
 * @param {string} apiType - The `apiType` parameter is a string that represents the type of API being
 * used. It is used in the `Factory` function to create an instance of a specific class based on the
 * API type.
 * @returns The function `useFetchData` returns an array with four elements: `data`, `isLoading`,
 * `isError`, and `error`.
 */
export const useFetchData = (url: string, timer: number, Factory: any, apiType: string) => {
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
