import { BASE_URL, API_KEY } from '../utils/CONSTANTS'
import { useState } from 'react';

export const useFetch = (city) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const format_url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;

    const fetchData = () => {
        setLoading(true);
        fetch(format_url)
            .then((response) => response.json())
            .then((data) => {
                setResponse(data);
                setLoading(false);
            })
            .catch((e) => {
                setError(e.message);
                setLoading(false);
            })
    }

    return {
        fetchData,
        response,
        loading,
        error
    }
}
