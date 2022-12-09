import React, { useState } from 'react';
import './index.css';

import Cell from '../Cell';

import Vivus from 'vivus';
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

    function makeMove(e, i, j) {
        const cell = e.target;
        const fieldAr = field;

        if (fieldAr[i][j] === '') {
            let player = svgX;

            if (order === 'X') {
                player = svgX;
                setOrder('O');
            }
            else {
                player = svgO;
                setOrder('X');
            }

            fieldAr[i][j] = order;
            setField(fieldAr);

            new Vivus(
                cell,
                {
                  type: 'oneByOne',
                  duration: 50,
                  file: player,
                  animTimingFunction: Vivus.EASE
                }
            );
        }
    }

    for (let i = 0; i < field.length; i++) {
        
        for (let j = 0; j < field[i].length; j++) {
            cells.push(<Cell key={i+''+j} handleClick={(e) => makeMove(e, i, j)} />)
        }

    }

    return(
        <div className='field'>
            {cells}
        </div>
    )
}

export default Field;