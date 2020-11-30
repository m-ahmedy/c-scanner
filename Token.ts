
interface IWhitespace {
    indent: number
    before: number
    after: number
    trailing: number
}

export default class Token {
    column: number
    line: number
    whitespace: IWhitespace
    type: string | null
    value: string | null
    plain: string | null

    toString() {
        return '[' + (this.type + '        ').substr(0, 13) + ' '
            + '[' + this.whitespace.indent + ':' + this.whitespace.before + ']' + this.line
            + ':' + this.column + '[' + this.whitespace.after + ':' + this.whitespace.trailing
            + ']' + ': ' + this.value + ']';
    }
}