import { useState, useEffect } from 'react';

const useFetch = (path = '/', trigger = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const URL = 'http://192.168.43.105:8080';

  const fetchData = async (options = {}) => {
    console.log(options)
    try {
      const response = await fetch(`${URL}${path}`,options);
      setLoading(true);

      if (!response.ok) {
        console.log(response.ok,response.status)
        throw new Error(response.status);
      }
      const result = await response.json();

      console.log(result)
      setLoading(false);
      setData(result);
    } catch (error) {
       console.log(error.message)
      setError(error);
  
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(trigger)
    fetchData();
  }, [path]);

  return { data, loading, error, fetchData };
};

export default useFetch;