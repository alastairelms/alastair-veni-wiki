import { Icon, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export const Footer = () => (
	<Link
		href="https://github.com/alastairelms/alastair-veni-wiki"
		target="_blank"
	>
		<Icon w={7} h={7} m={3} as={FaGithub} />
	</Link>
);
