import React, { useState } from 'react';
import './index.css';

import Cell from '../Cell';

import Snap from 'snapsvg-cjs';
import { useDispatch, useSelector } from 'react-redux';

function animateLine(svg, x1, y1, x2, y2, callback) {
    svg.attr({viewBox: '0 0 100 100'});

    const line = svg.line(x1, y1, x1, y1);
    line.attr({stroke: '#fff', strokeWidth: 8});
    line.animate({x1: x1, y1: y1, x2: x2, y2: y2}, 250, callback);
}

function animateCicle(svg) {
    svg.attr({viewBox: '0 0 100 100'});

    const circle = svg.circle(50, 50, 45);
    circle.attr({
        fill: 'transparent', 
        stroke: '#fff',
        strokeWidth: 8,
        strokeDasharray: 283,
        strokeDashoffset: 283,
        'transform-origin': 'center',
        transform: 'scale(-1, 1) rotate(-90)',
    });
    
    Snap.animate(283, 0, (value) => {
        circle.attr({strokeDashoffset: value});
    }, 500);
}

const Field = () => {
    const dispatch = useDispatch();
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
            const svgElem = Snap().appendTo(cell);

            fieldAr[i][j] = order;

            if (order === 'X') {
                animateLine(svgElem, 100, 0, 0, 100, () => {
                    animateLine(svgElem, 0, 0, 100, 100);
                });

                dispatch({type: 'O'});
                setOrder('O');
            }
            else {
                animateCicle(svgElem);

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
            // verticals
            fieldAr[0][0] === order && fieldAr[0][1] === order && fieldAr[0][2] === order,
            fieldAr[1][0] === order && fieldAr[1][1] === order && fieldAr[1][2] === order,
            fieldAr[2][0] === order && fieldAr[2][1] === order && fieldAr[2][2] === order,

            // horizontal
            fieldAr[0][0] === order && fieldAr[1][0] === order && fieldAr[2][0] === order,
            fieldAr[0][1] === order && fieldAr[1][1] === order && fieldAr[2][1] === order,
            fieldAr[0][2] === order && fieldAr[1][2] === order && fieldAr[2][2] === order,

            // diogonally
            fieldAr[0][0] === order && fieldAr[1][1] === order && fieldAr[2][2] === order,
            fieldAr[0][2] === order && fieldAr[1][1] === order && fieldAr[2][0] === order,
        ]

        for (let i = 0; i < winArray.length; i++) {
            if (winArray[i]) console.log('Winner' + order);
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