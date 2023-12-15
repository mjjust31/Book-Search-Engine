const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  password: String
}

type Book {
  _id: ID
  bookId: String
}

type Query {
  me: [User]
}

type Mutation {
  #login:(email: String!, password: String!)
  addUser(username: String!, email: String!, password: String!): User
  #saveBook: 
  removeBook(bookId: String!): Book
}

`;

module.exports = typeDefs;
