import React from 'react' ; 
import { useState ,useEffect,useCallback} from 'react';

const useFecthAll = (API_URL , options = null) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const loadBooks = [];
     // console.log(data.data)
      for(const key in data.data){
        //console.log(key)
        loadBooks.push(data.data[key])
       
      }
      setBooks(loadBooks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
    // const [data,setData] = useState(null);
    // useEffect(() => {
    //     fetch(API_URL, options)
    //       .then(res => res.json())
    //       .then(data => setData(data));
    //   }, [API_URL, options]);
    useEffect(()=> {
      fetchBooksHandler()
    },[fetchBooksHandler]);
    return [books,isLoading];
}
export default useFecthAll;