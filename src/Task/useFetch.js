
import { useState, useEffect, useCallback } from "react";

export const useFetch =(url)=>{
    const [usersState, setUser] = useState([]);
    
	//useCallback to avoid unnecessary rendering
   const getUrlData = useCallback(async ()=>{
 
	try{
		const response = await fetch(url);
		if(!response.ok){
        	throw new Error("Error in Fetching");
   	 }
	  const urlData = await response.json();
	const data = urlData.items;
     setUser(data);
	}catch(error){
		console.log(error);
	}
  
   },[url])
// useEffect hook with url and getUrlData dependancies to stop infinte loops
   useEffect(()=>{
       getUrlData();
   },[url, getUrlData]);
   return {usersState}

}