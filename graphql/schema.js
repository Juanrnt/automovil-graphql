const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { users, user, automoviles, automovil } = require("./queries");
const { register, createAutomovil, addSoat } = require("./mutations");

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "The root query type",
  fields: {
    users,
    user,
    automoviles,
    automovil,
  },
});

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "The root mutation type",
  fields: {
    register,
    createAutomovil,
    addSoat
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
