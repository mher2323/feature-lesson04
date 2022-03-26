const {matrixSpiral,sortArr} = require('./lesson04-mhermardanyan');

describe('Making Spiral Matrix', ()=>{
    test('should be return Spiral Matrix', () => {
        const actual = matrixSpiral(3)
        const expected = [[1,2,3],[8,9,4],[7,6,5]];

        expect(actual).toEqual(expected);
    });
})

describe('Sorting the matrix ', ()=>{
    test('should be return Sorted Matrix', () => {
        const actual = sortArr([7,1,0,3])
        const expected = [0,1,3,7];

        expect(actual).toEqual(expected);
    });
})
