import { Navbar } from "../components/Navbar";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { SpeciesContentView } from "../components/SpeciesContentView";

export const Species = () => (
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
			<SpeciesContentView />
		</GridItem>
		<GridItem borderTop="1px solid white" area={"footer"}>
			<Footer />
		</GridItem>
	</Grid>
);
