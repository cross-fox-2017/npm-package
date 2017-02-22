exports.getImage = function (width, height, option) {
  let url = `https://unsplash.it/${width}/${height}`
  let urlSquare = `https://unsplash.it/${width}`
  let randomUrl = `https://unsplash.it/${width}/${height}/?${option}`
  let grayscaleUrl = `https://unsplash.it/${option}/${width}/${height}`

  if (width && height) {
    if (!option) {
      return url
    }
    else if (option === 'random') {
      return randomUrl
    }
    else if (option === 'g') {
      return grayscaleUrl
    }
  }
  else if (width && !height) {
    return urlSquare
  }
}
