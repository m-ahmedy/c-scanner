export const SPECIAL_CHARACTERS = [
    '[', ']',
    '(',  ')',
    '{', '}',
    ',', ':', ';',
    '*', '#', '.'
]

export const KEYWORDS = [
    'auto', 'double', 'int', 'struct',
    'break', 'else', 'long', 'switch',
    'case', 'enum', 'register', 'typedef',
    'char', 'extern', 'return', 'union',
    'const', 'float', 'short', 'unsigned',
    'continue', 'for', 'signed', 'void',
    'default', 'goto', 'sizeof', 'volatile',
    'do', 'if', 'static', 'while'
];

export const OPERATORS = {
    '+=': 'ASSIGN_PLUS',//
    '-=': 'ASSIGN_MINUS',//
    '*=': 'ASSIGN_MUL',//
    '/=': 'ASSIGN_DIV',//
    '%=': 'ASSIGN_MOD',//
    '++': 'INCREMENT',//
    '--': 'DECREMENT',//
    '||': 'OR',//
    '&&': 'AND',//
    '==': 'EQ',//
    '!=': 'NE',//
    '<<': 'LSH',//
    '<=': 'LE',//
    '>>': 'RSH',//
    '>=': 'GE',//
    '=': 'ASSIGN',//
    '|': 'BITWISE_OR',//
    '^': 'BITWISE_XOR',//
    '&': 'BITWISE_AND',//
    '>': 'GT',//
    '<': 'LT',//
    '+': 'PLUS',//
    '-': 'MINUS',//
    '*': 'MUL',//
    '/': 'DIV',//
    '%': 'MOD',//
    '!': 'NOT',//
    '~': 'BITWISE_NOT',//
    '?': 'HOOK',//
};
