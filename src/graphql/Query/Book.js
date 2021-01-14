const Book = require('../../models/Book')

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

const resolver = {
    Query: {
        bookById,
        allBooks,
    }
}

module.exports = resolver