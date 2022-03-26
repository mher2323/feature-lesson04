function matrixSpiral(n){
    let arr = new Array(n).fill().map(() => new Array(n).fill(""))
    let firstRow = 0 ;
    let endRow = n-1 ;
    let firstCol = 0;
    let endCol = n-1;
    let step = 1
    while(firstRow <= endCol && firstCol <= endRow){

          for(let i=firstRow, j=firstCol,g =0 ;firstRow + g <= endCol; ++i,g++){
            arr[j][i] = step
            step++
        }
        for(i=endRow, j=firstCol+1, g=1; firstCol+g <= endRow ; ++j, g++ ){
            arr[j][i] = step
            step++
        }
        firstRow++
        for(i=endRow-1, j = endCol , g=0; firstRow+g  <= endCol ; i--,g++ ){
            arr[j][i]= step
            step++
        }
        firstCol++
        for(i=firstCol-1, j = endCol-1, g=0; firstCol+g <= endRow-1;j--,g++){
            arr[j][i]= step
            step++
        }
        endCol -= 1
        endRow -=1
    } return arr
}


function sortArr(arr){
    if(arr.length < 1){
        return arr
    }
    let a = 0;
    let b = 0;
    let c = 0;
    for (; b <= arr.length-1 ; b++){
        if(arr[b] >  arr[b+1]){
            [arr[b],arr[b+1]] = [arr[b+1],arr[b]]
            a = (b);
            c = (b-1)

        }

        for (; arr[a] < arr[c] ; c--,a-- ){
            [arr[a],arr[c]] = [arr[c],arr[a]]
        }
    }

    return arr ;
}






module.exports = {
    matrixSpiral,
    sortArr,
}