import { FaHome } from "react-icons/fa";
import { VStack, List, ListItem, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<VStack align="left" p={3}>
			<List p={3} spacing={5}>
				<ListItem>
					<Link to="/">
						<Icon as={FaHome} w={5} h={5} />
					</Link>
				</ListItem>
				<ListItem>
					<Link to="/movies">Movies</Link>
				</ListItem>
				<ListItem>
					<Link to="/planets">Planets</Link>
				</ListItem>
				<ListItem>
					<Link to="/species">Species</Link>
				</ListItem>
			</List>
		</VStack>
	);
};
