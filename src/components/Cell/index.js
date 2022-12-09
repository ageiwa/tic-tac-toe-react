import React from 'react';
import './index.css';

const Cell = (props) => {
    return(
        <div className='cell' onClick={props.handleClick}></div>
    )
}

export default Cell;