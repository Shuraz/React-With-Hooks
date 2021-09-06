import React,{useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
const url = 'https://api.github.com/users';

function Pagenate() {
    const [state, setstate] = useState([]);
    const [PageNumber, setPageNumber] = useState(0);

    const getUser=async()=>{
        const response = await fetch(url);
        const user=await response.json();
        setstate(user.slice(0,30));
    }
// auto loading
    useEffect(()=>{
        console.log("use effect loading")
        getUser();
    },[]);

    const itemsPerPage=10;
    const totalVisited= PageNumber * itemsPerPage;
    const currentDisplay=state.slice(totalVisited,totalVisited+itemsPerPage).map((person)=>{
           const {id, login, avatar_url, html_url} = person;
                    return(
                        <li key={id}>
                            <h1>{login}</h1>
                            <img src={avatar_url} alt={login} /><br />
                            <a href={html_url}>profile</a>
                        </li>
                    );
    })
        const pageCount = Math.ceil(state.length/itemsPerPage); 
     const pageChangeHold=({selected})=>{
        setPageNumber(selected)
     }

    return(
        <div>
            {console.log("render div")}
            <h1>Fetch with loading</h1>
            {/* <button onClick={getUser}>Load Users</button> */}
            <ul>
            { currentDisplay}   
            </ul>
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={pageChangeHold}
             />
        </div>
    );
}

export default Pagenate
