import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer"
import { MainContentView } from "./components/MainContentView";
import { Grid, GridItem, Heading } from "@chakra-ui/react";

export function App() {
	return (
		<Grid
			templateAreas={`"header header"
							"nav main"
							"nav footer"`}
			gridTemplateRows={"auto 1fr auto"}
			gridTemplateColumns={"auto 1fr"}
			h="100vh"
		>
			<GridItem borderBottom='3px solid white' area={"header"}>
				<Heading p={5}>Star Wars Wiki</Heading>
			</GridItem>
			<GridItem borderRight='3px solid white' area={"nav"}>
				<Navbar />
			</GridItem>
			<GridItem area={"main"}>
				<MainContentView />
			</GridItem>
			<GridItem borderTop='3px solid white' area={"footer"}>
				<Footer />
			</GridItem>
		</Grid>
	);
}
