import React, { useEffect } from 'react';
import './index.css';

import Vivus from 'vivus';
import svgIcon from './x.svg';

const Cell = () => {
    function handleClick(e) {
        const cell = e.currentTarget;

        // cell.innerText = 'X';
        new Vivus(
            cell,
            {
                type: 'delayed',
                duration: 40,
                file: svgIcon,
                animTimingFunction: Vivus.EASE
            },
        );
    }

    
    
    return(
        <div className='cell' onClick={handleClick}></div>
    )
}

export default Cell;