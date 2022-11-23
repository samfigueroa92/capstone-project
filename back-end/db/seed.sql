\c goldensolutions

INSERT INTO users ("firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type", "state") VALUES
('Test', 'Oldman', '1950-11-16', '123 FAKER STREET', 'Unit 24', 'New York', '10108','5555555555','fakeoldman@gmail.com', 'testPhoto', 'Elderly', 'NY') RETURNING *;

INSERT INTO users ("firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type", "state") VALUES
('Test','Volunteer','1990-01-01','123 EVEN FAKER STREET', 'Apt 42', 'New York', '10108', '5555555554','fakevolunteer@gmail.com', 'testPhoto', 'Volunteer', 'NY') RETURNING *;

INSERT INTO requests ("elder", "volunteer", "req_date", "description", "location", "time", "assigned", "complete") VALUES
('2','3','2022-12-20', 'I need help with a few things around the house right before Christmas', '12pm-3pm', 'FALSE','FALSE') RETURNING *;


