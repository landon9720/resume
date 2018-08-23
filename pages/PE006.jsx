import PETemplate from './PETemplate'

const functionSource = `
    const values = _.range(1, 101)
    print(
        Math.pow(_.sum(values), 2)
        -  _.sumBy(values, v => Math.pow(v, 2))
    )
`
_.sumBy
export default class PE006 extends PETemplate {
    constructor(props) {
        super(props, 6, functionSource.trim())
    }
}
