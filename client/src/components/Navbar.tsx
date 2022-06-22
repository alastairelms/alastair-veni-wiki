import { FaHome } from "react-icons/fa";

import { VStack, Link, List, ListItem, Icon } from "@chakra-ui/react";

const Navbar = () => {
	return (
		<VStack align="left" p={5}>

			<List spacing={5}>
				<ListItem>
                    <Link><Icon as={FaHome} w={5} h={5}/></Link>
				</ListItem>
				<ListItem>
					<Link>Movies</Link>
				</ListItem>
				<ListItem>
					<Link>Planets</Link>
				</ListItem>
				<ListItem>
					<Link>Species</Link>
				</ListItem>
			</List>
		</VStack>
	);
};
export default Navbar;
