import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express, { Application, Request, Response } from "express";
import { GraphQLSchema } from "graphql";
import http from "http";

import { appConfig } from "./config";
import { knex } from "./knex";
import schema from "./schema";

async function startApolloServer(schema: GraphQLSchema) {
  const app: Application = express();
  const httpServer = http.createServer(app);
  const port = appConfig.port;

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  app.get("/", (req: Request, res: Response) => {
    res.json({
      app: appConfig.appName,
      createdAt: appConfig.appDate,
      host: req.hostname,
    });
  });

  await server.start();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`);
}

startApolloServer(schema);
