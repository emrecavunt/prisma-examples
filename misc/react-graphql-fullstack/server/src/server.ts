import { GraphQLServer } from 'graphql-yoga'
import { schema } from './schema'
import { createContext } from './context'

new GraphQLServer({ schema, context: createContext }).start(() =>
  console.log(
    `🚀  Server ready at: http://localhost:4000
⭐️  See sample queries: http://pris.ly/e/ts/graphql#5-using-the-graphql-api`,
  ),
)
