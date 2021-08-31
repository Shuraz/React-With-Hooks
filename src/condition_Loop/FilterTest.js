import React from 'react'

function FilterTest() {
    const nums = [54,65,756,32,1,5,7,333];
   const largestNum=  nums.filter((num)=>{ return num>100})

    return (
        <div>
            {
                largestNum.map((num)=>{
                    return <h1>{num}</h1>
                })
            }
        </div>
    )
}

export default FilterTest
