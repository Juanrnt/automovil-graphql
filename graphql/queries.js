const { GraphQLList, GraphQLID } = require("graphql");
const { UserType, AutomovilType, SeguroType } = require("./types");
const { User, Automovil, Seguro } = require("../models");

const users = {
  type: new GraphQLList(UserType),
  description: "List of users",
  resolve() {
    return User.find();
  },
};

const user = {
  type: UserType,
  description: "get a user by id",
  args: {
    id: { type: GraphQLID },
  },
  resolve(_, args) {
    console.log(args);
    return User.findById(args.id);
  },
};

const automoviles = {
  type: new GraphQLList(AutomovilType),
  description: "List of automoviles",
  resolve() {
    return Automovil.find();
  },
};

const automovil = {
  type: AutomovilType,
  description: "get a automovil by id",
  args: { id: { type: GraphQLID } },
  resolve: (_, { id }) => Automovil.findById(id),
};

const seguros = {
  type: new GraphQLList(SeguroType),
  description: "Get all seguros",
  resolve: () => Seguro.find(),
};

const seguro = {
  type: SeguroType,
  description: "Get a seguro",
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_, { id }) => Seguro.findById(id),
};

module.exports = { users, user, automoviles, automovil, seguros, seguro };
