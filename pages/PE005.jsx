import PETemplate from './PETemplate'

const functionSource = `
function isEvenlyDivisibleBy(value, denominator) {
    return _.isInteger(value / denominator)
}
function isEvenlyDivisibleByAll(value, denominators) {
    return _.every(denominators, function(d) {
        return isEvenlyDivisibleBy(value, d)
    })
}
var denominators = _.range(1, 21)
var i = 2
while (!isEvenlyDivisibleByAll(i, denominators)) {
    ++i
}
print(i)
`
export default class PE005 extends PETemplate {
    constructor(props) {
        super(props, 5, functionSource.trim())
    }
}
