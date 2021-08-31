
import {useState, useEffect} from 'react'

export function useFetch(url) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData= async()=>{
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [url]);




    return (
       {loading, data}
    )
}

// export default useFetch
