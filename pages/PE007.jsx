import PETemplate from './PETemplate'

const functionSource = `
function isPrime(integerValue) {
    for (var i = 2; i < integerValue; ++i) {
        var a = (integerValue / i)
        if (_.isInteger(a)) {
            return false
        }
    }
    return true
}
let target = 10001
let count = 1
let test = 3
while (count < target) {
    if (isPrime(test++)) {
        ++count;
    }
}
print(test - 1)
`
_.sumBy
export default class PE007 extends PETemplate {
    constructor(props) {
        super(props, 7, functionSource.trim())
    }
}
