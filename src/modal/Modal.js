import React from 'react'
import cssModule from './Modal.module.css'
function Modal(props) {

    const handleYes= ()=>{
        console.log("yes")
        props.onConform();
    }

    const handleNo =()=>{
        console.log("NO")
        props.onCancel();
    }
    return (
        <div className={cssModule.deletebox}>
            <p>Are you sure? Conform to delete!!!</p>
            <button onClick={handleYes}>Conform</button>
            <button onClick={handleNo}>Cancel</button>
            
        </div>
    )
}

export default Modal
