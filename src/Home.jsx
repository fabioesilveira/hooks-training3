import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Home() {

    const [data, setData] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get("https://jsonplaceholder.typicode.com/users");
            setData(req.data)
        }
        fetchApi()
    }, [])

  function handleNavigate(id) {
    navigate(`/user/${id}`)
  }

    return (
        <>
            <div>
                {!data ?
                    <span>Loading...</span> :
                    data.map((e, i) => (
                        <div key={e.id} onClick={() => handleNavigate(e.id)} style={{ cursor: "pointer" }}>
                            <h2>{e.name}</h2>
                            <h3>{e.email}</h3>
                        </div>
                    ))}
            </div>
        </>
    )
}