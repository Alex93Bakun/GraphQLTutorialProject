require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;
dbConnection.on('error', (error) => console.log('Connection error: ', error));
dbConnection.once('open', () => console.log('Connected to DB!'));

app.use(cors());
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(PORT, (error) => {
    error
        ? console.log(error)
        : console.log(`Server listening on port: ${PORT}`);
});
