import { useParams } from "react-router-dom";

export const SpeciesShowPage = () => {
	const { id } = useParams();

	return <p>Species Show Page - {id}</p>;
};
