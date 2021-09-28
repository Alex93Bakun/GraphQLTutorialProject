import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { directorsQuery } from './queries';

const withGraphQL = graphql(directorsQuery, {
    options: ({ name = '' }) => ({
        variables: { name },
    }),
});
export default compose(withGraphQL);
