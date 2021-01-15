const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')
const Author = require('../../models/Author')

const addBook = async (_obj, {input}, _context) => {
    try {
        const publisher = await Publisher.query().findOne({phoneNumber: input.publisher.phoneNumber})

        const author = await Author.query().findOne({email: input.author.email})

        if (!publisher){
            throw new Error("Publisher does not exist")
        }

        if (!author){
            throw new Error("Author does not exist")
        }

        const book = await Book.query().insert({
            title: input.title,
            language: input.language,
            numPages: input.numPages,
            datePublished: input.datePublished,
            bestseller: input.bestseller,
            authorId: author.id,
            publisherId: publisher.id
        })

        return book

    } catch (error) {
        throw new Error("Failed to add book")
    }
}

const resolver = {
    Mutation: {
        addBook,
    }
}

module.exports = resolver