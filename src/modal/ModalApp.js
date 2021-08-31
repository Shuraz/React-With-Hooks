import React from 'react'
import TodoList from './TodoList'

function ModalApp() {
    return (
        <>
        <h1>My List to do</h1>
        <div>
            
            <TodoList title="lunch" detail="I will have my lunch at 1 pm today."/>
            <TodoList title="JavaScript Day2" detail="I will finish before 1 pm."/>
        </div>
        </>
    )
}

export default ModalApp
