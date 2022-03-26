const {matrixSpiral} = require('./lesson04-mhermardanyan');

describe('Making Spiral Matrix', ()=>{
    test('should be return Spiral Matrix', () => {
        const actual = matrixSpiral(3)
        const expected = [[1,2,3],[8,9,4],[7,6,5]];

        expect(actual).toEqual(expected);
    });
})