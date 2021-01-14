const Author = require('../../models/Author')
const Address = require('../../models/Address')

const allAuthors = async () => {
	try {
		const authors = await Author.query()
		return authors
	} catch (err) {
		console.log(err)
		throw new Error('failed to get authors')
    }
}

const authorById = async (_obj, {id}, _context) => {
    try {
        const author = await Author.query().findById(id)
        return author
    } catch (err) {
        console.log(err)
        throw new Error('Failed to get author')
    }
}

const address = async ({ addressId }, params, context) => {
    const a = await Address.query().findOne({id: addressId})
    return a
}

const resolver = {
    Query: {
        authorById,
        allAuthors,
    },
    Author: {
        address,
    }
}

module.exports = resolver