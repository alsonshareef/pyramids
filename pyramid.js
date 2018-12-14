
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
    return output
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
    return output
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
    return output
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
    return output
}

// Direction: RIGHT, Full Pyramid
exports.fullPyramidRight = (size) => {
    let i = 0, y = 0, x = 0, center, output = '';

    if (size % 2 !== 0){
        size--
    }

    for(i = 0; i <= size; i++){
        center = Math.floor(size/2)
        x = center - i;
        // console.log(center)
        if (x < 0) {
            x *= -1
        }
        
        y = (center + 1) - x;
        x = Math.ceil(x)
        y = Math.floor(y)

        for(a = 0; a < y; a++){
            output += '* '
        }
        // console.log('i', i)
        // console.log('x', x)
        // console.log('y', y, '/n')
        output += '\n'
    }
    return output
}

// Direction: DOWN, Full Pyramid
exports.fullPyramidDown = (size) => {
    let i, a, b, m, x, y, f_y, output = '';
    m = size * 2
    for(i = 0; i <= size; i++){
        y = (2 * i) - 1
        f_y = m - y
        x = i
        for(a = 0; a <= x; a++){
            output += ' '
        }
        for(b = 0; b < f_y; b++){
            output += '*'
        }
        output += '\n'
    }
    return output
}

//Direction: Left, Full Pyramid
exports.fullPyramidLeft = (size) => {
    let i, x, y, a, b, center, output = ''

    if (size % 2 !== 0){
        size--
    }

    for(i = 0; i <= size; i++){
        center = Math.floor(size/2)
        x = center - i;
        
        if (x < 0){
            x *= -1
        }

        y = (center + 1) - x

        // console.log('size', size)
        // console.log('x', x)
        // console.log('y', y, '\n')

        for(a = 1; a <= x; a++){
            output += ' '
        }

        for(b = 1; b <= y; b++){
            output += '*'
        }
        output += '\n'
    }
    return output
}
