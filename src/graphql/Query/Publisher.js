const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')

const allPublishers = async () => {
	try {
		const publishers = await Publisher.query()
		return publishers
	} catch (err) {
		console.log(err)
		throw new Error('failed to get publishers')
    }
}

const publisherById = async (_obj, {id}, _context) => {
    try {
        const publisher = await Publisher.query().findById(id)
        return publisher
    } catch (err) {
        console.log(err)
        throw new Error('Failed to get publisher')
    }
}

const address = async ({ addressId }, params, context) => {
    const a = await Address.query().findOne({id: addressId})
    return a
}

const resolver = {
    Query: {
        allPublishers,
        publisherById,
    },
    Publisher: {
        address,
    }
}

module.exports = resolver