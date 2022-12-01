const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require("graphql");
const { User, Automovil, Seguro } = require("../models");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    displayName: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
});

const AutomovilType = new GraphQLObjectType({
  name: "AutomovilType",
  description: "The automovil type",
  fields: () => ({
    id: { type: GraphQLID },
    marca: { type: GraphQLString },
    modelo: { type: GraphQLString },
    motor: { type: GraphQLString },
    color: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    author: {
      type: UserType,
      resolve(parent) {
        return User.findById(parent.authorId);
      },
    },
    seguros: {
      type: new GraphQLList(SeguroType),
      resolve(parent) {
        return Seguro.find({ automovilId: parent.id });
      },
    },
  }),
});

const SeguroType = new GraphQLObjectType({
  name: "SeguroType",
  description: "The seguro type",
  fields: () => ({
    id: { type: GraphQLID },
    soatStart: { type: GraphQLString },
    soatEnd: { type: GraphQLString },
    tecnoStart: { type: GraphQLString },
    tecnoEnd: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent) {
        return User.findById(parent.userId);
      },
    },
    automovil: {
      type: AutomovilType,
      resolve(parent) {
        return Automovil.findById(parent.automovilId);
      },
    },
  }),
});

/* const AutomovilType = new GraphQLObjectType({
  name: "AutomovilType",
  description: "The automovil type",
  fields: () => ({
    id: { type: GraphQLID },
    marca: { type: GraphQLString },
    modelo: { type: GraphQLString },
    motor: { type: GraphQLString },
    color: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    author: {
      type: UserType,
      resolve(parent) {
        return User.findById(parent.authorId);
      },
    },
    seguro: {
      type: new GraphQLList(SeguroType),
      resolve(parent) {
        return Seguro.find({ postId: parent.id });
      },
    },
  }),
}); */

/* const SeguroType = new GraphQLObjectType({
  name: "SeguroType",
  description: "The seguro type",
  fields: () => ({
    id: { type: GraphQLID },
    soatStart: { type: GraphQLString },
    soatEnd: { type: GraphQLString },
    tecnoStart: { type: GraphQLString },
    tecnoEnd: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent) {
        return User.findById(parent.userId);
      },
    },
    automovil: {
      type: AutomovilType,
      resolve(parent) {
        return Automovil.findById(parent.postId);
      },
    },
  }),
}); */

module.exports = {
  UserType,
  AutomovilType,
  SeguroType,
};
