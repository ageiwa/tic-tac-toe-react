import React, { useState } from 'react';
import './index.css';

import Cell from '../Cell';

import svgX from './x.svg';
import svgO from './o.svg';

const Field = () => {
    const cells = [];

    return(
        <div className='field'>
            {cells}
        </div>
    )
}

export default Field;