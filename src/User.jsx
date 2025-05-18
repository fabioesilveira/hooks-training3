import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function User() {
    
    const[data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setData(req.data)
        }
        fetchApi();
    }, [id])

    if (!data) return <p>Loading...</p>;
    
    return (
        <>
        <h2>{data.name}</h2>
        <h3>{data.email}</h3>
        </>
    )
}