import React from 'react';
import './index.css';

import Cell from '../Cell';

const Field = () => {
    const cells = [];

    for (let i = 0; i < 9; i++) {
        cells.push(<Cell key={i} />);
    }

    return(
        <div className='field'>
            {cells}
        </div>
    )
}

export default Field;