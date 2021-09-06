import axios from 'axios';
import React,{useState, useEffect} from 'react'
import {useAxios} from './useAxios';
const url= "https://api.github.com/users/john-smilga/followers?per_page=100";

function PageApp() {
    const { loading, data } = useAxios()
    const [page, setPage] = useState(0)
    const [followers, setFollowers] = useState([])
  console.log(data);
    useEffect(() => {
      if (loading) return
      setFollowers(data[page])
    }, [loading, page])
    const handlePrevious=()=>{
        setPage((oldPage)=>{
            let prePage=oldPage-1;
            if(prePage<0){
                prePage=data.length -1
            }
            return prePage;
        })
    }
    const handlePage=(index)=>{
setPage(index)
    }
    const handleNext=()=>{
        setPage((oldPage)=>{
            let nextPage=oldPage+1;
            if(nextPage>data.length-1){
                nextPage=0
            }
            return nextPage;
        })
    }
    return (
        <div>
            <h1>{loading?'....Loading': 'Pagination'}</h1>

            {followers.map((follower)=>{
                return(
                    <div>
                        <img src={follower.avatar_url} alt={follower.login} style={{width:"250px"}}/>
                        <h3>{follower.login}</h3>
                    </div>
                )
            })}

            {/* {data[0].map((item)=>{
                return(
                    <div>
                        <img src={item.avatar_url} alt={item.login} style={{width:"250px"}}/>
                        <h3>{item.login}</h3>
                    </div>
                )
            })} */}
            { !loading && (
                <div>
                <button onClick={handlePrevious}>Previous</button>
                    {   data.map((item,index)=>{
                        return(
                            <button onClick={()=>{handlePage(index)}}>
                                {index+1}
                            </button>
                        )
                    })

                    }
                <button onClick={handleNext}>Next</button>
                </div>

            )

            }
        </div>
    )
}

export default PageApp
