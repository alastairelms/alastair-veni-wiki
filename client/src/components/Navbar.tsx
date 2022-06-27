import { VStack, List, ListItem, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<VStack p={3}>
			<Heading p={5} color="#0070f3" fontWeight="hairline">
				<Link to="/">
					star <br />
					wars <br />
					wiki
				</Link>
			</Heading>

			<List spacing={5}>
				<ListItem>
					<Link to="/movies">
						<Text
							fontWeight="bold"
							_hover={{
								borderColor: "#0070f3",
								color: "#0070f3",
								fontWeight: "bold",
							}}
						>
							Movies
						</Text>
					</Link>
				</ListItem>
				<ListItem>
					<Link to="/planets">
						<Text
							fontWeight="bold"
							_hover={{
								borderColor: "#0070f3",
								color: "#0070f3",
								fontWeight: "bold",
							}}
						>
							Planets
						</Text>
					</Link>
				</ListItem>
				<ListItem>
					<Link to="/species">
						<Text
							fontWeight="bold"
							_hover={{
								borderColor: "#0070f3",
								color: "#0070f3",
								fontWeight: "bold",
							}}
						>
							Species
						</Text>
					</Link>
				</ListItem>
			</List>
		</VStack>
	);
};
