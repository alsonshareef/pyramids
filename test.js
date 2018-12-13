const { 
    halfPyramidUp,
    halfPyramidLeft,
    halfPyramidDown,  
    fullPyramidUp,
    fullPyramidRight,
    fullPyramidDown,
    fullPyramidLeft
} = require('./pyramid')

// **** halfPyramidUp Test function ****

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

function halfPyramidUpTest(size, num){
    num = size + 1

    console.log(`Testing for Size: ${num} starting..`)
    if (halfPyramidUp(size) === (halfPyramidUpStrings[size])){
        console.log(`** PASSED ** halfPyramidUp function output is EQUAL to expected pyramid string output`)
    } else {
        console.log(`** ERROR ** halfPyramidUp function output is NOT EQUAL to expected pyramid string output!`)
    }
    console.log(`Testing completed.. \n`)
}

// Run to test 
// for(let i = 0; i <= 9; i++){
//     halfPyramidUpTest(i);
// }



// **** halfPyramidLeft Test function ****

// Expected string outputs from functions up to size 10
let halfPyramidLeftStrings = [
    ' *\n',
    '  *\n **\n',
    '   *\n  **\n ***\n',
    '    *\n   **\n  ***\n ****\n',
    '     *\n    **\n   ***\n  ****\n *****\n',
    '      *\n     **\n    ***\n   ****\n  *****\n ******\n',
    '       *\n      **\n     ***\n    ****\n   *****\n  ******\n *******\n',
    '        *\n       **\n      ***\n     ****\n    *****\n   ******\n  *******\n ********\n',
    '         *\n        **\n       ***\n      ****\n     *****\n    ******\n   *******\n  ********\n *********\n',
    '          *\n         **\n        ***\n       ****\n      *****\n     ******\n    *******\n   ********\n  *********\n **********\n'
]

function halfPyramidLeftTest(size, num){
num = size + 1

console.log(`Testing for Size: ${num} starting..`)
if (halfPyramidLeft(size) === (halfPyramidLeftStrings[size])){
    console.log(`** PASSED ** halfPyramidLeft function output is EQUAL to expected pyramid string output`)
} else {
    console.log(`** ERROR ** halfPyramidLeft function output is NOT EQUAL to expected pyramid string output!`)
}
console.log(`Testing completed.. \n`)
}

// Run to test
for(let i = 0; i <= 9; i++){
halfPyramidLeftTest(i);
}
