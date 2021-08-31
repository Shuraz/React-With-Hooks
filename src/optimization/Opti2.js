import React,{useState,useEffect, useCallback, useMemo} from 'react'
import { useFetch } from './useFetch';
const url = 'https://course-api.com/javascript-store-products';

const calculateMostExpensive=(data)=>{
        console.log('...calculation....')
 return (   
     data.reduce((total,item)=>{
        const price=item.fields.price;
        if(price>=total){
            total=price;
        }
        return total;
    },0)/100
    );};

function Opti2() {
    const {Product}= useFetch(url);
    const [Count, setCount] = useState(0);
    const [Cart, setCart] = useState(0);
    
    const addToCart=useCallback(()=>{
        setCart(Cart+1);
    },[Cart]);

    const expensiveItem=useMemo(()=>{
        calculateMostExpensive(Product)
    },[Product])
    return (
        <div>   
            <h1>Optimization 2</h1>
            <h2>Count: {Count}</h2>
           
            <button onClick={()=>{setCount(Count+1)}}>Click Me</button>
             <h4 style={{ color:'red' }}>Cart: {Cart}</h4>
             <h4>{expensiveItem}</h4>
            <BigList products={Product} addToCart={addToCart}/>
        </div>
    )
}   


 const BigList= React.memo(({products, addToCart})=> {
    useEffect(()=>{
    console.count(` ....biglist calling`);
    })
      console.count(` ....biglist callingedddddd`);
    return(
        <section>
            {
                products.map ((product)=>{
                 return <SingleProduct key={product.id}{...product} addToCart={addToCart}/>
                })
            }
            
        </section>
    )
    
});

const SingleProduct =({fields, addToCart})=> {
    useEffect(()=>{
    console.count('...single product calling')
    })
        let{name, price}=fields;
        price=price/100;
        const image=fields.image[0].url;

        return(
            <article>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>{price}</p>
                <button onClick={addToCart}>Add Cart</button>
            </article>

        );
}
export default Opti2
