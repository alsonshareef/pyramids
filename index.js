const { 
    halfPyramidUp,
    halfPyramidLeft,
    halfPyramidDown,  
    fullPyramidUp,
    fullPyramidRight,
    fullPyramidDown,
    fullPyramidLeft
} = require('./pyramid')

// console.log(halfPyramidUp(15));
// console.log(halfPyramidLeft(15));
// console.log(halfPyramidDown(15))

// -------

// console.log(fullPyramidUp(15));
// console.log(fullPyramidRight(15));
// console.log(fullPyramidDown(15));
// console.log(fullPyramidLeft(25));

// For testing bug
for(let i = 0; i <= 10; i++){
    console.log(halfPyramidDown(i));
}