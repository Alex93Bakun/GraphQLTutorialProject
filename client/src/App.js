import Tabs from './components/Tabs/Tabs';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
});

const App = () => (
    <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
            <Tabs />
        </MuiThemeProvider>
    </ApolloProvider>
);

export default App;
