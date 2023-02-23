const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
module.exports = gql`
  scalar DateTime

  type Note {
    id: String!
    content: String!
    author: User!
    favoriteCount: Int!
    favoritedBy: [User!]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type NoteFeed {
    notes: [Note]!
    cursor: String!
    hasNextPage: Boolean!
  }

  type User {
    id: String!
    username: String!
    email: String!
    avatar: String!
    notes: [Note!]!
    favorites: [Note!]!
  }

  type Query {
    notes: [Note!]!
    noteFeed(cursor: String): NoteFeed
    note(id: ID!): Note!
    user(username: String!): User!
    users: [User!]!
    me: User!
  }

  type Mutation {
    newNote(content: String!): Note!
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
    signUp(username: String!, email: String!, password: String!): String!
    signIn(email: String!, password: String!): String!
    toggleFavorite(id: ID!): Note!
  }
`;
