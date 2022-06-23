import { HomeContentView } from "./components/HomeContentView";
import { LayoutContainer } from "./components/LayoutContainer";

export const Home = () => (
	<LayoutContainer main={<HomeContentView/>} />
);
