import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "../src/client";
import { ChakraProvider } from "@chakra-ui/react";
import { MovieShowPage } from "./pages/MovieShowPage";
import { PlanetsShowPage } from "./pages/PlanetsShowPage";
import { SpeciesShowPage } from "./pages/SpeciesShowPage";
import { LayoutContainer } from "./components/LayoutContainer";
import { HomeContentView } from "./components/HomeContentView";
import { MoviesContentView } from "./components/MoviesContentView";
import { PlanetsContentView } from "./components/PlanetsContentView";
import { SpeciesContentView } from "./components/SpeciesContentView";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<ChakraProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<LayoutContainer main={<HomeContentView />} />} />
						<Route path="/movies" element={<LayoutContainer main={<MoviesContentView />} />} />
						<Route path="/movies/:id" element={<LayoutContainer main={<MovieShowPage />} />} />
						<Route path="/planets" element={<LayoutContainer main={<PlanetsContentView />} />} />
						<Route path="/planets/:id" element={<LayoutContainer main={<PlanetsShowPage />} />} />
						<Route path="/species" element={<LayoutContainer main={<SpeciesContentView />} />} />
						<Route path="/species/:id" element={<LayoutContainer main={<SpeciesShowPage />} />} />
					</Routes>
				</BrowserRouter>
			</ChakraProvider>
		</ApolloProvider>
	</React.StrictMode>
);
