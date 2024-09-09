import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw Error("Could not fetch data for that resource");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Data fetched :", data);
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    // console.log(err.message);
                    setError(err.message);
                    setIsLoading(false);
                })
        }, 1000)
    }, [url])

    return { data, isLoading, error };
}

export default useFetch;