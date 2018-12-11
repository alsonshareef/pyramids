
// **** HALF PYRAMIDS

// Direction: UP, Half Pyramid
exports.halfPyramidUp = (size) => {
    let output = ''
    for(i = 0; i <= size; i++){
        for (num = 0; num <= i; num++){
            output += '*'
        }
        output += '\n'
    }
    console.log(output)
}

// Direction: LEFT, Half Pyramid
exports.halfPyramidLeft = (size) => {
    let x, y, a, b, c, output = '';
    for(a = 0; a <= size; a++){
        x = size - a
        for (b = 0; b <= x; b++){
            output += ' '
        }

        y = a
        for (c = 0; c <= y; c++){
            output += '*'
        }
        output += '\n'
    }
    console.log(output)
}

// Direction: DOWN, Half Pyramid
exports.halfPyramidDown = (size) => {
    let x, y, a, b, c, output = '';
    for (a = 0; a <= size; a++){
        x = size - a
        for(b = 0; b <= x; b++){
            output += '*'
        }

        y = a
        for(c = 0; c <= y; c++){
            output += ' '
        }
        output += '\n'
    }
    console.log(output)
}

// *** FULL PYRAMIDS

// Direction: UP, Full Pyramid
 exports.fullPyramidUp = (size) => {
    let i = 0, y = 0, x = 0, output = ''

    for(i = 0; i <= size; i++){
        x = size - i;
        y = (2 * i) - 1;

        for(let a = 0; a <= x; a++){
            output += ' ';
        }
        for (let b = 1; b <= y; b++){
            output += '*'
        }
        output += '\n'
    }
    console.log(output)
}

// Direction: RIGHT, Full Pyramid
exports.fullPyramidRight = (size) => {
    let i = 0, y = 0, x = 0, center, output = '';
    for(i = 0; i <= size; i++){
        center = size/2
        x = center - i;

        if (x < 0) {
            x *= -1
        }

        y = (center + 1) - x;
        for(a = 0; a < y; a++){
            output += '* '
        }
        output += '\n'
    }
    console.log(output)
}

// Direction: DOWN, Full Pyramid
exports.fullPyramidDown = (size) => {
    
}

//Direction: Left, Full Pyramid
exports.fullPyramidLeft = (size) => {
    
}
