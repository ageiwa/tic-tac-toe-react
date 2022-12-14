import Snap from 'snapsvg-cjs';

function animateLine(svg, x1, y1, x2, y2, callback) {
    svg.attr({viewBox: '0 0 100 100'});

    const line = svg.line(x1, y1, x1, y1);
    line.attr({stroke: '#fff', strokeWidth: 8});
    line.animate({x1: x1, y1: y1, x2: x2, y2: y2}, 250, callback);
}

export default function drawingX(cell) {
    const svg = Snap().appendTo(cell);

    animateLine(svg, 100, 0, 0, 100, () => {
        animateLine(svg, 0, 0, 100, 100);
    });
}