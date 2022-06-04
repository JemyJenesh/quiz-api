import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { GET_TOPICS } from "./features/topic/queries";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "query",
    fields: {
      topics: GET_TOPICS,
    },
  }),
});

export default schema;
