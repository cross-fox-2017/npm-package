module.exports = {
  readName: function(name) {
    name = name.split('')
    return name.map(function(data){
      return data.charCodeAt(0)
    })
  },
  readBirthdate: function(mmddyyyy){
     return mmddyyyy.match(/\d{2}/g)
  },
  reducer: function(array){
    return array.reduce(function(a, b){
      return a + b * 7777777
    })
  },
  numberPicker: function(number){
    return number.match(/\d{2}/g)
  },
  summary: function(array){
    let person = []
    let mod = 0
    while (person.length < 6){
      if(array[mod] > 20 && array[mod] < 95){
        person.push(array[mod])
        mod++
      } else {
        mod++
      }
      if (mod >= array.length){
        mod = 0
      }
    }
    return {
      Openness: person[0],
      Conscientiousness: person[1],
      Extraversion: person[2],
      Aggreableness: person[3],
      Neuroticism: person[4]
    }
  },
  name: function(name){
    let data = this.numberPicker(String(this.reducer(this.readName(name))))
    return this.summary(data)
  },
  birthdate: function(date){
    let data = this.numberPicker(String(this.reducer(this.readBirthdate(date))))
    return this.summary(data)
  }
}
