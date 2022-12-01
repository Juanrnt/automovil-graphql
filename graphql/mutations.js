const { GraphQLString, GraphQLID } = require("graphql");
const { User, Automovil, Seguro } = require("../models");
const { SeguroType, AutomovilType } = require("./types");

const register = {
  type: GraphQLString,
  description: "Resgister a new user and returns a token",
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString },
  },
  async resolve(_, args) {
    const { username, email, password, displayName } = args;

    const user = new User({ username, email, password, displayName });
    await user.save();

    return console.log("Usuario creado");
  },
};

const createAutomovil = {
  type: AutomovilType,
  description: "Create auto",
  args: {
    marca: { type: GraphQLString },
    modelo: { type: GraphQLString },
    motor: { type: GraphQLString },
    color: { type: GraphQLString },
    authorId: { type: GraphQLString},
  },
  async resolve(_, args) {
    const { marca, modelo, motor, color, authorId } = args;

    const automovil = new Automovil({ 
      marca, 
      modelo, 
      motor, 
      color,
      authorId
    });
    await automovil.save();

    return automovil;
  },
};

const addSoat = {
  type: SeguroType,
  description: "Add a seguro to a automovil",
  args: {
    soatStart: { type: GraphQLString },
    soatEnd: { type: GraphQLString },
    tecnoStart: { type: GraphQLString },
    tecnoEnd: { type: GraphQLString },
    automovilId: { type: GraphQLID },
    userId: { type: GraphQLID },
  },
  async resolve(_, args) {
    const newSeguro = new Seguro({
      soatStart: args.soatStart,
      soatEnd: args.soatEnd,
      tecnoStart: args.tecnoStart,
      tecnoEnd: args.tecnoEnd,
      automovilId: args.automovilId,
      userId: args.userId,
    });
    return newSeguro.save();
  },
};

/* const createAutomovil = {
  type: AutomovilType,
  description: "Create a new automovil",
  args: {
    marca: { type: GraphQLString },
    modelo: { type: GraphQLString },
    motor: { type: GraphQLString },
    color: { type: GraphQLString },
  },
  async resolve(_, args) {
    console.log(args);

    const automovil = new Automovil({
      marca: args.marca,
      modelo: args.modelo,
      motor: args.motor,
      color: args.color,
    });
    console.log(automovil);

    await automovil.save();

    return automovil;
  },
}; */

module.exports = {
  register,
  createAutomovil,
  addSoat,
};