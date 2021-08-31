import React,{useState, useEffect, useCallback} from 'react'
import UserQuestion from './UserQuestion'
import {useFetch} from './useFetch'
const url='https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=votes&site=stackoverflow';

function MyApp() {

   const {usersState} = useFetch(url);
    let questionNo=0;
    return (
        <section>
            <h1 className="title">Top 10 Questions on Stack Overflow!!!!!</h1>
                {  
                   usersState.map((user)=>{
                       questionNo +=1;
                        //  console.log(questionNo)
                        return(
                          
                            <UserQuestion key={user.question_id} questionNo={questionNo} {...user}/>
                            )
                    })
                }
         
        </section>
    )
}

export default MyApp
