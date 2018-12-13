const { 
    halfPyramidUp,
    halfPyramidLeft,
    halfPyramidDown,  
    fullPyramidUp,
    fullPyramidRight,
    fullPyramidDown,
    fullPyramidLeft
} = require('./pyramid')

// Tests
    let pyramidStrings = [
        '*\n',
        '*\n**\n',
        '*\n**\n***\n',
        '*\n**\n***\n****\n',
        '*\n**\n***\n****\n*****\n',
        '',
        '',
        '',
        '',
        ''
    ]

function halfPyramidUpTest(){
    let SIZE = 0

    // let test = halfPyramidUp(SIZE) === (pyramidStrings.size0 += '\n') ? true : false
    // console.log(test)
    console.log(`Testing for Size: ${SIZE} starting..`)
    if (halfPyramidUp(SIZE) === (pyramidStrings[SIZE])){
        console.log(`** PASSED ** Pyramid function output is EQUAL to expected pyramid string output`)
    } else {
        console.log(`** ERROR ** Pyramid function output is NOT EQUAL to expected pyramid string output!`)
    }
    console.log(`Testing completed..`)
}
halfPyramidUpTest();

