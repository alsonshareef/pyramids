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
// for(let i = 0; i <= 9; i++){
// halfPyramidLeftTest(i);
// }



// **** halfPyramidDown Test function ****

// Expected string outputs from functions up to size 10
let halfPyramidDownStrings = [
    '* \n',
    '** \n*  \n',
    '*** \n**  \n*   \n',
    '**** \n***  \n**   \n*    \n',
    '***** \n****  \n***   \n**    \n*     \n',
    '****** \n*****  \n****   \n***    \n**     \n*      \n',
    '******* \n******  \n*****   \n****    \n***     \n**      \n*       \n',
    '******** \n*******  \n******   \n*****    \n****     \n***      \n**       \n*        \n',
    '********* \n********  \n*******   \n******    \n*****     \n****      \n***       \n**        \n*         \n',
    '********** \n*********  \n********   \n*******    \n******     \n*****      \n****       \n***        \n**         \n*          \n'
]

function halfPyramidDownTest(size, num){
num = size + 1

console.log(`Testing for Size: ${num} starting..`)
if (halfPyramidDown(size) === (halfPyramidDownStrings[size])){
    console.log(`** PASSED ** halfPyramidDown function output is EQUAL to expected pyramid string output`)
} else {
    console.log(`** ERROR ** halfPyramidDown function output is NOT EQUAL to expected pyramid string output!`)
}
console.log(`Testing completed.. \n`)
}

// Run to test
// for(let i = 0; i <= 9; i++){
// halfPyramidDownTest(i);
// }



// **** fullPyramidUp Test function ****

// Expected string outputs from functions up to size 10
let fullPyramidUpStrings = [
    ' \n',
    '  \n *\n',
    '   \n  *\n ***\n',
    '    \n   *\n  ***\n *****\n',
    '     \n    *\n   ***\n  *****\n *******\n',
    '      \n     *\n    ***\n   *****\n  *******\n *********\n',
    '       \n      *\n     ***\n    *****\n   *******\n  *********\n ***********\n',
    '        \n       *\n      ***\n     *****\n    *******\n   *********\n  ***********\n *************\n',
    '         \n        *\n       ***\n      *****\n     *******\n    *********\n   ***********\n  *************\n ***************\n',
    '          \n         *\n        ***\n       *****\n      *******\n     *********\n    ***********\n   *************\n  ***************\n *****************\n'
]

function fullPyramidUpTest(size, num){
num = size + 1

console.log(`Testing for Size: ${num} starting..`)
if (fullPyramidUp(size) === (fullPyramidUpStrings[size])){
    console.log(`** PASSED ** fullPyramidUp function output is EQUAL to expected pyramid string output`)
} else {
    console.log(`** ERROR ** fullPyramidUp function output is NOT EQUAL to expected pyramid string output!`)
}
console.log(`Testing completed.. \n`)
}

// Run to test
// for(let i = 0; i <= 9; i++){
// fullPyramidUpTest(i);
// }



// **** fullPyramidRight Test function ****

// Expected string outputs from functions Right to size 10
let fullPyramidRightStrings = [
    '* \n',
    '* \n',
    '* \n* * \n* \n',
    '* \n* * \n* \n',
    '* \n* * \n* * * \n* * \n* \n',
    '* \n* * \n* * * \n* * \n* \n',
    '* \n* * \n* * * \n* * * * \n* * * \n* * \n* \n',
    '* \n* * \n* * * \n* * * * \n* * * \n* * \n* \n',
    '* \n* * \n* * * \n* * * * \n* * * * * \n* * * * \n* * * \n* * \n* \n',
    '* \n* * \n* * * \n* * * * \n* * * * * \n* * * * \n* * * \n* * \n* \n'
]

function fullPyramidRightTest(size, num){
num = size + 1

console.log(`Testing for Size: ${num} starting..`)
if (fullPyramidRight(size) === (fullPyramidRightStrings[size])){
    console.log(`** PASSED ** fullPyramidRight function output is EQUAL to expected pyramid string output`)
} else {
    console.log(`** ERROR ** fullPyramidRight function output is NOT EQUAL to expected pyramid string output!`)
}
console.log(`Testing completed.. \n`)
}

// Run to test
for(let i = 0; i <= 9; i++){
fullPyramidRightTest(i);
}