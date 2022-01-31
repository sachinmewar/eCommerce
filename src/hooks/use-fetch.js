import { useEffect, useState } from "react";

const useFetch = (url) => {
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    const setProductData = async() => {
        setLoading(true);
        await fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => setData(data) )
        .catch(setError)
        .finally(setLoading(false));
    };

    useEffect(
        setProductData,
        [url]
    )

    return {data, loading, error};
}

 export default useFetch;

// import React from "react";
// const useFetch = (url) => {
//     const [response, setResponse] = React.useState(null);
//     const [error, setError] = React.useState(null);
//     const [isLoading, setIsLoading] = React.useState(false);
  
//     React.useEffect(() => {
//       const fetchData = async () => {
//         setIsLoading(true);
  
//         try {
//           const res = await fetch(url);
//           const json = await res.json();
  
//           setResponse(json);
//           setIsLoading(false);
//         } catch (error) {
//           setError(error);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//     return { response, error, isLoading };
//   };

//   export default useFetch;