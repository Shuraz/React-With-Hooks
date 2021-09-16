import axios from 'axios';
import React,{useState, useEffect} from 'react'
const url = "https://jsonplaceholder.typicode.com/posts";
function GetComponent() {

    const [state, setstate] = useState([])
    // const getData=()=>{
    //     axios.get(url
    //         // ,{params:{ _limit:5}}
    //     )
    //     .then((resp)=>{
    //         setstate(resp.data);
    //         // return resp
    //     })
    //     .catch((error)=>{
    //             console.log(error);
    //     })
    // }
    useEffect(()=>{
        // getData();
    },[])
    
    function createPost() {
        axios
          .post(url, { data:{
            title: "Hello World!",
            body: "This is a new post."
          }   
          })
          .then((response) => {
            setstate(response.data);
          });
      }
    const createPut=()=>{
        //put: replace the orginal data whereas patch: works like patch ie. only change the data you patch other remains as before.
        axios.patch(url+`/1` ,
            {data:{
            title: "Hello World, Suraj!",
           
            }
            })
            .then((response) => {
                setstate(response.data);
              });
    }
    console.log(state);
    if(!state) return "NO post"
    return (
        <div>
            <h1>Axios</h1>
            <button onClick={createPost}>Create Post</button>
            <button onClick={createPut}>Create Put Request</button>
            {/* {state && state.map((item)=>{
                    const {id,title, body}=item;
                    return(
                        <div key={id} style={{"margin":"25px 50px", "border":"solid 2px red" }}>
                            <p>{id}</p>
                            <p>{title}</p>
                            <p>{body}</p>
                        </div>
                    )
                })
            } */}
        </div>
    )
}

export default GetComponent
