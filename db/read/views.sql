CREATE VIEW allPageCount AS
SELECT
    series.name ||" "|| comics.issueNumber AS "Comic",
    comics.pageCount AS "Pages"
FROM
    comics
    INNER JOIN comicSeries
    ON comics.comicId = comicSeries.comicId
    INNER JOIN series
    ON series.seriesId = comicSeries.seriesId
ORDER BY series.name;


CREATE VIEW allComics AS
SELECT
    series.name ||" "|| comics.issueNumber AS "Comic",
    *
FROM
    comics
    INNER JOIN comicSeries
    ON comics.comicId = comicSeries.comicId
    INNER JOIN series
    ON series.seriesId = comicSeries.seriesId
ORDER BY series.name
;


CREATE VIEW allBooksAndWorkers AS
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