import 'dotenv/config';
import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
  origin:
    process.env.NODE_ENV === 'test'
    ? '*'
    : process.env.FRONTEND_HOST,
  credentials: true,
}));

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    id: Int
    username: String
    name: String
    email: String
    phone: String
    website: String
  }
`;

const resolvers = {
  Query: {
    users: () => [
      {
        id: 1,
        username: 'Bret',
        name: 'Bret Stinksi',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
      },
      {
        id: 2,
        username: 'Antonette',
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
      }
    ],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

const port = process.env.PORT || 4000;
app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
