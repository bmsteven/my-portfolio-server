const { gql } = require("apollo-server")

// The GraphQL schema
module.exports = gql`
  type User {
    first_name: String!
    middle_name: String
    last_name: String!
    email: String!
    username: String!
    status: String
    account_status: String!
    type: String!
    deleted_status: Boolean!
    verified: Boolean!
    verification_code: Int!
    confirmed: Boolean!
    id: Int!
    token: String!
    about: String
    bio: String
    DOB: String
    dp: String
    cover_image: String
    createdAt: String
    updatedAt: String
    location: String
  }
  type ConnectionRequest {
    id: Int
    addressee: Int!
    requester: Int!
  }
  type Connection {
    id: Int
    userId: Int!
    connectedTo: Int!
    status: String!
    active_user_id: Int!
  }
  type Follow {
    id: Int!
    user: Int!
    follows: Int!
  }

  type Query {
    auth: User!
    login(email_username: String!, password: String!): User!
    getFollowers: [User!]
    getFollowings: [User!]
    getConnections: [User!]
    getUnacceptedRequests: [User]
    getConnectionRequests: [User]
    getUserConnectionRequests: [User]
    getUsers: [User!]
    searchProfile(keyword: String!): [User!]
  }
  type Mutation {
    register(
      first_name: String!
      middle_name: String
      last_name: String!
      username: String!
      email: String!
      password: String!
      confirmPassword: String!
      type: String!
    ): User!
    verifyAccount(code: Int!): User!
    addUserInfo(about: String, bio: String, DOB: String, location: String): User
    updateUserInfo(
      about: String
      bio: String
      DOB: String
      location: String
    ): User
    addDp(dp: String): User!
    addCoverImg(cover_image: String): User!
    requestConnection(addressee: Int!): ConnectionRequest
    acceptConnection(id: Int!, requester: Int!): Connection!
    rejectConnection(id: Int!, requester: Int!): ConnectionRequest!
    deleteConnection(id: Int!): Connection
    blockUser(userId: Int!): Connection
    unBlockUser(userId: Int!): Connection
    follow(id: Int!): Follow
    unfollow(id: Int!): Follow
  }
  type Subscription {
    newFollower: User
    newConnectionRequest: User
  }
`

// set subscription method so I can start working on the client side of the app
