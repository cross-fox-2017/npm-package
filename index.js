"use strict"

exports.binarySearch = function (search, array) {
  // Your code here
  var batasKiri = 0
  var batasKanan = array.length - 1;

  while(batasKiri <= batasKanan){
    let tengah = Math.floor((batasKiri+batasKanan)/2);
    if(search<array[tengah]){
      batasKanan = tengah-1
    }
    else if(search>array[tengah]){
      batasKiri = tengah+1
    } else {
      return tengah;
    }

  }
  return "-1"
}
