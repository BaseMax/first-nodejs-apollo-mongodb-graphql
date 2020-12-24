/*
 * @Name: First NodeJs Apollo GraphQL
 * @Author: Max Base
 * @Repository: https://github.com/BaseMax/first-nodejs-apollo-graphql
 * @Date: 2020-12-24
 */

import {ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 4000

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})

const Cat = mongoose.model('Cat', {name: String })

const kitty = new Cat({ name: 'Zildjian' })
kitty.save().then(() => console.log('meow'))

const typeDefs = gql`
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: () => `Hello, World`
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app })

app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`)
})
