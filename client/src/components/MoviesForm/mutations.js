import {gql} from "apollo-boost";

export const addMovieMutation = gql`
    mutation AddMovie($name: String!, $genre: String!, $rate: Int, $watched: Boolean!, $directorId: String) {
        addMovie(name: $name, genre: $genre, rate: $rate, watched: $watched, directorId: $directorId){
            name
        }
    }
`;
