const Publisher = require('../../models/Publisher')

const Address = require('../../models/Address')

const addPublisher = async (_obj, {input}, _context) => {
    try {
        const address = await Address.query().findOne({
            street: input.address.street,
            city: input.address.city,
            state: input.address.state,
            zip: input.address.zip,
        })

        if (!address){
            throw new Error("Address does not exist.")
        } else {
            try {
                const publisher = await Publisher.query().insert({
                    company: input.company,
                    phoneNumber: input.phoneNumber,
                    numBooksPublished: input.numBooksPublished,
                    addressId: address.id
                }).returning("*")
                return publisher
            } catch (err) {
                console.log(err)
                throw new Error("insert into publisher failed no new address")
            }
        }

    } catch (err) {
        console.log(err)
    }
}

const resolver = {
    Mutation: {
        addPublisher,
    }
}

module.exports = resolver