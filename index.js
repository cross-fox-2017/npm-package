exports.qfizzbuzz = function (n,fizz,buzz) {
  var tmp = []
  var i = 3
  while(tmp.length < n) {
    if (i % 3 == 0) {
      tmp.push(i)
    }
    i += 3
  }
  for (var j = 0; j < tmp.length; j++) {
    if(tmp[j] % 5 == 0 && tmp[j] % 6 == 0) {
      tmp[j] = `${fizz}${buzz}`
    }
    if(tmp[j] % 5 == 0) {
      tmp[j] = `${fizz}`
    }
    if(tmp[j] % 6 == 0) {
      tmp[j] = `${buzz}`
    }
  }
  console.log(tmp)
}
