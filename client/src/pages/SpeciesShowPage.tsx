import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const SpeciesShowPage = () => {
	const { id } = useParams();

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
				<Text>Species page - {id}</Text>
			</GridItem>
			<GridItem borderTop="1px solid white" area={"footer"}>
				<Footer />
			</GridItem>
		</Grid>
	);
};
