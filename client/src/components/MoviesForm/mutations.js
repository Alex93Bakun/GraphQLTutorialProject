import {gql} from "apollo-boost";

export const addMovieMutation = gql`
    mutation AddMovie($name: String!, $genre: String!, $rate: Int, $watched: Boolean!, $directorId: String) {
        addMovie(name: $name, genre: $genre, rate: $rate, watched: $watched, directorId: $directorId){
            name
        }
    }
`;

export const updateMovieMutation = gql`
    mutation updateMovie($id: ID, $name: String!, $genre: String!, $rate: Int, $watched: Boolean!, $directorId: String) {
        updateMovie(id: $id, name: $name, genre: $genre, rate: $rate, watched: $watched, directorId: $directorId){
            name
        }
    }
`;
