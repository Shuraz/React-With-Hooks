import axios from 'axios';
import React,{useState} from 'react'

function MultipleRequest() {
    const [state1, setstate1] = useState([]);
    const [state2, setstate2] = useState([]);

    const handleGetData=()=>{
        console.log("getting url");
        axios.all([
            axios.get("https://jsonplaceholder.typicode.com/users"),
            axios.get("https://jsonplaceholder.typicode.com/posts")
        ])
        .then((res)=>{
            console.log(res[0].data);
            setstate1(res[0].data);
            console.log(res[1].data);
            setstate2(res[1].data);
        })
    }
    return (
        <div>
            <h1>Simultaneous Request</h1>
            
            <button onClick={handleGetData}>Get Data</button>
            <h1>URL     .................1</h1>
            {
                state1.map((item)=>{
                    return(
                        <div key={item.id}>
                            <p>{item.id}</p>
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
                <h1>URL     ..................2</h1>
            {
                state2.map((item)=>{
                    return(
                        <div key={item.id}>
                            <p>{item.id}</p>
                            <p>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MultipleRequest
