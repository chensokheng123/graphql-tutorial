const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect with database
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', (err, res) => {
  if (err) {
    return;
  }
  console.log('Mongodb is connected');
});
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
