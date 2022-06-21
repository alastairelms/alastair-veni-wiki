import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from "@apollo/client";
import { client } from '../src/client'
import { ChakraProvider } from '@chakra-ui/react';



// const { worker } = require('./mocks/browser')
// worker.start()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </ApolloProvider>,
    </React.StrictMode>
);
