const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
module.exports = gql`
  scalar DateTime

  type Note {
    id: String!
    content: String!
    author: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type User {
    id: String!
    username: String!
    email: String!
    avatar: String!
    notes: [Note!]!
  }

  type Query {
    notes: [Note!]!
    note(id: ID!): Note!
  }

  type Mutation {
    newNote(content: String!): Note!
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String!, email: String!, password: String!): String!
  }
`;
