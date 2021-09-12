import React,{useEffect} from 'react'

function Modal({modalContent, closeModal}) {
    useEffect(()=>{
        setTimeout(()=>{
            closeModal();
        },3000)
    })
    return (
        <div>
           <p>{modalContent}</p>
        </div>
    )
}

export default Modal
