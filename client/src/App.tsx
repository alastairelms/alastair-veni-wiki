import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export function Home() {
	return (
		<Grid
			templateAreas={`"header header"
							"nav main"
							"nav footer"`}
			gridTemplateRows={"auto 1fr auto"}
			gridTemplateColumns={"auto 1fr"}
			h="100vh"
		>
			<GridItem borderBottom="1px solid white" area={"header"}>
				<Heading p={5}>Star Wars Wiki</Heading>
			</GridItem>
			<GridItem borderRight="1px solid white" area={"nav"}>
				<Navbar />
			</GridItem>
			<GridItem area={"main"}>
				<Text>Welcome</Text>
			</GridItem>
			<GridItem borderTop="1px solid white" area={"footer"}>
				<Footer />
			</GridItem>
		</Grid>
	);
}
