const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!

    allAuthors: [Author!]!
    authorById(id: ID!): Author!

    allPublishers: [Publisher!]!
    publisherById(id: ID!): Publisher!

    allAddresses: [Address!]!
    addressById(id: ID!): Address!

    allBooks: [Book!]!
    bookById(id: ID!): Book!
  }

  type Mutation {
    addPublisher(input: PublisherInput): Publisher!

    updateAddress(id: ID, input: AddressInput): Address!
    addAddress(input: AddressInput): Address!
    
  }

  input PublisherInput{
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: AddressInput!
  }

  input AddressInput{
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: String!
    address: Address!
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int!
    datePublished: Date!
    bestseller: Boolean!
    author: Author!
    publisher: Publisher!
  }

  scalar Date
  scalar DateTime
  scalar Time
  scalar PhoneNumber
  scalar EmailAddress
`
