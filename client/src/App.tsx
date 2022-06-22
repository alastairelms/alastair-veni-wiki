import React from "react";
import Navbar from "./components/Navbar";
import MoviesView from "./components/MainContentView";
import { HStack } from "@chakra-ui/react";

function App() {
	return (
		<HStack>
			<Navbar />
			<MoviesView />			
		</HStack>
	);
}

export default App;
