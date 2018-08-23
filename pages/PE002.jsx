import PETemplate from './PETemplate'

const functionSource = `
function f(term0, term1) {
    var value = term0 + term1
    var max = 4000000
    if (value > max) {
        return 0;
    }
    return f(term1, value) + ((value % 2) ? value : 0)
}
print(2 + f(1, 2))
`

export default class PE002 extends PETemplate {
    constructor(props) {
        super(props, 2, functionSource.trim())
    }
}
