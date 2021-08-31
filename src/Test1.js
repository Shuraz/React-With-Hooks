import React from 'react'

// function Test1({age,address,name}) {
    
//     return (
//         <div>   
//             <h1>Props example</h1>
//             <h3>{age}</h3>
//             <h3>{address}</h3>
//             <h3>{name}</h3>
//         </div>
//     )
// }

// or

export function Test1(props) {

    return (
        <div>
                <h2>{props.name}</h2>
                <h2>{props.age}</h2>
                <h2>{props.address}</h2>

        </div>
    );
}


export default Test1;
