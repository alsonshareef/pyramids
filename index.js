const { 
    halfPyramidUp,
    halfPyramidLeft,
    halfPyramidDown,  
    fullPyramidUp,
    fullPyramidRight,
    fullPyramidDown,
    fullPyramidLeft
} = require('./pyramid')

halfPyramidUp(15);
halfPyramidLeft(15);
halfPyramidDown(15)

// -------

fullPyramidUp(15);
fullPyramidRight(15);
fullPyramidDown(15);
fullPyramidLeft(25);

// For testing bug
// for(let i = 0; i <= 15; i++){
//     fullPyramidLeft(i);
// }