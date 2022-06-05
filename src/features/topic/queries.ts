import { GraphQLList } from "graphql";

import { TopicType } from "./typeDef";
import { knex } from "../../knex";

export const GET_TOPICS = {
  type: new GraphQLList(TopicType),
  resolve: () => knex.select().from("topics"),
};
