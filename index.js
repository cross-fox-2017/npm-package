exports.MatrixInSpiral =  function spiral(val) {
    let num = 0, x = 0 , y = 0, arr = [], result = []
    for (let i = 0; i < val; i++) {
      arr.push([])
      for (let j = 0; j < val; j++) {
        arr[i].push(num)
        num++
      }
    }
    let lim = val/2
    while(x<lim){
      for (let i = y; i < val-x; i++) { //kiri ke kanan, bagian atas
        result.push(arr[x][i])
      }
      for (let i = x+1; i < val-x; i++) { //atas ke bawah, bagian kanan
        result.push(arr[i][val-(1+x)])
      }
      for (let i = val-(2+x); i>=y; i--) { //kanan ke kiri, bagian bawah
        result.push(arr[val-(1+x)][i])
      }
      for (let i = val-(2+x); i>y; i--) { //bawah ke atas, bagian kanan
        result.push(arr[i][y])
      }
      x++;y++;
    }
    return result
  }
