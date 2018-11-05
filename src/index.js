const YAML = require('yaml')
const JOI = require('joi')


/**
 * @param {object} schema Schema Joi
 */
function YamlDB (schema) {
    const read = (yml) => {
        const object = YAML.parse(yml)

        if (schema) {
            const { error } = JOI.validate(object, schema)
        
            if (error) {
                throw new Error('Yaml does not match schema\n' + error.message)
            }
        }

        return object
    }

    const write = (x) => {
        if (schema) {
            const { error } = JOI.validate(x, schema)
        
            if (error) {
                throw new Error('Yaml does not match schema\n' + error.message)
            }
        }

        return YAML.stringify(x)
    }

    return {
        read,
        write
    }
}

module.exports = exports = {
    YamlDB
}