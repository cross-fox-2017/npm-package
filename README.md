# Image Placeholder Unsplash

## Getting Started
```
npm install image-placeholder-unsplash
```

## Examples

```
var image = require('image-placeholder-unsplash')

var imageURL = image.getImage(580, 250)

console.log(imageURL) // result https://unsplash.it/580/250
```

## Basic Usage
Just put your image size (width & height) and you'll get a placeholder.
```
getImage(width, height)
```

To get a square image, just put the size you want.
```
getImage(size)
```

## Random image
Get a random image by adding 'random' in the option.
```
getImage(width, height, random)
```

## Grayscale
Add 'g' in the option to greyscale the image.
```
getImage(width, height, g)
```
