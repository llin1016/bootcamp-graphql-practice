const Author = require('../../models/Author')

const Address = require('../../models/Address')

const addAuthor = async (_obj, {input}, _context) => {
    try {
        const address = await Address.query().findOne({
            street: input.address.street,
            city: input.address.city,
            state: input.address.state,
            zip: input.address.zip,
        })

        if (!address){
            throw new Error("address does not exist")
        } else {
            try {
                const author = await Author.query().insert({
                    firstName: input.firstName,
                    lastName: input.lastName,
                    age: input.age,
                    email: input.email,
                    numBooksPublished: input.numBooksPublished,
                    addressId: address.id
                }).returning("*")
                return author
            } catch (err) {
                console.log(err)
                throw new Error("insert into author failed no new address")
            }
        }
    } catch (err) {
        console.log(err)
    }
}

const resolver = {
    Mutation: {
        addAuthor,
    },
}

module.exports = resolver