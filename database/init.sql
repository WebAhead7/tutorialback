BEGIN;
DROP TABLE IF EXISTS postpost CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  userid VARCHAR(255) NOT NULL,\
  username VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,  
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  
);

CREATE TABLE tutorials (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  tutorial_title VARCHAR(255) NOT NULL,tutorial_descripstion TEXT NOT NULL,
  tutorial_status VARCHAR(255) NOT NULL,
);

COMMIT;
