/*
Here I have a list of characters: "Featured Characters:

Spawn (Al Simmons) (First Appearance) (appears in both flashback and main story)
Supporting Characters:

Jason Wynn (First Appearance) (flashback only)
Villains:

Malebolgia (First Appearance)
Other Characters:

Carlo Giamotti (Single appearance) (corpse)
Central Intelligence Agency
Sam Burke (First Appearance)
Twitch Williams (First Appearance)
Jessica Tokwell (First Appearance)
Wanda Blake (First Appearance) (flashback only)
Brock Fennel (First Appearance)"

This list is the characters who appeared in "Spawn Vol 1 1".

I need you to write an insert into code for my table that looks like this: INSERT INTO characters (alias, firstName, lastName, description)
VALUES  ()

I need you to fill in the information from the list by finishing the code I've provided. I need it all to be in one insert into code. write your answer in a code block.

For the descriptions I want you to generate your own basic description of the character, not use the ones provided in the list.

Use double quotes.

don't leave any rows fully null, for example for characters who are only mentioned and don't appear do the same as you do for characters who do appear. treat this table as not relative to the comic but just a general character information table.

For characters whose "alias" is just a full name, please take the liberty to fill the first and last names respectively. for example if it were to say "Ben Urich (Mentioned)" in the list. Figure out if that's his real name and instead of inserting "Ben Urich" into alias and nothing into firstName and lastName and insert "Ben" in firstName and "Urich" in lastName.

alias can not be null

Research every single character in the list.
*/

INSERT INTO characters (alias, firstName, lastName, description)
VALUES  -- Spiderman
        ("Scarlet Spider", "Ben", "Reilly", "A clone of Spider-Man who wears a red and blue costume"),
        ("Ken Ellis", "Ken", "Ellis", "A reporter for the Daily Bugle who coined the name Scarlet Spider"),
        ("Venom", "Eddie", "Brock", "A former journalist who bonded with an alien symbiote and became Spider-Man's enemy"),
        ("Scream", "Donna", "Diego", "A female symbiote host who was experimented on by the Life Foundation"),
        ("Tommy", "Tommy", NULL, "A friend of Ken Ellis who contacted him by phone"),
        ("NYPD", NULL, NULL, "The New York Police Department who tried to stop Venom and Scream"),
        ("J. Jonah Jameson", "J.", "Jameson", "The editor-in-chief of the Daily Bugle who hates Spider-Man"),
        ("Ben Urich", "Ben", "Urich", "An investigative journalist who works for the Daily Bugle"),
        ("Spider-Man", "Peter", "Parker", "A superhero who gained spider-like abilities from a radioactive spider bite"),
        ("Carnage", "Cletus", "Kasady", "A serial killer who bonded with an offspring of Venom's symbiote and became a psychotic villain"),
        ("Guardsmen", NULL, NULL, "A group of armored soldiers who work for the Vault, a prison for superhuman criminals"),
        ("Life Foundation", NULL, NULL, "An organization that seeks to create a utopia for the wealthy and powerful"),
        -- Catwonam
        ("Catwoman", "Selina", "Kyle", "A skilled cat burglar and antiheroine who has a complicated relationship with Batman"),
        ("Batman", "Bruce", "Wayne", "A billionaire vigilante and superhero who protects Gotham City from crime and corruption"),
        ("George Flannery", "George", NULL, "A detective in the Gotham City Police Department who works with Batman and Catwoman"),
        ("Holly Robinson", "Holly", "Robinson", "A young runaway and prostitute who is befriended by Selina Kyle and becomes her protégée"),
        ("Sister Magdalene", NULL, NULL, "A nun who runs a shelter for abused women and helps Selina Kyle escape from her pimp"),
        ("Ted Grant", "Ted", "Grant", "A former heavyweight boxing champion and superhero known as Wildcat who trains Selina Kyle in combat"),
        ("Stan the Pimp", "Stan", NULL, "A ruthless and violent pimp who exploits Selina Kyle and Holly Robinson and tries to kill them"),
        ("James Gordon", "James", "Gordon", "The lieutenant of the Gotham City Police Department who is an ally of Batman and a cameo character in the comic"),
        ("Sister Mary Elizabeth", NULL, NULL, "A nun who works at the shelter with Sister Magdalene and cares for Selina Kyle's sister Maggie"),
        ("Cats", NULL, NULL, "Cats that are associated with Catwoman and her origin story"),
        ("Bats", NULL, NULL, "Bats that are associated with Batman and his origin story"),
        -- Spawn
        ("Spawn", "Albert", "Simmons", "A former CIA agent who was killed and resurrected as a Hellspawn"),
        ("Jason Wynn", "Jason", "Wynn", "The director of the United States Security Group and the man who ordered Simmons' death"),
        ("Malebolgia", NULL, NULL, "The ruler of the eighth circle of Hell and the one who made a deal with Simmons to become Spawn"),
        ("Carlo Giamotti", "Carlo", "Giamotti", "A mafia hitman who was killed by the Violator and left as a warning for Spawn"),
        ("Central Intelligence Agency", NULL, NULL, "A federal agency that conducts foreign intelligence and covert operations"),
        ("Sam Burke", "Sam", "Burke", "A detective who investigates the crimes involving Spawn and his enemies"),
        ("Twitch Williams", "Maximilion", "Williams", "A detective who partners with Sam Burke and is a skilled marksman"),
        ("Jessica Tokwell", "Jessica", "Tokwell", "A reporter for CNN who covers the news related to Spawn and his activities"),
        ("Wanda Blake", "Wanda", "Blake", "The widow of Albert Simmons and the wife of Terry Fitzgerald, his best friend"),
        ("Brock Fennel", "Brock", "Fennel", "A CIA agent who works for Jason Wynn and tries to capture Spawn");

/* Write a description of the publisher "Marvel Comics" in a code block. Make it around 100 words. */
INSERT INTO publishers (name, description)
VALUES  ("Marvel Comics", "Marvel Comics is a comic book publisher that has created many popular super heroes and villains. It started in 1939 as Timely Comics, then became Atlas Comics in the 1950s, and finally Marvel Comics in 1961. Some of its famous characters are Spider-Man, Iron Man, Captain America, Thor, Hulk, X-Men, Avengers, and Guardians of the Galaxy. Marvel's stories take place in a shared universe that resembles the real world, especially New York City. Marvel has also branched out into other media, such as movies, TV shows, video games, and merchandise. Marvel is owned by The Walt Disney Company since 2009 ."),
        ("DC Comics", "DC Comics is an American company that publishes comic books and other media featuring iconic superheroes and villains. It was founded in 1934 by Major Malcolm Wheeler-Nicholson as National Allied Publications, and later became known as National Comics Publications, National Periodical Publications, and finally DC Comics in 1977. Some of its famous characters are Batman, Superman, Wonder Woman, the Flash, Green Lantern, Aquaman, Justice League, and Teen Titans. DC Comics' stories are set in a shared universe that reflects the real world, such as Gotham City and Metropolis. DC Comics has also expanded into other media, such as movies, TV shows, video games, and merchandise. DC Comics is owned by Warner Bros. Discovery since 2021."),
        ("Image Comics", "Image Comics is a publisher of comic books and graphic novels that was founded in 1992 by seven famous artists who wanted to retain the rights to their own creations. Image Comics is the third-largest comics publisher in the United States and publishes comics in various genres and styles by many independent creators. Some of its well-known titles are Spawn, The Walking Dead, Saga, Invincible, and Kick-Ass. Image Comics' stories are often set in a shared universe that reflects the real world, such as New York City. Image Comics has also received many awards and nominations for its comics and has expanded into other media, such as movies, TV shows, video games, and merchandise.");

/* temp */
/* "Cover_[SeriesName]_[VolumeNumber]_[BookNumber].jpg" */
INSERT INTO images (title, link)
VALUES  ("Spider-Man Volume 1, #52", "images/Spider-Man_Vol_1/Cover_Spider-Man_1_52.png"),
        ("Catwoman Volume 1, #1", "images/Catwoman_Vol_1/Cover_Catwoman_1_1.png"),
        ("Spawn Volume 1, #1", "images/Spawn_Vol_1/Cover_Spawn_1_1.png"),

        ("Scarlet Spider Main", "images/characters/scarletSpider_benReilly_main.png"),
        ("Catwoman Main", "images/characters/catwoman_selinaKyle_main.png"),
        ("Spawn Main", "images/characters/spawn_albertSimmons_main.png");


INSERT INTO comics (ISBN, publicationDate, summary, issueNumber, pageCount, coverArtId, publisherId, price)
VALUES  (9781302923730, 1994-09-20, "The Spider-Man clone confronts Venom and Scream while Ken Ellis tries to get an exclusive story on the new hero he dubs the Scarlet Spider.", 52, 32, 1, 1, 2000),
        (9781401288891, 1989-02-01, "Catwoman's origin story is revealed as she struggles to survive in Gotham's underworld and escape her abusive pimp.", 1, 32, 2, 2, 1500),
        (9781534319356, 1992-05-01, "A government agent killed by his own men returns to Earth as the warrior Spawn, guarding the forgotten alleys of New York City and seeking answers about his past.", 1, 32, 3, 3, 2500);



/*
Take this list: 
""

Fill this code: "INSERT INTO people (firstName, lastName)
VALUES  ()" with the information in the list.
Write a comment that states the person's role followed by ""

So each line should look like ("placeholder", "placeholder"), -- [Role]: [comicBook]

Write this all in one insert into statement.
INSERT INTO people (firstName, lastName)
*/
INSERT INTO people (firstName, lastName)
VALUES  ("Howard", "Mackie"), -- Writer: Spider-Man Vol 1 52
        ("Tom", "Lyle"), -- Penciler: Spider-Man Vol 1 52
        ("Scott", "Hanna"), -- Inker: Spider-Man Vol 1 52
        ("Kevin", "Tinsley"), -- Colorist: Spider-Man Vol 1 52
        ("Richard", "Starkings"), -- Letterer: Spider-Man Vol 1 52
        ("Comicraft", NULL), -- Letterer: Spider-Man Vol 1 52
        ("Danny", "Fingeroth"), -- Editor: Spider-Man Vol 1 52

        ("Mindy", "Newell"), -- Writer: Catwoman Vol 1 #1
        ("Joe", "Brozowski"), -- Penciler: Catwoman Vol 1 #1
        ("Michael", "Bair"), -- Inker: Catwoman Vol 1 #1
        ("Adrienne", "Roy"), -- Colorist: Catwoman Vol 1 #1
        ("Augustin", "Mas-Layi"), -- Letterer: Catwoman Vol 1 #1
        ("Dennis", "O'Neil"), -- Editor: Catwoman Vol 1 #1
        ("Dan", "Raspler"), -- Editor: Catwoman Vol 1 #1

        ("Todd", "McFarlane"), -- Writer: Catwoman Vol 1 #1 -- Penciler: Catwoman Vol 1 #1 -- Inker: Catwoman Vol 1 #1
        ("Steve", "Oliff"), -- Colourist: Catwoman Vol 1 #1
        ("Ken", "Steacy"), -- Colourist: Catwoman Vol 1 #1
        ("Reuben", "Rude"), -- Colourist: Catwoman Vol 1 #1
        ("Tom", "Orzechowski"), -- Letterer: Catwoman Vol 1 #1
        ("Wanda", "Kolomyjec"), -- Editor: Catwoman Vol 1 #1
        ("Chris", "Ulm"); -- Editor: Catwoman Vol 1 #1


INSERT INTO countries (name)
VALUES  ("United States of America"),
        ("Canada"),
        ("United Kingdom"),
        ("China"),
        ("Germany"),
        ("Iceland"),
        ("Japan");


INSERT INTO roles (title, description)
VALUES  ("Writer", "The person who writes the script and dialogue for the comic book"),
        ("Penciler", "The person who draws the outline of the characters and scenes for the comic book"),
        ("Inker", "The person who adds ink over the pencil lines to make them more defined and ready for coloring"),
        ("Colorist", "The person who adds colors to the comic book using digital or traditional methods"),
        ("Letterer", "The person who adds the text and sound effects to the comic book using fonts or hand lettering"),
        ("Editor", "The person who oversees the production of the comic book and ensures quality and consistency");


INSERT INTO genres (name, description)
VALUES  -- Spider-Man, Spawn, Catwoman
        ("Superheroes", "A genre of fiction that features characters with extraordinary or superhuman abilities who use them to fight crime or evil"),
        -- Spider-Man, Spawn
        ("Fantasy", "A genre of fiction that involves imaginary elements, such as magic, supernatural creatures, or alternate worlds"),
        -- Spider-Man
        ("Sci-Fi", "A genre of fiction that deals with the impact of science and technology on society or individuals, often in a futuristic or speculative setting");


INSERT INTO series (name, description)
VALUES  ("Spider-Man Volume 1", "A comic book series that follows the adventures of Peter Parker, a teenager who gains spider-like powers after being bitten by a radioactive spider"),
        ("Catwoman Volume 1", "A four-issue mini-series that explores the origin of Catwoman, a cat-themed burglar and anti-heroine who has a complicated relationship with Batman"),
        ("Spawn Volume 1", "A comic book series that tells the story of Al Simmons, a former government agent who is resurrected as a Hellspawn, a creature from the depths of Hell");

INSERT INTO stories (title, description)
VALUES  ("Deadline", "Spider-Man and J. Jonah Jameson are trapped by the Kingpin, who plans to kill them both. Meanwhile, Frederick Foswell tries to expose the Kingpin's crimes, but pays a fatal price."),
        ("Metamorphosis", "Selina Kyle, a prostitute and cat lover, is brutally beaten by her pimp, Stan. She decides to take revenge on him and his clients, using a cat-themed costume and weapons. She also learns about her long-lost sister, who is a nun."),
        ("Questions, Part One", "Al Simmons, a former CIA agent, is killed and resurrected as Spawn, a creature from Hell. He struggles to remember his past life and his deal with the demon Malebolgia. He also saves a woman from being raped by some thugs.");


-- TENGI TÖFLUR --


INSERT INTO comicCharacter (comicId, characterId)
VALUES  (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6),
        (1, 7), (1, 8), (1, 9), (1, 10), (1, 11), (1, 12),

        (2, 13), (2, 14), (2, 15), (2, 16), (2, 17), (2, 18),
        (2, 19), (2, 20), (2, 21), (2, 22), (2, 23),

        (3, 24), (3, 25), (3, 26), (3, 27), (3, 28), (3, 29),
        (3, 30), (3, 31), (3, 32), (3, 33);


INSERT INTO countryPerson (countryId, personId)
VALUES  (1, 1), -- Howard Mackie, USA
        (1, 2), -- Tom Lyle, USA
        (1, 3), -- Scott Hanna, USA
        (1, 4), -- Kevin Tinsley, USA
        (2, 5), -- Richard Starkings, UK
        (1, 6), -- Comicraft, USA
        (1, 7), -- Danny Fingeroth, USA
        (1, 8), -- Mindy Newell, USA
        (1, 9), -- Joe Brozowski, USA
        (1, 10), -- Michael Bair, Unknown
        (1, 11), -- Adrienne Roy, USA
        (1, 12), -- Augustin Mas-Layi, USA
        (1, 13), -- Dennis O'Neil, USA
        (1, 14), -- Dan Raspler, USA
        (3, 15), -- Todd McFarlane, Canada
        (1, 16), -- Steve Oliff, USA
        (3, 17), -- Ken Steacy, Canada
        (1, 18), -- Reuben Rude, USA
        (1, 19), -- Tom Orzechowski, USA
        (1, 20), -- Wanda Kolomyjec, USA
        (1, 21); -- Chris Ulm, USA


INSERT INTO comicRolePerson (comicId, roleId, personId)
VALUES  (1, 1, 1), (1, 2, 2), (1, 3, 3), (1, 4, 4), (1, 5, 5), (1, 5, 6), (1, 6, 7),
        (2, 1, 8), (2, 2, 9), (2, 3, 10), (2, 4, 11), (2, 5, 12), (2, 6, 13), (2, 6, 14),
        (3, 1, 15), (3, 4, 16), (3, 4, 17), (3, 4, 18), (3, 5, 19), (3, 6, 20), (3, 6, 21);


INSERT INTO imageCharacter (imageId, characterId)
VALUES  (4, 1), (5, 13), (6, 24);


-- INSERT INTO imagePerson (imageId, personId)
-- VALUES  ;

INSERT INTO comicSeries (comicId, seriesId)
VALUES  (1, 1), (2, 2), (3, 3);

INSERT INTO comicGenre (comicId, genreId)
VALUES  (1, 1), (1, 2), (1, 3),
        (2, 1),
        (3, 1), (3, 2);

INSERT INTO countryPublisher (countryId, publisherId)
VALUES  (1, 1), (1, 2), (1, 3);

INSERT INTO seriesStory (seriesId, storyId)
VALUES  (1, 1), (2, 2), (3, 3);

INSERT INTO comicStory (comicId, storyId)
VALUES  (1, 1), (2, 2), (3, 3);
