\c task_capstone

INSERT INTO users ("firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type", "state") VALUES
('Test', 'Oldman', '1950-11-16', '123 FAKER STREET', 'Unit 24', 'New York', '10108','5555555555','fakeoldman@gmail.com', 'testPhoto', 'Elderly', 'NY') RETURNING *;