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



module.exports = {
    matrixSpiral,
}