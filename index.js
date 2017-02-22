exports.codex = function (str){
  var tampung =[]
  var x= str.split(' = ')
  var z= x[0].split(' * ')
  var satu = z[0]
  var dua = z[1]
  var hasil = x[1]
  var tes2= 1
  var tes=[1,2,3,4,5,6,7,8,9]
  var hasilHitung=[]
  var jwb=[]
  for(var i=0;i<tes.length;i++){
      hasilHitung.push(Number(satu.replace('#',tes[i]) * dua ) )
  }
  for(var j=0;j<tes.length;j++){
    for(var k=0;k<hasilHitung.length;k++){
      if(Number(hasil.replace('#',tes[j]))=== Number(hasilHitung[k])){
        jwb.push(k+1)
        jwb.push(tes[j])
      }
    }
  }
return jwb
}
