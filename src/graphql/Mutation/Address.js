const Address = require('../../models/Address')

const addAddress = async (_obj, {input}, _context) => {
    try {
        const insert = await Address.query().insert({
            street: input.street,
            city: input.city,
            state: input.state,
            zip: input.zip,
        })
        return insert
    } catch (err) {
        console.log(err)
        throw new Error('Failed to insert address')
    }
}

const updateAddress = async (_obj, {id, input}, _context) => {
    try {
        now = new Date().getTime()
        const update = await Address.query().patch({
            street: input.street,
            city: input.city,
            state: input.state,
            zip: input.zip,
            updatedAt: now            
        }).where({id: id})

        return input
    } catch (err) {
        console.log(err)
    }
}

const resolver = {
    Mutation: {
        addAddress,
        updateAddress,
    }
}

module.exports = resolver