import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const PlanetsShowPage = () => {
	const { id } = useParams();

	return <p>Planets Show Page - {id}</p>;
};
