const { Schema, model } = require("mongoose");

const automovilSchema = new Schema(
  {
    marca: {
      type: String,
      require: true,
    },
    modelo: {
      type: String,
      require: true,
    },

    motor: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
    authorId: {
      type: String,
      require: true,
    },
    /*      seguro: {
      type: String,
      require: true,
    }, */
  },
  {
    timestamps: true,
  }
);

module.exports = model("Automovil", automovilSchema);
