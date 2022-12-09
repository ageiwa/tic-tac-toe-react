import React, { useState } from 'react';
import './index.css';

import Vivus from 'vivus';
import svgX from './x.svg';
import svgO from './o.svg';

import Cell from '../Cell';

const Field = (props) => {
    const [flag, setFlag] = useState(true);
    const cells = [];

    function fun(e) {
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

    for (let i = 0; i < 9; i++) {
        cells.push(<Cell key={i} handleClick={fun} />);
    }

    return(
        <div className='field'>
            {cells}
        </div>
    )
}

export default Field;