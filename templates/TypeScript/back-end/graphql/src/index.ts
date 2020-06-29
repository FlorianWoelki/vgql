import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import cors from 'cors';
import { UserResolver } from './resolvers/UserResolver';

(async () => {
  const app = express();
  app.use(cors({
    origin:
      process.env.NODE_ENV === 'test'
      ? '*'
      : process.env.FRONTEND_HOST,
    credentials: true,
  }));

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000`);
  });
})();
