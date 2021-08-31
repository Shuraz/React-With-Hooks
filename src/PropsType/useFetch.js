import { useState, useEffect } from "react";

export const useFetch =(url)=>{
    const [products, setProducts] = useState([]);
    
   const getUrlData = async ()=>{
    const response = await fetch(url);
    const urlData = await response.json();
     setProducts(urlData);
   }
   useEffect(()=>{
       getUrlData();
   },[]);

   return {products}

}