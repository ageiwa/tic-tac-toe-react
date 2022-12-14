import React, { useRef, useState } from 'react';
import './index.css';
import { useDispatch } from 'react-redux';

import Cell from '../Cell';

import drawingO from './drawingO';
import drawingX from './drawingX';
import winnerLine from './winnerLine';

const Field = () => {
    const dispatch = useDispatch();
    const refToField = useRef(null);

    const [order, setOrder] = useState('X');
    const [field, setField] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);
    
    const cells = [];

    function makeMove(e, i, j) {
        const fieldAr = field;

        if (fieldAr[i][j] === '') {
            const cell = e.target;
            fieldAr[i][j] = order;

            if (order === 'X') {
                drawingX(cell);
                dispatch({type: 'O'});
                setOrder('O');
            }
            else {
                drawingO(cell);
                dispatch({type: 'X'});
                setOrder('X');
            }

            checkWin(order);
            setField(fieldAr);
        }
    }

    function checkWin(order) {
        const fieldAr = field;
        const winArray = [
            // horizontal
            fieldAr[0][0] === order && fieldAr[0][1] === order && fieldAr[0][2] === order,
            fieldAr[1][0] === order && fieldAr[1][1] === order && fieldAr[1][2] === order,
            fieldAr[2][0] === order && fieldAr[2][1] === order && fieldAr[2][2] === order,

            // verticals
            fieldAr[0][0] === order && fieldAr[1][0] === order && fieldAr[2][0] === order,
            fieldAr[0][1] === order && fieldAr[1][1] === order && fieldAr[2][1] === order,
            fieldAr[0][2] === order && fieldAr[1][2] === order && fieldAr[2][2] === order,

            // diogonally
            fieldAr[0][0] === order && fieldAr[1][1] === order && fieldAr[2][2] === order,
            fieldAr[0][2] === order && fieldAr[1][1] === order && fieldAr[2][0] === order,
        ]

        for (let i = 0; i < winArray.length; i++) {
            if (winArray[i]) winnerLine(i, refToField);
        }
    }

    for (let i = 0; i < field.length; i++) {
        
        for (let j = 0; j < field[i].length; j++) {
            cells.push(<Cell key={i+''+j} handleClick={(e) => makeMove(e, i, j)} />)
        }

    }

    return(
        <div className='field' ref={refToField}>
            {cells}
        </div>
    )
}

export default Field;