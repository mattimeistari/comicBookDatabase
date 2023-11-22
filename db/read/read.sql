-- Birta Spider-Man Volume 1, 52
SELECT series.name ||" "|| comics.issueNumber AS "Comic", comics.pageCount AS "Pages"
FROM comics
INNER JOIN comicSeries
ON comics.comicId = comicSeries.comicId
INNER JOIN series
ON series.seriesId = comicSeries.seriesId
WHERE series.name = "Spider-Man Volume 1"
AND comics.issueNumber = 52;

-- Birta all books in the database and pages
SELECT series.name ||" "|| comics.issueNumber AS "Comic", comics.pageCount AS "Pages"
FROM comics
INNER JOIN comicSeries
ON comics.comicId = comicSeries.comicId
INNER JOIN series
ON series.seriesId = comicSeries.seriesId;

-- Birta allt from characters
SELECT * FROM characters;

-- Select specific series
SELECT series.name FROM series
WHERE series.name = "Spider-Man Volume 1";

-- Sort books by year
SELECT series.name ||" "|| comics.issueNumber AS "Comic", comics.publicationDate AS "Year"
FROM comics
INNER JOIN comicSeries
ON comics.comicId = comicSeries.comicId
INNER JOIN series
ON series.seriesId = comicSeries.seriesId
ORDER BY comics.publicationDate DESC;

-- Select books and peoples -- rememer 2 fix the thing where the books are often appearing
SELECT
    series.name || " " || comics.issueNumber AS "Comic",
    persons.firstName || " " || persons.lastName AS "Person",
    roles.title AS "Job Title",
    roles.description AS "Job Description"
FROM 
    comics
    INNER JOIN comicSeries
    ON comics.comicId = comicSeries.comicId
    INNER JOIN series
    ON series.seriesId = comicSeries.seriesId
    INNER JOIN comicRolePerson
    ON comics.comicId = comicRolePerson.comicId
    INNER JOIN persons
    ON comicRolePerson.personId = persons.personId
    INNER JOIN roles
    ON comicRolePerson.roleId = roles.roleId
ORDER BY comics.comicId;

-- select the books and how many apges there are
SELECT
    series.name || " " || comics.issueNumber AS "Comic",
    comics.pageCount AS "Page Count"
FROM
    comics
    INNER JOIN comicSeries
    ON comics.comicId = comicSeries.comicId
    INNER JOIN series
ORDER BY series.name;

SELECT
    *
FROM
    publishers,
    comics
;
