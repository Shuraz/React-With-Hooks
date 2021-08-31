import React, {useState} from 'react'
import cssModule from './TodoList.module.css';
import Modal from './Modal'
import BackDrop from './BackDrop';
function TodoList({title,detail}) {
const [isModalOpen, setModalOpen] = useState(false);

    const deleteHandle=()=>{
        console.log("delete")
        setModalOpen(true)
        
    }
    const closeModalHandler=()=>{
        console.log("modle handler close")
        setModalOpen(false);
    }


    return (
        <>
        <div className={cssModule.card}>
            <h1>{title}</h1>
            <p>{detail}</p>
            <button onClick={deleteHandle}>Delete It</button>
        </div>
            { isModalOpen && <Modal onConform={closeModalHandler} onCancel={closeModalHandler}/> }
            { isModalOpen && <BackDrop  onBlackDropCancel={closeModalHandler}/>}
        </>
    )
}

export default TodoList
