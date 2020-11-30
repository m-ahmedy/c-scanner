import { KEYWORDS, OPERATORS, SPECIAL_CHARACTERS } from './constants'
// Regular Expressions --------------------------------------------------------
// ----------------------------------------------------------------------------
function generateOpMatch() {
    let opMatch = '^';
    for (let i in OPERATORS) {

        if (opMatch !== '^') {
            opMatch += '|^';
        }

        opMatch += i.replace(/[?|^&(){}\[\]+\-*\/\.]/g, '\\$&');
    }

    // console.log(opMatch)
    return opMatch
}

function generateKwMatch() {
    let kwMatch = '^';
    for (let i in KEYWORDS) {
        let v = KEYWORDS[i]
        if (kwMatch !== '^') {
            kwMatch += '|^';
        }

        kwMatch += v.replace(/[?|^&(){}\[\]+\-*\/\.]/g, '\\$&');
    }

    // console.log(kwMatch)
    return kwMatch
}

function generateSCMatch() {
    let scMatch = '^';
    for (let i in SPECIAL_CHARACTERS) {
        let v = SPECIAL_CHARACTERS[i]
        if (scMatch !== '^') {
            scMatch += '|^';
        }

        scMatch += v.replace(/[?|^&(){}\[\]+\-*\/\.]/g, '\\$&');
    }
    // console.log(scMatch)
    return scMatch
}

const opRegExp = new RegExp(generateOpMatch()),
    keywordRegExp = new RegExp(generateKwMatch()),
    specialCharactersRegExp = new RegExp(generateSCMatch()),
    numberRegExp = /^(\d+|\d+.\d+|\d+e\d+|[\dA-Fa-f]+)/,
    multiCommentRegExp = /^\/\*(.|[\r\n])*?\*\//,
    commentRegExp = /^\/\/.*/,
    identRegExp = /^_|[a-zA-Z][_\w]*/,
    wsRegExp = /^[\ \t]+/,
    strRegExp = /^"([^"\\]|\\.)*"/,
    charRegExp = /^'([^'\\]|\\.)?'/,
    newLineRegExp = /^(\r?\n)/

export const regExps = {
    keyword: keywordRegExp,
    identifier: identRegExp,
    operator: opRegExp,
    number: numberRegExp,
    char: charRegExp,
    str: strRegExp,
    specialCharacters: specialCharactersRegExp,
    comment: commentRegExp,
    multiComment: multiCommentRegExp,
    whitespace: wsRegExp,
    newLine: newLineRegExp,
}