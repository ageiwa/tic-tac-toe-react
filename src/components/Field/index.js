import React, { useState } from 'react';
import './index.css';

import Cell from '../Cell';

import svgX from './x.svg';
import svgO from './o.svg';

const Field = () => {
    const [order, setOrder] = useState('X');
    const [field, setField] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);
    
    const cells = [];

    function makeMove(i, j) {
        const fieldAr = field;

        fieldAr[i][j] = order;

        if (order === 'X') setOrder('O');
        else setOrder('X');

        setField(fieldAr);
    }

    for (let i = 0; i < field.length; i++) {
        
        for (let j = 0; j < field[i].length; j++) {
            cells.push(<Cell key={i+''+j} handleClick={() => makeMove(i, j)} />)
        }

    }

    return(
        <div className='field'>
            {cells}
        </div>
    )
}

export default Field;