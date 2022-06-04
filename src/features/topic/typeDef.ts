import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const TopicType = new GraphQLObjectType({
  name: "Topic",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});
