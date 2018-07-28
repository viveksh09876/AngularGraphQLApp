const express = require('express');
const cors = require('cors');
const graphql = require('express-graphql');
const schema = require('./schema');

const app = express();
app.use(cors());
app.use(
    '/graphql',
    graphql({
        schema: schema,
        graphiql: true
    })
);

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));