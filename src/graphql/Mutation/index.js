const merge = require('lodash.merge')
const Author = require('./Author')
const Publisher = require('./Publisher')
const Address = require('./Address')
const Book = require('./Book')

const resolvers = [Address,Publisher]

module.exports = merge(...resolvers)
