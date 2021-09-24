const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
} = require('graphql');

const movies = [
    { id: '1', name: 'Pulp Fiction', genre: 'Crime', directorId: '1' },
    { id: '2', name: '1984', genre: 'Sci-Fi', directorId: '2' },
    {
        id: '3',
        name: 'V for vendetta',
        genre: 'Sci-Fi-Thriller',
        directorId: '3',
    },
    { id: '4', name: 'Snatch', genre: 'Crime-Comedy', directorId: '4' },
    { id: '5', name: 'Reservoir Dogs', genre: 'Crime', directorId: '1' },
    { id: '6', name: 'The Hateful Eight', genre: 'Crime', directorId: '1' },
    { id: '7', name: 'Inglorious Bastards', genre: 'Crime', directorId: '1' },
    {
        id: '7',
        name: 'Lock, Stock and Two Smoking Barrels',
        genre: 'Crime-Comedy',
        directorId: '4',
    },
];

const directors = [
    { id: '1', name: 'Quentin Tarantino', age: 55 }, // 614d624f0a824bced634a51c
    { id: '2', name: 'Michael Radford', age: 72 }, // 614d62d30a824bced634a51f
    { id: '3', name: 'James McTeigue', age: 51 }, // 614d62ec0a824bced634a520
    { id: '4', name: 'Guy Ritchie', age: 50 }, // 614d632b0a824bced634a521
];

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        director: {
            type: DirectorType,
            resolve(parent, args) {
                return directors.find((director) => director.id === parent.id);
            },
        },
    }),
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                return movies.filter((movie) => movie.directorId === parent.id);
            },
        },
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return movies.find((movie) => movie.id === args.id);
            },
        },
        director: {
            type: DirectorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return directors.find((director) => director.id === args.id);
            },
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                return movies;
            },
        },
        directors: {
            type: new GraphQLList(DirectorType),
            resolve(parent, args) {
                return directors;
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: Query,
});
