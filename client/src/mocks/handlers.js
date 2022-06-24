import { graphql } from "msw";
export const handlers = [
	graphql.query("GetFilms", (req, res, ctx) => {
		return res(
			ctx.data({
				allFilms: {
					films: [
					  {
						title: "A New Hope",
						director: "George Lucas",
						releaseDate: "1977-05-25",
						id: "ZmlsbXM6MQ=="
					  },
					  {
						title: "The Empire Strikes Back",
						director: "Irvin Kershner",
						releaseDate: "1980-05-17",
						id: "ZmlsbXM6Mg=="
					  },
					  {
						title: "Return of the Jedi",
						director: "Richard Marquand",
						releaseDate: "1983-05-25",
						id: "ZmlsbXM6Mw=="
					  },
					  {
						title: "The Phantom Menace",
						director: "George Lucas",
						releaseDate: "1999-05-19",
						id: "ZmlsbXM6NA=="
					  },
					  {
						title: "Attack of the Clones",
						director: "George Lucas",
						releaseDate: "2002-05-16",
						id: "ZmlsbXM6NQ=="
					  },
					  {
						title: "Revenge of the Sith",
						director: "George Lucas",
						releaseDate: "2005-05-19",
						id: "ZmlsbXM6Ng=="
					  }
					]
				  }
			})
		);
	}),
];
