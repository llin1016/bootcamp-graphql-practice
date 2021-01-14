const Address = require('../../models/Address')

const allAddresses = async () => {
	try {
		const addresses = await Address.query()
		return addresses
	} catch (err) {
		console.log(err)
		throw new Error('failed to get addresses')
    }
}

const addressById = async (_obj, {id}, _context) => {
    try {
        const address = await Address.query().findById(id)
        return address
    } catch (err) {
        console.log(err)
        throw new Error('Failed to get address')
    }
}

const resolver = {
    Query: {
        addressById,
        allAddresses,
    }
}

module.exports = resolver