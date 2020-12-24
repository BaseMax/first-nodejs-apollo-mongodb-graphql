/*
 * @Name: First NodeJS Apollo MongoDB GraphQL
 * @Author: Max Base
 * @Repository: https://github.com/BaseMax/first-nodejs-apollo-mongodb-graphql
 * @Date: 2020-12-24
 */

import {ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import mongoose from 'mongoose'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

const PORT = 4000

const startServer = async () => {
  const app = express()

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  server.applyMiddleware({ app })

  mongoose.connect('mongodb://localhost:27017/test', {useUnifiedTopology: true, useNewUrlParser: true})

  app.listen({ port: PORT }, () => {
    console.log(`Server ready at http://localhost:${PORT}`)
  })
}

startServer()
