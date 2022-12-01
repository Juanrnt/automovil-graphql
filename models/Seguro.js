const { Schema, model } = require("mongoose");

const seguroSchema = new Schema(
  {
    soatStart: {
      type: String,
      require: true,
    },
    soatEnd: {
      type: String,
      require: true,
    },
    tecnoStart: {
      type: String,
      require: true,
    },
    tecnoEnd: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
    automovilId: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Seguro", seguroSchema);
