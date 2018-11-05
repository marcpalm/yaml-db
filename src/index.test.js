const fs = require('fs')
const path = require('path')

const YamlDB = require('./index.js').YamlDB

describe('YamlDB', () => {
    const files = fs.readdirSync(path.join(__dirname, './ressources'))
        .filter(_ => _.endsWith('.yml'))
        .map(_ => _.replace('.yml', ''))

    it('should load files', () => {
        expect(files.length).toBeTruthy()
    })



    files.forEach(
        file => {
            const ymlFile = `${file}.yml`

            it(`should be able to read file ${file}`, () => {
                const ymlInput = fs.readFileSync(path.join(__dirname, './ressources/', ymlFile)).toString()
                console.log(ymlInput)
                const object = YamlDB().read(ymlInput)

                console.log(object)
            })
        }
    )


})
