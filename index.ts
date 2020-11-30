import * as fs from 'fs'
import { regExps } from './regex'

const {keyword, identifier, operator, number, char, specialCharacters, comment, multiComment, whitespace, newLine, str} = regExps

const parsers = {
    'COMMENT': comment,
    'MULTI_COMMENT': multiComment,
    'KEYWORD': keyword,
    'IDENTIFIER': identifier,
    'OPERATOR': operator,
    'NUMBER_CONSTANT': number,
    'CHARACTER_CONST': char,
    'STRING_CONSTANT': str,
    'SPECIAL_CHARACTER': specialCharacters,
    'WHITESPACE': whitespace,
    'NEWLINE': newLine
}

function tokenize(s, parsers, deftok) {
    var m, r: RegExpExecArray, l, cnt, t, tokens = [];
    while (s) {
        t = null;
        m = s.length;
        for (var key in parsers) {
            r = parsers[key].exec(s);
            // try to choose the best match if there are several
            // where "best" is the closest to the current starting point
            if (r && (r.index < m)) {
                t = {
                    type: key,
                    attribute_value: r[0]
                }
                m = r.index;
            }
        }
        if (m) {
            // there is text between last token and currently 
            // matched token - push that out as default or "unknown"
            tokens.push({
                attribute_value: s.substr(0, m),
                type: deftok || 'unknown'
            });
        }
        if (t) {
            // push current token onto sequence
            tokens.push(t);
        }
        s = s.substr(m + (t ? t.attribute_value.length : 0));
    }
    return tokens;
}

const testSourceCode = fs.readFileSync('./hello.c').toString()
const tokens = tokenize(testSourceCode, parsers, '')

console.log(tokens)

/* 
function tokenize(input: string: tabWidth: number) {
    let cursor: number = 0,
        line: number = 1,
        col: number = 0,,
        token: Token = new Token(),
        lastToken: Token = null,
        tokenList: Array<Token> = [],

    while (cursor < input.length) {

    }

}  */