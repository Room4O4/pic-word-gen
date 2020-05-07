# pic-word-gen
A word generator module for using in a pictionary

# Installation

```

npm install pic-word-gen

```

# Usage

- To generate a word, require the module and call `generateWord` function
- Pass in the level of difficulty of the words as a parameter to the `generateWord` function
- Allowed levels are 
    - easy
    - medium
    - hard
- Default level is `easy` if no level is passed to the `generateWord` function
```

const wordgen = require('pic-word-gen')

let easyWord = wordgen.generateWord('easy')
let mediumWord = wordgen.generateWord('medium')
let hardWord = wordgen.generateWord('hard')

```