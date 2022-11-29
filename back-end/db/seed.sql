\c task_capstone

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type", "state") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a47', 'Test', 'Oldman', '1950-11-16', '123 FAKER STREET', 'Unit 24', 'New York', '10108','5555555555','fakeoldman@gmail.com', 'testPhoto', 'Elderly', 'NY') RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type", "state") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a89', 'Test','Volunteer','1990-01-01','123 EVEN FAKER STREET', 'Apt 42', 'New York', '10108', '5555555554','fakevolunteer@gmail.com', 'testPhoto', 'Volunteer', 'NY') RETURNING *;

INSERT INTO requests ("elder_id", "volunteer_id", "req_date", "description", "location", "time", "assigned", "complete") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a47','14d3ba1b-b313-409e-ad4b-3a7e205d2a89','2022-12-20', 'I need help with a few things around the house right before Christmas', 'Bronx', '12pm-3pm', 'FALSE','FALSE') RETURNING *;

INSERT INTO requests ("elder_id", "volunteer_id", "req_date", "description", "location", "time", "assigned", "complete") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a47', '', '2022-12-20', 'Looking for some assistance is putting together an artificial Christmas tree','Brooklyn','12pm-5pm', 'FALSE','FALSE') RETURNING *;

INSERT INTO requests ("elder_id", "volunteer_id", "req_date", "description", "location", "time", "assigned", "complete") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a47','','2022-12-06','','','','','') RETURNING *;


INSERT INTO ratings ("rating","request_id","rating_user_id","rated_user_id") VALUES
('5','1','14d3ba1b-b313-409e-ad4b-3a7e205d2a89','14d3ba1b-b313-409e-ad4b-3a7e205d2a47') RETURNING *;

INSERT INTO reviews ("reviewer_id","description","post_date","request_id") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a89','It was great helping TEST OLDMAN out with this','2022-12-04','1') RETURNING *;

INSERT INTO reviews ("reviewer_id","description","post_date","request_id") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a47','TEST VOLUNTEER was a great help, I greatly appreciate their assistance','2022-12-04','1') RETURNING *;



-- INSERT INTO requests ("elder_id", "volunteer_id", "req_date", "description", "location", "time", "assigned", "complete") VALUES
-- ('','','','','','','','') RETURNING *;
