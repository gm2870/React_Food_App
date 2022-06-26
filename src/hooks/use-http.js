import axios from 'axios';
import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios({
        method: requestConfig.method || 'GET',
        url: requestConfig.url || {},
        data: JSON.stringify(requestConfig.data) || null,
      });
      applyData(response.data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  });
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
