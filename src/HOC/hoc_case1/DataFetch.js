import React,{useState, useEffect} from 'react'
import axios from 'axios';
import List from './List';
import WithLoadingHOC from './WithLoadingHOC';
const ListWithLoading = WithLoadingHOC(List);
const url = "https://api.github.com/users/hacktivist123/repos";

function DataFetch() {
    const [data, setData] = useState({isLoading:true, repos:null})
    const getData=()=>{
        axios.get(url)
        .then((respond)=>{
            setData({isLoading:false, repos:respond.data});
        })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
       <ListWithLoading isLoading={data.isLoading} repos={data.repos}/>
    )
}

export default DataFetch
