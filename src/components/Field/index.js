import React, { useState } from 'react';
import './index.css';

import Cell from '../Cell';

import Vivus from 'vivus';
import svgX from './x.svg';
import svgO from './o.svg';

const Field = (props) => {
    const [flag, setFlag] = useState(true);
    const [field, setField] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ])
    const cells = [];

    function makeMove(e) {
        const cell = e.currentTarget;
        let player = svgX;

        if (flag) {
            player = svgX;
            setFlag(false);
        }
        else {
            player = svgO;
            setFlag(true);
        }

        new Vivus(
            cell,
            {
                type: 'oneByOne',
                duration: 40,
                file: player,
                animTimingFunction: Vivus.EASE
            },
        );
    }

    for (let i = 0; i < field.length; i++) {
        
        for (let j = 0; j < field.length; j++) {
            cells.push(<Cell key={i+''+j} handleClick={makeMove} />);
        }

    }

    return(
        <div className='field'>
            {cells}
        </div>
    )
}

export default Field;