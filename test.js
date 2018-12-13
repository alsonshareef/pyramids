const { 
    halfPyramidUp,
    halfPyramidLeft,
    halfPyramidDown,  
    fullPyramidUp,
    fullPyramidRight,
    fullPyramidDown,
    fullPyramidLeft
} = require('./pyramid')

// Expected string outputs from functions up to size 10
    let halfPyramidUpStrings = [
        '*\n',
        '*\n**\n',
        '*\n**\n***\n',
        '*\n**\n***\n****\n',
        '*\n**\n***\n****\n*****\n',
        '*\n**\n***\n****\n*****\n******\n',
        '*\n**\n***\n****\n*****\n******\n*******\n',
        '*\n**\n***\n****\n*****\n******\n*******\n********\n',
        '*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n',
        '*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n**********\n'
    ]

// halfPyramidUp Test function
function halfPyramidUpTest(size, num){
    num = size + 1

    console.log(`Testing for Size: ${num} starting..`)
    if (halfPyramidUp(size) === (halfPyramidUpStrings[size])){
        console.log(`** PASSED ** Pyramid function output is EQUAL to expected pyramid string output`)
    } else {
        console.log(`** ERROR ** Pyramid function output is NOT EQUAL to expected pyramid string output!`)
    }
    console.log(`Testing completed.. \n`)
}

for(let i = 0; i <= 9; i++){
    halfPyramidUpTest(i);
}
