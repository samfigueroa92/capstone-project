\c task_capstone
-- USERS
INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "state", "zipcode", "phonenumber", "email", "verified", "user_type", "profilephoto") VALUES
('zR8PxXG7Vthw8kMADxFgHgTb2Nt2','Samantha','Figueroa', '1992-07-11', '136281 Himalayan Rock Salt Quarry', '1','Staten Island', 'NY', '18221','215664211','samanthafigueroa@pursuit.org','TRUE', 'Volunteer', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf84rsLE3gQkPmVzx3HtECy7N4G-_B0XSz_Q&usqp=CAU'), 

('KRpB4t5K0MNr2ew5iBIeBDGNpCq2', 'Cassandra', 'Oliver', '1960-08-16', '123 Fake St', '11C', 'Bronx', 'NY', '12345', '1234567890', 'cassandraoliver91@gmail.com', 'TRUE', 'Senior', 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?cs=srgb&dl=pexels-nashua-volquezyoung-1729931.jpg&fm=jpg');

-- OPEN REQUESTS
INSERT INTO requests ("elder_id", "elder_img", "req_date", "title", "description", "location", "time", "assigned", "complete","image") VALUES
('KRpB4t5K0MNr2ew5iBIeBDGNpCq2','https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?cs=srgb&dl=pexels-nashua-volquezyoung-1729931.jpg&fm=jpg','2023-04-14','Saturday Grocery Shopping','I have a grocery list of items that I need. Unfortunately I am wheelchair bond and cant go to the grocery store by myself. I also need support bring the items in. Usually I order the items in advance and just need pick up', 'Manhattan', '10:00','FALSE', 'FALSE','https://static01.nyt.com/images/2021/03/28/multimedia/28ah-groceryshopping/merlin_176693118_cf0140b2-6ec3-47ee-9afa-b413d138897c-superJumbo.jpg'),

('KRpB4t5K0MNr2ew5iBIeBDGNpCq2','https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?cs=srgb&dl=pexels-nashua-volquezyoung-1729931.jpg&fm=jpg','2023-06-18','Hang Paintings','I have arthritis and it is difficult for me to lift my arms up. I would like to hang some photos on the wall and need assistance.', 'Bronx', '11:00','FALSE', 'FALSE',''),

('KRpB4t5K0MNr2ew5iBIeBDGNpCq2','https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?cs=srgb&dl=pexels-nashua-volquezyoung-1729931.jpg&fm=jpg', '2023-12-20','Holiday Prep','Since I cant be with family this year, I decided to do plan a last minute Holiday Party for my friends. I may have honestly biten off more that I can chew. Asking for some support during the Holiday Season. Tree setup and decorations.','Bronx','16:00','FALSE','FALSE','https://www.bhg.com/thmb/glsNjIgdF3SUW8L0g7TV74EXJQ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/christmastablesettings_walmartproduct_inlinetreatment_1-035fce97ba384000859ed220d11806ac.jpg'), 

('KRpB4t5K0MNr2ew5iBIeBDGNpCq2','https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?cs=srgb&dl=pexels-nashua-volquezyoung-1729931.jpg&fm=jpg', '2024-01-29', 'Mutual Dinner Date', 'Looking for someone to go to dinner with tired of being home alone and would just like some company when I go out.','Bronx','14:00','FALSE','FALSE','');

-- ACCEPTED REQUESTS
INSERT INTO requests ("elder_id", "elder_img", "volunteer_id", "volunteer_img", "req_date", "title", "description", "location", "time", "assigned", "complete", "image") VALUES
('KRpB4t5K0MNr2ew5iBIeBDGNpCq2','https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?cs=srgb&dl=pexels-nashua-volquezyoung-1729931.jpg&fm=jpg','zR8PxXG7Vthw8kMADxFgHgTb2Nt2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf84rsLE3gQkPmVzx3HtECy7N4G-_B0XSz_Q&usqp=CAU', '2024-01-29', 'Ride from the Airport', 'I need a ride from the airport, Ill be coming back from Puerto Rico and I just want to make sure that I get home safely... as well as I would need help bring my suitcase upstairs to the 2nd floor.','LGA','16:00','TRUE','FALSE','https://metroairportnews.com/wp-content/uploads/Reinvention-of-LaGuardia-Airport-4.jpg'), 

('KRpB4t5K0MNr2ew5iBIeBDGNpCq2','https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?cs=srgb&dl=pexels-nashua-volquezyoung-1729931.jpg&fm=jpg','zR8PxXG7Vthw8kMADxFgHgTb2Nt2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf84rsLE3gQkPmVzx3HtECy7N4G-_B0XSz_Q&usqp=CAU', '2023-05-29', 'Read to Me', 'Poor Eye Site has cause me to stop doing what I love ... READING. I have a couple of books that I would love to read but unfortunately they arent on Audible. Someone please help', 'Bronx', '16:00', 'TRUE', 'FALSE', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIptn1mN1uj8sU2aF7vW8lnpxkb1PgnTtcg&usqp=CAU');

-- COMPLETED REQUESTS
INSERT INTO requests ("elder_id", "elder_img", "volunteer_id", "volunteer_img", "req_date", "title", "description", "location", "time", "assigned", "complete", "image") VALUES
('KRpB4t5K0MNr2ew5iBIeBDGNpCq2','https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?cs=srgb&dl=pexels-nashua-volquezyoung-1729931.jpg&fm=jpg','zR8PxXG7Vthw8kMADxFgHgTb2Nt2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf84rsLE3gQkPmVzx3HtECy7N4G-_B0XSz_Q&usqp=CAU', '2023-01-6', 'Prescription Pick Up', 'I need someone to pick up my meds.','Bronx','10:00','TRUE','TRUE','');

-- REVIEWS
INSERT INTO reviews ("reviewer_id", "reviewer_img", "reviewed_id", "post_date", "request_id", "description", "rating") VALUES
('KRpB4t5K0MNr2ew5iBIeBDGNpCq2', 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?cs=srgb&dl=pexels-nashua-volquezyoung-1729931.jpg&fm=jpg', 'zR8PxXG7Vthw8kMADxFgHgTb2Nt2', '2023-01-15','7', 'She was super sweet and kind but the amount of work given took way longer than the estimated time... I was there over 3 hours more the scheduled', '3'),

('zR8PxXG7Vthw8kMADxFgHgTb2Nt2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf84rsLE3gQkPmVzx3HtECy7N4G-_B0XSz_Q&usqp=CAU', 'KRpB4t5K0MNr2ew5iBIeBDGNpCq2', '2023-01-15','7', 'She was was very nice.', '4'),

('KRpB4t5K0MNr2ew5iBIeBDGNpCq2', 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?cs=srgb&dl=pexels-nashua-volquezyoung-1729931.jpg&fm=jpg', 'zR8PxXG7Vthw8kMADxFgHgTb2Nt2', '2023-02-5', '6','She spent two hours reading a new book I''ve been excited about. And we set up a date for our next session already. Incredibly soothing reading voice as well!', '5');