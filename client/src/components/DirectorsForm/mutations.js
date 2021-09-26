import {gql} from "apollo-boost";

export const addDirectorMutation = gql`
    mutation AddDirector($name: String!, $age: Int!) {
        addDirector(name: $name, age: $age) {
            name
            age
        }
    }
`;
