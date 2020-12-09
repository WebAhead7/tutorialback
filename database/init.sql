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
  tutorial_description TEXT NOT NULL,
  tutorial_status BOOLEAN NOT NULL
);

 INSERT INTO users (userid,username,firstname,lastname,email,user_password) VALUES
  ('463632528','ahmad32353','Ahmad' ,'Abu Fanni','ahmad@gmail.com','123'),  
  ('132548463','shoog32353','Shoog' ,'Kabiya','shoog@gmail.com','123'),
  ('894511355','Salah32353','Salah' ,'Majadly','salah@gmail.com','123'),  
  ('655681230','Rakad32353','Rakad' ,'Khawaled','rakad@gmail.com','123')
  ;

 INSERT INTO tutorials (user_id,tutorial_title,tutorial_description,tutorial_status) VALUES
  (3,'Alternative Energy Fundamentals','Interdisciplinary fundamentals of alternative energy and public policy process as relates to socioeconomic factors of energy production and consumption' ,true),  
  (3,'Issues in Change Management','Knowledge and skills needed to plan and implement changes resulting from those applications of information technologies that transform organizations and improve their performance' ,false),  
  (3,'Project Management: Advanced Topics','Advanced project management tools and techniques, including strategic planning, best practices, and project portfolio management' ,true),  
  (1,'Applied Data Science','An introduction to the most commonly used techniques in data analysis, statistical learning and machine learning. This is an applied data analytics course focusing on the theories and algorithms behind each technique from an application point of view' ,true),
  (1,'Computer Security, Controls, and Information Assurance','What legal, financial, and operational tasks managers must accomplish in order to protect computer hardware, software, and operations from accidental or intentional harm' ,false),
  (1,'International Marketing','Marketing structure and policies employed in export and import trade. Consideration of legal, cultural and economic factors in marketing abroad' ,true),
  (4,'Seminar in Business Ethics and Social Responsibility','Focus on ethical and social responsibility issues using a stakeholders perspective and ethical decision-making model to develop diagnostic, critical thinking, and intervention skills' ,true),  
  (4,'Changing Environments of Business','Legal, ethical, cultural, economic, political and global environment. Approaches to continual monitoring and managing complex interactions between business and its changing environments' ,false),  
  (4,'Information and Communications Technology in Organizations','Overview of strategic value creation through ICT; managing end-user involvement in ICT including requirements specification, change management and process reengineering; systems development process and outsourcing' ,true),
  (2,'Financial Reporting and Analysis','Examination of accounting and disclosure techniques and their impact on external financial reporting. Preparation, analysis and interpretation of financial reports' ,true),
  (2,'Value Creation and Measurement','Identifying and measuring value in the corporate environment and the study of strategies useful in the development of enterprise value' ,false),  
  (2,'Renewable Energy in the Community and Home','This course explores the economic, technical, and political feasibility of implementing renewable energy, sustainability, and energy conservation initiatives in the home and local community' ,true)
  ;
COMMIT;
