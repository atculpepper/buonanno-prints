CREATE TABLE "prints"
(
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(120) NOT NULL,
  "image" VARCHAR(120) NOT NULL,
  "description" TEXT NOT NULL
);

CREATE TABLE "genres"
(
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80) NOT NULL
);

CREATE TABLE "print_genres"
(
  "id" SERIAL PRIMARY KEY,
  "print_id" INT REFERENCES "prints" NOT NULL,
  "genres_id" INT REFERENCES "genres" NOT NULL
);

INSERT INTO "genres"
  ("name")
VALUES
  ('Etching'),
  ('Drawing');

--STARTER DATA--

INSERT INTO "prints"
  ("title", "image", "description")
VALUES
  ('Palazzo Montecitorio', 'images/Palazzo-Montecitorio.png', 'View of the Palazzo Montecitorio. Part of a portfolio of 137 plates produced by Piranesi between 1748 and 1778'),
  ('Palazzo Quirinale', 'Quirinale.png', 'Etching and engraving from the VJB Collection.');

