import Snap from 'snapsvg-cjs';

export default function drawingO(cell) {
    const svg = Snap().appendTo(cell);

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