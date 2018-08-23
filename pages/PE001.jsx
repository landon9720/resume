import PETemplate from './PETemplate'

const functionSource = `
print(
    _.range(0, 1000)
        .reduce(function(accumulator, value) {
            if (value % 3 === 0 || value % 5 === 0) {
                return accumulator + value;
            } else {
                return accumulator;
            }
        }, 
        0
    )
)
`

export default class PE001 extends PETemplate {
    constructor(props) {
        super(props, 1, functionSource.trim())
    }
}
