import PETemplate from './PETemplate'

const functionSource = `
function isPalindrome(v) {
    var vString = v.toString()
    for (var i = 0; i < Math.floor(vString.length / 2); ++i) {
        if (vString[i] !== vString[vString.length - 1 - i]) {
            return false
        }
    }
    return true
}
var max = 0
for (var i = 0; i < 1000; ++i) {
    for (var j = 0; j < 1000; ++j) {
        var product = i * j
        if (isPalindrome(product) && product > max) {
            print(product)
            max = product
        }
    }
}
print('max=' + max)
`

export default class PE004 extends PETemplate {
    constructor(props) {
        super(props, 4, functionSource.trim())
    }
}
