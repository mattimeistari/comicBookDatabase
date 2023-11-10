CREATE TABLE characters (
    characterId INTEGER PRIMARY KEY AUTOINCREMENT,
    alias VARCHAR(255) NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    description TEXT
);

CREATE TABLE comicCharacter (
    comicId INTEGER,
    characterId INTEGER,
    PRIMARY KEY (comicId, characterId),
    FOREIGN KEY (comicId) REFERENCES comics(comicId),
    FOREIGN KEY (characterId) REFERENCES characters(characterId)
    
);

CREATE TABLE publishers (
    publisherId INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE images (
    imageId INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255),
    link VARCHAR(255) NOT NULL
);

CREATE TABLE comics (
    comicId INTEGER PRIMARY KEY AUTOINCREMENT,
    ISBN VARCHAR(255) NOT NULL UNIQUE,
    publicationDate DATE,
    summary TEXT,
    issueNumber INTEGER NOT NULL,
    pageCount INTEGER,
    price INTEGER,
    coverArtId INTEGER,
    publisherId INTEGER,
    FOREIGN KEY (publisherId) REFERENCES publishers(publisherId),
    FOREIGN KEY (coverArtId) REFERENCES images(imageId)
);

CREATE TABLE people (
    personId INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255)
);

CREATE TABLE countries (
    countryId INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE countryPerson (
    countryId INTEGER,
    personId INTEGER,
    PRIMARY KEY (countryId, personId),
    FOREIGN KEY (personId) REFERENCES people(personId),
    FOREIGN KEY (countryId) REFERENCES countries(countryId)
);

CREATE TABLE roles (
    roleId INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255),
    description TEXT
);

CREATE TABLE comicRolePerson (
    comicId INTEGER,
    roleId INTEGER,
    personId INTEGER,
    PRIMARY KEY (comicId, roleId, personId),
    FOREIGN KEY (comicId) REFERENCES comics(comicId),
    FOREIGN KEY (roleId) REFERENCES roles(roleId),
    FOREIGN KEY (personId) REFERENCES people(personId)
);

CREATE TABLE imageCharacter (
    imageId INTEGER,
    characterId INTEGER,
    PRIMARY KEY (imageId, characterId),
    FOREIGN KEY (imageId) REFERENCES images(imageId),
    FOREIGN KEY (characterId) REFERENCES characters(characterId)
);

CREATE TABLE imagePerson (
    imageId INTEGER,
    personId INTEGER,
    PRIMARY KEY (imageId, personId),
    FOREIGN KEY (imageId) REFERENCES images(imageId),
    FOREIGN KEY (personId) REFERENCES people(personId)
);

CREATE TABLE genres (
    genreId INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    description TEXT
);

CREATE TABLE series (
    seriesId INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    description TEXT
);

CREATE TABLE comicSeries (
    comicId INTEGER,
    seriesId INTEGER,
    PRIMARY KEY (comicId, seriesId),
    FOREIGN KEY (seriesId) REFERENCES series(seriesId),
    FOREIGN KEY (comicId) REFERENCES comics(comicId)
);

CREATE TABLE comicGenre (
    comicId INTEGER,
    genreId INTEGER,
    PRIMARY KEY (comicId, genreId),
    FOREIGN KEY (genreId) REFERENCES genres(genreId),
    FOREIGN KEY (comicId) REFERENCES comics(comicId)
);

CREATE TABLE countryPublisher (
    countryId INTEGER,
    publisherId INTEGER,
    PRIMARY KEY (countryId, publisherId),
    FOREIGN KEY (countryId) REFERENCES countries(countryId),
    FOREIGN KEY (publisherId) REFERENCES publishers(publisherId)
);

CREATE TABLE stories (
    storyId INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255),
    description TEXT
);

CREATE TABLE seriesStory (
    seriesId INTEGER,
    storyId INTEGER,
    PRIMARY KEY (seriesId, storyId),
    FOREIGN KEY (storyId) REFERENCES stories(storyId),
    FOREIGN KEY (seriesId) REFERENCES series(seriesId)
);

CREATE TABLE comicStory (
    comicId INTEGER,
    storyId INTEGER,
    PRIMARY KEY (comicId, storyId),
    FOREIGN KEY (storyId) REFERENCES stories(storyId),
    FOREIGN KEY (comicId) REFERENCES comics(comicId)
);

