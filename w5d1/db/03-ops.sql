-- Basic select
-- Meaning of number 42 (Answer to the ultimate question) ASCII code * => 42 => everything?


-- SELECT * FROM jokes;
SELECT question, answer FROM jokes;
SELECT jokes.question FROM jokes; --Specific to jokes, sometimes it's overkill

-- {name:"bob"} => obj.name vs obj["name"]


-- Renaming fields

SELECT 
  question AS joke_beginning, 
  answer AS joke_end 
FROM jokes;


-- Filter out some results

SELECT * FROM jokes WHERE rating > 3 AND author_id IS NOT NULL;

-- ORDER jokes ?

SELECT * FROM jokes ORDER BY rating DESC;

-- Filter based of text

-- SELECT * FROM jokes WHERE question LIKE '% a %'; 
SELECT * FROM jokes WHERE LOWER(question) LIKE 'what%'; -- "DEFAULT" SQL answer

SELECT * FROM jokes WHERE question ILIKE 'what%';  -- PSQL answer


-- Joining tables

-- SELECT * FROM jokes JOIN authors ON author_id = authors.id;

SELECT 
  jokes.*, 
  authors.name AS author_name, 
  authors.funny AS author_funny, 
  authors.description AS author_description
FROM jokes 
LEFT JOIN authors ON author_id = authors.id;

-- Potential problems when working with JavaScript
-- JS => Receive everything as an object

-- {id:"", question:"", answer:"", rating:"", author_id:"", id:"", name:"", funny:"", description:""}

-- AGGREGATE FUNCTIONS

SELECT COUNT(author_id) FROM jokes;

SELECT 
  author_id, 
  AVG(rating) AS average_joke_rating 
FROM jokes 
WHERE author_id IS NOT NULL 
GROUP BY author_id
HAVING AVG(rating) > 3 
ORDER BY author_id
;


-- AGGREGATES + Nested selects !

SELECT * 
FROM jokes 
WHERE rating > (SELECT AVG(rating) FROM jokes);


SELECT *
FROM authors
WHERE id IN (
  SELECT 
  author_id
  FROM jokes 
  WHERE author_id IS NOT NULL 
  GROUP BY author_id
  HAVING AVG(rating) > 3 
  ORDER BY author_id
)
