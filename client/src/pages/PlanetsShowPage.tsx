import { useParams } from "react-router-dom";

export const PlanetsShowPage = () => {
	const { id } = useParams();

	return <p>Planets Show Page - {id}</p>;
};
