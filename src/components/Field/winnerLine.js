import Snap from 'snapsvg-cjs';

export default function winnerLine(i, field) {
    const svg = Snap().appendTo(field.current);
    svg.attr({viewBox: '0 0 100 100', class: 'svg-area'});

    const posLine = [
        // horizontal
        {x1: 5, y1: 17.5, x2: 95, y2: 17.5},
        {x1: 5, y1: 50, x2: 95, y2: 50},
        {x1: 5, y1: 82.5, x2: 95, y2: 82.5},

        // verticals
        {x1: 17.5, y1: 5, x2: 17.5, y2: 95},
        {x1: 50, y1: 5, x2: 50, y2: 95},
        {x1: 82.5, y1: 5, x2: 82.5, y2: 95},

        // diogonally
        {x1: 5, y1: 5, x2: 95, y2: 95},
        {x1: 95, y1: 5, x2: 5, y2: 95}
    ];

    const line = svg.line(posLine[i].x1, posLine[i].y1, posLine[i].x1, posLine[i].y1);
    line.attr({stroke: '#8edbf5', strokeWidth: 2});
    line.animate({x1: posLine[i].x1, y1: posLine[i].y1, x2: posLine[i].x2, y2: posLine[i].y2}, 250);
}