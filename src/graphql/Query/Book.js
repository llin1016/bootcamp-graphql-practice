const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')

const allBooks = async () => {
	try {
        const books = await Book.query()
        console.log(books)
		return books
	} catch (err) {
		console.log(err)
		throw new Error('failed to get books')
    }
}

const bookById = async (_obj, {id}, _context) => {
    try {
        const book = await Book.query().findById(id)
        return book
    } catch (err) {
        console.log(err)
        throw new Error('Failed to get book')
    }
}

const author = async({ authorId }, params, context) => {
    const a = await Author.query().findOne({id:authorId})
    return a
}

const publisher = async({ publisherId }, params, context) => {
    const p = await Publisher.query().findOne({id:publisherId})
    return p
}

const resolver = {
    Query: {
        bookById,
        allBooks,
    },
    Book: {
        publisher,
        author,

    }
}

module.exports = resolver