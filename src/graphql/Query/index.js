const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const Author = require('./Author')
const Publisher = require('./Publisher')
const Address = require('./Address')
const Book = require('./Book')

const resolvers = [Welcome,Author,Publisher,Address,Book]

module.exports = merge(...resolvers)
