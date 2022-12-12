import React, { useState } from 'react';
import './index.css';

import Cell from '../Cell';

import Snap from 'snapsvg-cjs';

function animateLine(svg, x1, y1, x2, y2, callback) {
    const line = svg.line(x1, y1, x1, y1);
    line.attr({stroke: '#fff', strokeWidth: 8});
    line.animate({x1: x1, y1: y1, x2: x2, y2: y2}, 250, callback);
}

function animateCicle(svg) {
    const circle = svg.circle(50, 50, 45);
    circle.attr({
        fill: 'transparent', 
        stroke: '#fff',
        strokeWidth: 8,
        strokeDasharray: 283,
        strokeDashoffset: 283
    });
    
    Snap.animate(283, 0, (value) => {
        circle.attr({
            strokeDashoffset: value
        });
    }, 500);
}

const Field = () => {
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
            svgElem.attr({viewBox: '0 0 100 100'});

            fieldAr[i][j] = order;

            if (order === 'X') {
                animateLine(svgElem, 0, 0, 100, 100, () => {
                    animateLine(svgElem, 100, 0, 0, 100);
                });

                setOrder('O');
            }
            else {
                animateCicle(svgElem);
                setOrder('X');
            }

            setField(fieldAr);
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