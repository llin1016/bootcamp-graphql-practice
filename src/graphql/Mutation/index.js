const merge = require('lodash.merge')
const Author = require('./Author')
const Publisher = require('./Publisher')
const Address = require('./Address')
const Book = require('./Book')

const resolvers = [Address,Publisher,Author,Book]

module.exports = merge(...resolvers)
