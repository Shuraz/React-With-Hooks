import React,{useState, useEffect} from 'react'
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/posts';

function AxiosTest() {
    const [urlData, seturlData] = useState([])
     
    const getData=()=>{
        axios.get(url)
        .then((resp)=>{
            console.log(resp)
            seturlData(resp.data);
        })
    };

    const deleteHandle =(id)=>{
        console.log("test" + id);
        let newData = urlData.filter((item)=>item.id!==id);
        seturlData(newData);
    };

    useEffect(()=>{
        getData();
    },[])

    return (
        <div>
            {
                urlData.map((item)=>{
                    return(
                        <div key={item.id}>
                        <h1>{item.id}</h1>
                        <button onClick={()=>{deleteHandle(item.id)}}>Delete</button>
                        <p>{item.body}</p>
                        </div>
                    )
                  
                   
                })
            }
        </div>
    )
}

export default AxiosTest
