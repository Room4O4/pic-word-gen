const utils = require('./utils');
const words = require('./words.json');

const MAX_WORD_INDEX = 50;
const wordlevels = ['easy', 'medium', 'hard']

const generateWord = (level) => {
    if(!wordlevels.includes(level)){
        return null;
    }
    const randomNumber = utils.generateRandomInt(MAX_WORD_INDEX);
    return words[level][randomNumber];
}

module.exports = {
    generateWord
}