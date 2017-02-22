exports.money = function (value, currency) {
  if (typeof (value) === 'string') {
    let num = currency + value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')

    return num
  }
  if (typeof (value) === 'number') {
    let num = currency + value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    return num
  }
}
