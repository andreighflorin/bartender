import { useEffect } from 'react'
import { useData } from '../hooks/useData'

const useFetch = (url) => {

  const { updateData } = useData();

  useEffect(() => {
    const interval = setInterval(() =>{
      fetch(url)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        updateData(data);
      })
      .catch(err => {
        // auto catches network / connection error
        console.log(err);
      })
    }, 2500);
    return () => clearInterval(interval);
  }, [url])

}
 
export default useFetch;
