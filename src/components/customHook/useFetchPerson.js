import { useEffect, useState } from 'react';
const useFetchPerson = (url)=>{
    const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState([]);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setLoading(true);
          setIsError(false);
          return;
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setIsError(true);
      }
      setLoading(false);
    };
    fetchUserData();
  }, []);


  return {loading,isError,user}
}

export default useFetchPerson