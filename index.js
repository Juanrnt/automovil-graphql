var express = require("express");
var { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const { connectDB } = require("./db");

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to my graphql api");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(3000, () => console.log("Now browse to localhost:3000/graphql"));
