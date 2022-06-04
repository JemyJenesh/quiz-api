import { GraphQLList } from "graphql";

import { TopicType } from "./typeDef";

export const GET_TOPICS = {
  type: new GraphQLList(TopicType),
  resolve: () => [
    {
      id: 1,
      name: "Git",
    },
    {
      id: 2,
      name: "Javascript",
    },
  ],
};
