const questions = [
		{
			"questions": [
				{
					"question": "Quel joueur de football britannique est souvent considéré comme l'un des meilleurs au monde et a joué pour Manchester United et le Real Madrid?",
					"content": ["Lionel Messi", "Neymar Jr.", "Cristiano Ronaldo", "Kylian Mbappé"],
					"correct": 2
				},
				{
					"question": "Quel sport est associé au tournoi de Wimbledon?",
					"content": ["Tennis", "Golf", "Cricket", "Football"],
					"correct": 0
				},
				{
					"question": "Quelle équipe de football est basée à Anfield et est connue sous le surnom de 'The Reds'?",
					"content": ["Manchester City", "Liverpool", "Chelsea", "Arsenal"],
					"correct": 1
				},
				{
					"question": "Dans quel sport les équipes s'affrontent-elles pour la Ryder Cup?",
					"content": ["Football", "Golf", "Tennis", "Cricket"],
					"correct": 1
				},
				{
					"question": "Quel est le plus grand événement de rugby en Angleterre qui a lieu tous les quatre ans?",
					"content": ["Rugby World Cup", "Six Nations Championship", "The Ashes", "FA Cup"],
					"correct": 0
				},
				{
					"question": "Quelle équipe de Formule 1 a Lewis Hamilton représenté pendant la majeure partie de sa carrière?",
					"content": ["Ferrari", "Mercedes", "Red Bull Racing", "McLaren"],
					"correct": 1
				},
				{
					"question": "Quelle compétition de cricket est associée à une série de cinq matchs entre l'Angleterre et l'Australie?",
					"content": ["The Ashes", "Cricket World Cup", "Indian Premier League", "ICC Champions Trophy"],
					"correct": 0
				},
				{
					"question": "Quel est le célèbre stade de football situé à Manchester, qui est le domicile de Manchester United?",
					"content": ["Anfield", "Old Trafford", "Etihad Stadium", "Stamford Bridge"],
					"correct": 1
				},
				{
					"question": "Quelle compétition de tennis se déroule à Roland Garros?",
					"content": ["Wimbledon", "US Open", "Australian Open", "French Open"],
					"correct": 3
				},
				{
					"question": "Quel événement annuel célèbre la naissance de la reine Elizabeth II?",
					"content": ["Jour de la Victoire", "Trooping the Colour", "Bonfire Night", "Halloween"],
					"correct": 1
				},
				{
					"question": "Quel écrivain britannique est l'auteur de la série de livres 'Harry Potter'?",
					"content": ["J.K. Rowling", "Roald Dahl", "Enid Blyton", "C.S. Lewis"],
					"correct": 0
				},
				{
					"question": "Quel fleuve traverse la ville de Londres?",
					"content": ["Tamise", "Severn", "Avon", "Clyde"],
					"correct": 0
				},
				{
					"question": "Quelle est la monnaie officielle du Royaume-Uni?",
					"content": ["Euro", "Dollar britannique", "Livre sterling", "Franc suisse"],
					"correct": 2
				},
				{
					"question": "Quelle est la fête nationale de l'Angleterre?",
					"content": ["St. Patrick's Day", "St. George's Day", "Burns Night", "Bastille Day"],
					"correct": 1
				},
				{
					"question": "Qui est l'auteur de la pièce de théâtre 'Romeo et Juliette'?",
					"content": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Emily Brontë"],
					"correct": 0
				},
				{
					"question": "Quel est le plat traditionnel du petit-déjeuner anglais?",
					"content": ["Fish and Chips", "Roast Beef", "Full English Breakfast", "Shepherd's Pie"],
					"correct": 2
				},
				{
					"question": "Quelle ville abrite le célèbre musée 'British Museum'?",
					"content": ["Manchester", "Birmingham", "Londres", "Édimbourg"],
					"correct": 2
				},
				{
					"question": "Qui est la patronne de l'Écosse?",
					"content": ["St. Andrew", "St. Patrick", "St. David", "St. George"],
					"correct": 0
				},
				{
					"question": "Quel événement sportif annuel est célèbre pour ses courses d'aviron entre les universités d'Oxford et de Cambridge?",
					"content": ["Wimbledon", "The Boat Race", "Royal Ascot", "The Grand National"],
					"correct": 1
				},
				{
					"question": "Quel édifice emblématique de Londres a été construit comme une tour de séparation?",
					"content": ["Big Ben", "The Shard", "Tower of London", "London Eye"],
					"correct": 2
				},
				{
					"question": "Quel est le nom du Premier Ministre britannique qui a dirigé le pays pendant la Seconde Guerre mondiale?",
					"content": ["Winston Churchill", "Margaret Thatcher", "Tony Blair", "David Cameron"],
					"correct": 0
				},
				{
					"question": "Quel est le plat espagnol à base de riz, souvent préparé avec du safran et divers ingrédients?",
					"content": ["Paella", "Tapas", "Gazpacho", "Churros"],
					"correct": 0
				},
				{
					"question": "Qui est l'architecte renommé derrière la Sagrada Família à Barcelone?",
					"content": ["Antoni Gaudí", "Pablo Picasso", "Salvador Dalí", "Diego Velázquez"],
					"correct": 0
				},
				{
					"question": "Quelle est la monnaie officielle de l'Espagne?",
					"content": ["Peso espagnol", "Livre espagnole", "Euro", "Real"],
					"correct": 2
				},
				{
					"question": "Quel festival coloré est célébré à Valence avec des batailles de tomates?",
					"content": ["La Feria de Abril", "La Tomatina", "San Fermín", "La Mercè"],
					"correct": 1
				},
				{
					"question": "Quel artiste espagnol est célèbre pour ses œuvres surréalistes, telles que 'La Persistencia de la Memoria'?",
					"content": ["Pablo Picasso", "Salvador Dalí", "Joan Miró", "Francisco Goya"],
					"correct": 1
				},
				{
					"question": "Quelle est la capitale de l'Espagne?",
					"content": ["Barcelone", "Madrid", "Valence", "Séville"],
					"correct": 1
				},
				{
					"question": "Quel explorateur espagnol a découvert l'Amérique en 1492?",
					"content": ["Hernán Cortés", "Francisco Pizarro", "Ferdinand Magellan", "Christophe Colomb"],
					"correct": 3
				},
				{
					"question": "Quelle est la langue officielle de l'Espagne?",
					"content": ["Espagnol", "Catalan", "Basque", "Galicien"],
					"correct": 0
				},
				{
					"question": "Quel événement espagnol traditionnel implique la construction de structures humaines souvent très hautes?",
					"content": ["Feria de Abril", "San Fermín", "La Tomatina", "Castells"],
					"correct": 3
				},
				{
					"question": "Quel est le nom du célèbre architecte catalan associé à de nombreux bâtiments modernistes à Barcelone?",
					"content": ["Antoni Gaudí", "Frank Gehry", "Zaha Hadid", "Le Corbusier"],
					"correct": 0
				},
				{
					"question": "Quel roi espagnol est connu pour avoir soutenu et financé le voyage de Christophe Colomb en 1492?",
					"content": ["Juan Carlos I", "Felipe VI", "Alfonso XIII", "Ferdinand II d'Aragon"],
					"correct": 3
				},
				{
					"question": "Quel événement sportif majeur a lieu tous les quatre ans et met en vedette des athlètes du monde entier?",
					"content": ["Jeux Olympiques", "Coupe du Monde de Football", "Super Bowl", "Championnat du Monde de Cricket"],
					"correct": 0
				},
				{
					"question": "Quel célèbre festival de musique a lieu chaque année à Glastonbury, au Royaume-Uni?",
					"content": ["Coachella", "Tomorrowland", "Glastonbury Festival", "Woodstock"],
					"correct": 2
				},
				{
					"question": "Quel écrivain espagnol a écrit 'Don Quichotte', l'un des romans les plus importants de la littérature mondiale?",
					"content": ["Miguel de Cervantes", "Gabriel García Márquez", "Jorge Luis Borges", "Isabel Allende"],
					"correct": 0
				},
				{
					"question": "Quelle est la boisson alcoolisée traditionnelle de l'Espagne, souvent associée aux régions de l'Andalousie et de la Catalogne?",
					"content": ["Vodka", "Tequila", "Rum", "Sangria"],
					"correct": 3
				},
				{
					"question": "Quel écrivain britannique est l'auteur de la série de livres '1984' et 'Animal Farm'?",
					"content": ["J.R.R. Tolkien", "George Orwell", "C.S. Lewis", "Aldous Huxley"],
					"correct": 1
				},
				{
					"question": "Quelle est la plus haute montagne du Royaume-Uni?",
					"content": ["Snowdon", "Ben Nevis", "Scafell Pike", "Helvellyn"],
					"correct": 1
				},
				{
					"question": "Quel célèbre dramaturge espagnol a écrit 'La vie est un songe'?",
					"content": ["Pedro Calderón de la Barca", "Federico García Lorca", "Antonio Machado", "Miguel de Unamuno"],
					"correct": 0
				},
				{
					"question": "Quel célèbre écrivain britannique a créé le personnage de Sherlock Holmes?",
					"content": ["Charles Dickens", "Arthur Conan Doyle", "Jane Austen", "Agatha Christie"],
					"correct": 1
				},
				{
					"question": "Quel est le plus grand parc national du Royaume-Uni, situé principalement en Écosse?",
					"content": ["Peak District", "Snowdonia", "Cairngorms", "Lake District"],
					"correct": 2
				},
				{
					"question": "Quel est le nom de la résidence officielle du monarque britannique à Londres?",
					"content": ["Balmoral Castle", "Windsor Castle", "Buckingham Palace", "Holyrood Palace"],
					"correct": 2
				},
				{
					"question": "Quelle est la célèbre émission de science-fiction britannique qui met en scène le Docteur et son vaisseau spatial, le TARDIS?",
					"content": ["Star Trek", "Doctor Who", "The X-Files", "Battlestar Galactica"],
					"correct": 1
				},
				{
					"question": "Quel a été le résultat du référendum sur le Brexit organisé en 2016?",
					"content": ["Reste dans l'UE", "Quitte l'UE", "Pas de majorité claire", "Pas de référendum en 2016"],
					"correct": 1
				},
				{
					"question": "Quel est le nom de la rivière qui traverse la ville de Barcelone?",
					"content": ["Ebre", "Guadalquivir", "Llobregat", "Duero"],
					"correct": 2
				},
				{
					"question": "Quelle est la deuxième langue officielle de l'Écosse, aux côtés de l'anglais?",
					"content": ["Gallois", "Gaélique écossais", "Irlandais", "Cornique"],
					"correct": 1
				},
				{
					"question": "Quel est le nom de l'équipe de football basée à Barcelone et qui rivalise avec le Real Madrid?",
					"content": ["Atletico Madrid", "Espanyol", "Sevilla FC", "FC Barcelona"],
					"correct": 3
				},
				{
					"question": "Quel est le nom du célèbre écrivain espagnol connu pour ses ouvrages comme 'La Génération perdue'?",
					"content": ["Miguel de Cervantes", "Federico García Lorca", "Antonio Machado", "Ernest Hemingway"],
					"correct": 3
				},
				{
					"question": "Quel est le nom du parc d'attractions situé à Barcelone, connu pour ses sculptures en mosaïque conçues par Antoni Gaudí?",
					"content": ["Tibidabo", "Parc Güell", "PortAventura", "Isla Mágica"],
					"correct": 1
				},
				{
					"question": "Quel est le nom du célèbre musée à Madrid qui abrite des œuvres d'art de renommée mondiale, y compris 'Las Meninas' de Velázquez?",
					"content": ["Musée Guggenheim", "Musée du Prado", "Centre Pompidou", "Musée Reina Sofía"],
					"correct": 1
				},
				{
					"question": "Quel est le plat espagnol à base de fruits de mer et de riz, originaire de la région de Valence?",
					"content": ["Gazpacho", "Tortilla Española", "Escudella i Carn d'Olla", "Paella"],
					"correct": 3
				},
				{
					"question": "Quel est le nom du célèbre écrivain espagnol connu pour ses pièces de théâtre, y compris 'La Casa de Bernarda Alba'?",
					"content": ["Federico García Lorca", "Miguel de Cervantes", "Antonio Machado", "Pedro Calderón de la Barca"],
					"correct": 0
				},
				{
					"question": "Quelle est la plus haute montagne d'Espagne, située sur l'île de Tenerife?",
					"content": ["Mulhacén", "Teide", "Aneto", "Pico Veleta"],
					"correct": 1
				},
				{
					"question": "Quel célèbre festival espagnol se déroule chaque année à Barcelone et met en avant les œuvres audiovisuelles?",
					"content": ["La Mercè", "La Tomatina", "Festival de Cannes", "Sonar Festival"],
					"correct": 3
				},
				{
					"question": "Quel est le nom du fleuve qui traverse la ville de Séville?",
					"content": ["Guadalquivir", "Ebre", "Duero", "Tajo"],
					"correct": 0
				},
				{
					"question": "Quel est le nom de la plage la plus célèbre de Barcelone, située le long de la mer Méditerranée?",
					"content": ["Playa de la Victoria", "Playa de la Concha", "Barceloneta", "Playa de las Canteras"],
					"correct": 2
				},
				{
					"question": "Quel célèbre peintre espagnol est souvent appelé 'le Greco'?",
					"content": ["Salvador Dalí", "Diego Velázquez", "Francisco Goya", "El Greco"],
					"correct": 3
				},
				{
					"question": "Quel est le nom de la communauté autonome espagnole qui a le catalan comme langue officielle?",
					"content": ["Andalousie", "Catalogne", "Galice", "Pays basque"],
					"correct": 1
				},
				{
					"question": "Quelle est la monnaie utilisée au Pays de Galles, qui fait partie du Royaume-Uni?",
					"content": ["Livre sterling", "Euro", "Livre galloise", "Pound"],
					"correct": 0
				},
				{
					"question": "Quel écrivain britannique a écrit la trilogie 'The Lord of the Rings'?",
					"content": ["J.K. Rowling", "C.S. Lewis", "J.R.R. Tolkien", "George Orwell"],
					"correct": 2
				},
				{
					"question": "Quelle est la danse traditionnelle écossaise, souvent présentée lors d'événements festifs?",
					"content": ["Highland Fling", "Irish Jig", "Salsa", "Breakdance"],
					"correct": 0
				},
				{
					"question": "Quel est le nom de l'île britannique célèbre pour ses éditions du festival annuel de musique pop et rock?",
					"content": ["Isle of Wight", "Isle of Man", "Isle of Skye", "Isle of Anglesey"],
					"correct": 0
				},
				{
					"question": "Quel réalisateur britannique est connu pour ses films tels que 'Inception' et 'The Dark Knight'?",
					"content": ["Guy Ritchie", "Christopher Nolan", "Danny Boyle", "Richard Curtis"],
					"correct": 1
				},
				{
					"question": "Quel célèbre groupe de rock britannique a sorti l'album 'The Wall'?",
					"content": ["The Rolling Stones", "The Beatles", "Pink Floyd", "Led Zeppelin"],
					"correct": 2
				},
				{
					"question": "Quelle bataille historique, qui a eu lieu en 1066, a conduit à la conquête normande de l'Angleterre?",
					"content": ["Bataille d'Azincourt", "Bataille de Hastings", "Bataille de Bosworth", "Bataille de Stamford Bridge"],
					"correct": 1
				},
				{
					"question": "Quelle célèbre romancière britannique est connue pour ses œuvres telles que 'Orgueil et Préjugés' et 'Raison et Sentiments'?",
					"content": ["Charlotte Brontë", "Virginia Woolf", "Jane Austen", "Emily Brontë"],
					"correct": 2
				},
				{
					"question": "Quelle ville britannique est souvent associée aux Beatles et à la scène musicale des années 1960?",
					"content": ["Manchester", "Liverpool", "Birmingham", "Glasgow"],
					"correct": 1
				},
				{
					"question": "Quel réalisateur espagnol a remporté l'Oscar du meilleur film étranger pour 'Tout sur ma mère' et 'Parle avec elle'?",
					"content": ["Pedro Almodóvar", "Alejandro Amenábar", "Luis Buñuel", "Guillermo del Toro"],
					"correct": 0
				},
				{
					"question": "Quel groupe espagnol de rock a connu un grand succès avec la chanson 'La Flaca'?",
					"content": ["Héroes del Silencio", "Mana", "Jarabe de Palo", "Ketama"],
					"correct": 2
				},
				{
					"question": "Quel événement historique a marqué la fin de la domination maure en Espagne en 1492?",
					"content": ["La Reconquista", "La Inquisición", "La Revolución Española", "La Conquista de América"],
					"correct": 0
				},
				{
					"question": "Quel réalisateur espagnol est connu pour ses films tels que 'Le Labyrinthe de Pan' et 'L'Échine du Diable'?",
					"content": ["Pedro Almodóvar", "Alejandro Amenábar", "Luis Buñuel", "Guillermo del Toro"],
					"correct": 3
				},
				{
					"question": "Quel célèbre compositeur espagnol du XXe siècle a créé des œuvres telles que 'Concierto de Aranjuez'?",
					"content": ["Manuel de Falla", "Isaac Albéniz", "Enrique Granados", "Joaquín Rodrigo"],
					"correct": 3
				},
				{
					"question": "Quel est le nom du monument historique situé à Grenade, construit par les Maures au XIIIe siècle?",
					"content": ["La Giralda", "L'Alcazar", "L'Alhambra", "La Sagrada Familia"],
					"correct": 2
				},
				{
					"question": "Quel groupe britannique est célèbre pour son album conceptuel 'Tommy'?",
					"content": ["The Who", "The Kinks", "The Rolling Stones", "The Clash"],
					"correct": 0
				},
				{
					"question": "Quel roi d'Espagne a régné pendant la période de la 'Siglo de Oro' (Siècle d'or), un âge d'or artistique et littéraire?",
					"content": ["Philippe II", "Alphonse XIII", "Philippe IV", "Charles III"],
					"correct": 2
				},
				{
					"question": "Quelle écrivaine espagnole du Siècle d'or est connue pour son roman 'La Vie exemplaire de la religieuse Sainte Thérèse'?",
					"content": ["Lope de Vega", "Miguel de Cervantes", "Santa Teresa de Jesús", "Ana Caro"],
					"correct": 2
				},
				{
					"question": "Quel célèbre peintre espagnol est associé au mouvement surréaliste et a créé 'Guernica'?",
					"content": ["Francisco Goya", "Diego Velázquez", "Salvador Dalí", "Pablo Picasso"],
					"correct": 3
				},
				{
					"question": "Quel est le nom du groupe espagnol connu pour son mélange de flamenco et de rock, fondé par les frères Reyes?",
					"content": ["Gipsy Kings", "Los Lobos", "Maná", "Ketama"],
					"correct": 0
				},
				{
					"question": "Quelle célèbre cathédrale gothique est située au cœur de Barcelone et est un site du patrimoine mondial de l'UNESCO?",
					"content": ["Cathédrale de Séville", "Cathédrale de Tolède", "Cathédrale de Barcelone", "Cathédrale de Saint-Jacques-de-Compostelle"],
					"correct": 2
				},
				{
					"question": "Quel est le nom du studio de cinéma britannique qui a produit des films comme 'James Bond' et 'Harry Potter'?",
					"content": ["Pinewood Studios", "Shepperton Studios", "Elstree Studios", "Ealing Studios"],
					"correct": 0
				},
				{
					"question": "Quelle célèbre bataille de la Première Guerre mondiale a vu l'expansion de la guerre sous-marine par l'Allemagne, conduisant à l'entrée des États-Unis dans le conflit?",
					"content": ["Bataille de la Somme", "Bataille de Verdun", "Bataille de la Marne", "Bataille du Jutland"],
					"correct": 3
				},
				{
					"question": "Quel écrivain britannique est l'auteur du roman dystopique '1984'?",
					"content": ["Aldous Huxley", "Ray Bradbury", "George Orwell", "H.G. Wells"],
					"correct": 2
				},
				{
					"question": "Quel célèbre groupe britannique a sorti l'album 'Abbey Road'?",
					"content": ["The Rolling Stones", "The Who", "The Beatles", "Led Zeppelin"],
					"correct": 2
				},
				{
					"question": "Quelle ville britannique est célèbre pour son festival international du film et son accent distinctif?",
					"content": ["Manchester", "Glasgow", "Belfast", "Édimbourg"],
					"correct": 3
				},
				{
					"question": "Quelle danse espagnole traditionnelle est souvent accompagnée de castagnettes?",
					"content": ["Flamenco", "Salsa", "Tango", "Merengue"],
					"correct": 0
				},
				{
					"question": "Quel artiste espagnol est célèbre pour ses œuvres surréalistes, telles que 'La Persistencia de la Memoria'?",
					"content": ["Pablo Picasso", "Salvador Dalí", "Joan Miró", "Francisco Goya"],
					"correct": 1
				},
				{
					"question": "Quel explorateur espagnol a découvert l'Amérique en 1492?",
					"content": ["Hernán Cortés", "Francisco Pizarro", "Ferdinand Magellan", "Christophe Colomb"],
					"correct": 3
				},
				{
					"question": "Quel roi espagnol est connu pour avoir soutenu et financé le voyage de Christophe Colomb en 1492?",
					"content": ["Juan Carlos I", "Felipe VI", "Alfonso XIII", "Ferdinand II d'Aragon"],
					"correct": 3
				}
			]
		}
	]
