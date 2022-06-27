import { Navbar } from ".//Navbar";
import { Grid, GridItem } from "@chakra-ui/react";

export const LayoutContainer = ({ main }: any) => {
	return (
		<Grid
			templateAreas={`"nav header"
							"nav main"
							"nav main"`}
			gridTemplateRows={"auto 1fr auto"}
			gridTemplateColumns={"auto 1fr"}
			h="100vh"
		>
			<GridItem borderRight="1px solid white" area={"nav"}>
				<Navbar />
			</GridItem>
			<GridItem area={"main"}>{main}</GridItem>
		</Grid>
	);
};
