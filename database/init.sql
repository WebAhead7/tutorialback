BEGIN;
DROP TABLE IF EXISTS users,tutorials CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  userid VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,  
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

CREATE TABLE tutorials (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  tutorial_title VARCHAR(255) NOT NULL,
  tutorial_descripstion TEXT NOT NULL,
  tutorial_status BOOLEAN NOT NULL
);
 
 

INSERT INTO users (userid,username,firstname,lastname,email,user_password) VALUES 
(123456789,'RakadKh', 'Rakad', 'Khawaled', 'a@gmail.com','12345'),
(123456780,'SalahMJ', 'Salah', 'Majadlah', 'b@gmail.com','12321'),
(123456781,'ShookK', 'Shook', 'Kaabiya', 'c@gmail.com','32321'),
(123456782,'RakadKh', 'Ahmad', 'Fanni', 'd@gmail.com','14142')
;

INSERT INTO tutorials (user_id,tutorial_title,tutorial_descripstion,tutorial_status) VALUES 
(1,'Algebra', 'Algebra is one of the broad parts of mathematics, together with number theory, geometry and analysis. In its most general form, algebra is the study of mathematical symbols and the rules for manipulating these symbols; it is a unifying thread of almost all of mathematics.',TRUE),
(2,'Calculus', 'Calculus, originally called infinitesimal calculus or "the calculus of infinitesimals", is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.', TRUE),
(3,'CS','Kaabiya',FALSE),
(3,'NumTheory', 'Number theory is a branch of pure mathematics devoted primarily to the study of the integers and integer-valued functions. German mathematician Carl Friedrich Gauss said, "Mathematics is the queen of the sciences—and number theory is the queen of mathematics.',TRUE)
;

COMMIT;
