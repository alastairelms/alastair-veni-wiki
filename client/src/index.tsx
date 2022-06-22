import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
  } from "react-router-dom";
import { Home } from './App';
import { ApolloProvider } from "@apollo/client";
import { client } from '../src/client'
import { ChakraProvider } from '@chakra-ui/react';
import { Movies } from './pages/Movies';
import { Planets } from './pages/Planets';
import { Species } from './pages/Species';
import { MovieShowPage } from './pages/MovieShowPage';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
            <ApolloProvider client={client}>
            <ChakraProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/movies' element={<Movies />}/>
                        <Route path='/movies/:id' element={<MovieShowPage />}/>
                        <Route path='/planets' element={<Planets />}/>
                        <Route path='/species' element={<Species />}/>
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
            </ApolloProvider>
    </React.StrictMode>
);
