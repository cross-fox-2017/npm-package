# Personality Reading

### Purpose
  To get basic understanding to yourself more, be more in control and productive person

### Usage

```
npm i personality-reading

```
at your code:
```
var reading = require('personality-reading')
```
Reading based on your name:
```
reading.name('alexander')

// output in json:
{ Openness: '66',
  Conscientiousness: '88',
  Extraversion: '83',
  Aggreableness: '24',
  Neuroticism: '66' }
```
Reading based on your birthdate:
```
reading.birthdate('08/25/1985')

// output in json:
{ Openness: '44',
  Conscientiousness: '44',
  Extraversion: '42',
  Aggreableness: '51',
  Neuroticism: '47' }
```
