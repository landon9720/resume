import PETemplate from './PETemplate'

const functionSource = `
function findFactor(integerValue) {
    var i = 2
    while (true) {
        var a = (integerValue / i)
        if (_.isInteger(a)) {
            return i
        }
        ++i
    }
    console.assert()
}
let target = 600851475143
let unfactoredProduct = target
let factors = []
while (unfactoredProduct > 1) {
    let factor = findFactor(unfactoredProduct)
    print(factor)
    unfactoredProduct /= factor
}
`

export default class PE003 extends PETemplate {
    constructor(props) {
        super(props, 3, functionSource.trim())
    }
}
