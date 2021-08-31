import React from 'react'
import cssModule from './BackDrop.module.css';
function BackDrop(props) {
    return (
        <div className={cssModule.backdrop} onClick={props.onBlackDropCancel}>

        </div>
    )
}

export default BackDrop
