import React from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/SearchBar";
import MoviesView from "./components/MoviesView";

// import "./App.css"

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Searchbar></Searchbar>
			<MoviesView></MoviesView>
		</>
	);
}

export default App;
