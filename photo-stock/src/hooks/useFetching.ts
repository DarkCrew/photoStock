import React from 'react';

export const useFetching = (callback: any) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      console.log('DOWNLOADING');
      await callback();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error] as const;
};
