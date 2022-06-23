import { SimpleGrid, Text } from "@chakra-ui/react";

export const HomeContentView = () => (
	<SimpleGrid columns={2}>
		<Text pt={3} pl={5} letterSpacing={1}>
			Star Wars is an American epic space-opera multimedia franchise created by
			George Lucas, which began with the eponymous 1977 film and quickly became
			a worldwide pop-culture phenomenon. The franchise has been expanded into
			various films and other media, including television series, video games,
			novels, comic books, theme park attractions, and themed areas, comprising
			an all-encompassing fictional universe. In 2020, its total value was
			estimated at US$70 billion, and it is currently the fifth-highest-grossing
			media franchise of all time. The original film (Star Wars), retroactively
			subtitled Episode IV: A New Hope (1977), was followed by the sequels
			Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the
			Jedi (1983), forming the original Star Wars trilogy. Lucas later returned
			to the series to direct a prequel trilogy, consisting of Episode I: The
			Phantom Menace (1999), Episode II: Attack of the Clones (2002), and
			Episode III: Revenge of the Sith (2005).
		</Text>
		<Text pt={3} pl={5} letterSpacing={1}>
			In 2012, Lucas sold his production company to Disney, relinquishing his
			ownership of the franchise. This led to a sequel trilogy, consisting of
			Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017),
			and Episode IX: The Rise of Skywalker (2019). All nine films of the
			"Skywalker Saga" were nominated for Academy Awards, with wins going to the
			first two releases. Together with the theatrical live action "anthology"
			films Rogue One (2016) and Solo (2018), the combined box office revenue of
			the films equated to over US$10 billion, which makes it the
			second-highest-grossing film franchise of all time. Additional upcoming
			films are in the works, including an untitled movie from Taika Waititi
			planned for 2023 and Rogue Squadron directed by Patty Jenkins, which
			currently does not have a release date.
		</Text>
	</SimpleGrid>
);
