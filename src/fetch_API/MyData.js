import React, {useState, useEffect} from 'react'

function MyData() {

  const [users, setUsers] = useState([]);

    const fetchData=()=>{
        fetch('https://reqres.in/api/users')
        .then(response=>{
             // console.log(response);
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        
        }).then(data=>{
            // console.log(data.data);
            setUsers(data.data);
        }).catch(error=>{
            console.log(error);
        })
    }


  useEffect(() => {
    fetchData();
  }, []);


     
    //  console.log(users);
    return (
        <div className="App">
                <h1>Fetching Data</h1>
                {
                    users.map((user)=>{
                        return (
                            <div>
                                <h2>{user.first_name}</h2>
                                <h4>{user.last_name}</h4>
                            </div>
                        )
                    })
                }
               
        </div>
    )
}

export default MyData
