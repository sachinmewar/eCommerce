import { useEffect, useState } from "react";

const useFetch = (url) => {
    const[data, setData] = useState(null);
    const[loading, isLoading] = useState(false);

    const setProductData = () => {
        isLoading(true)
        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => setData(data) )
        .finally(isLoading(false))
    };

    useEffect(
        setProductData,
        [url]
    )

    return {data, loading};
}

 export default useFetch;