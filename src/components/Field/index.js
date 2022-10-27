import React from 'react';
import './index.css';

const Field = () => {
    function handleClick(event) {
        console.log(event.currentTarget)
    }

    const cells = [];
    
    for (let i = 0; i < 9; i++) {
        cells.push(<div className='field__cell' onClick={handleClick} key={i}></div>);
    }

    return(
        <div className='field'>
            {cells}
        </div>
    )
}

export default Field;