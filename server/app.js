const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT, (error) => {
    error
        ? console.log(error)
        : console.log(`Server listening on port: ${PORT}`);
});
