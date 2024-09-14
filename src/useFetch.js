import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        console.log("component mounted");
        const abortFetch = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortFetch.signal})
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
                    if(err.name === 'AbortError')
                    {
                        console.log('Fetch aborted');
                    }
                    else
                    {
                        setError(err.message);
                        setIsLoading(false);
                    }
                })
        }, 3000)

        return () => abortFetch.abort();
    }, [url])

    return { data, isLoading, error };
}

export default useFetch;