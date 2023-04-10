\c task_capstone

--USERS
-- Volunteers
INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type", "languages", "state") VALUES
('rvzWB9oEqaOEwB8KmnHAtwSiFvE3', 'Adnan','Adams','1991-07-11','1470 davidson Ave','3','Bronx','10434','9173489245','abubakaradnanadams@pursuit.org','https://lh3.googleusercontent.com/a/AGNmyxa1RrJI7q94nLMhLdgH6821Ot4Z8ko0mCpvZ7U_=s576','Volunteer','Arabic','NY');

--Elderly
INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type","languages", "state") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','Abubakar','Sidick Adams','1993-02-06','979 Brook Ave','33','Bronx','10451','7189734887','abuadnanadams@gmail.com','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg','Senior','English','NY');

--OPEN REQUEST
INSERT INTO requests ("elder_id", "elder_img", "req_date", "title", "description", "location", "time", "assigned", "complete","image") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2', 'https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg', '2023-12-14','Capstone Project','Come with me to Google to support my Grandchild during their Presentation','GOOGLE HEADQUARTERS','18:00','FALSE','FALSE','https://tinyurl.com/3398mxek') ;

INSERT INTO requests ("elder_id", "elder_img", "req_date", "title", "description", "location", "time", "assigned", "complete","image") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg', '2023-10-07','Doctors Appt.','I dont have the best eye site, I need someone to accompany me to the doctor and help me get through the paperwork prior to seeing the doctor','Manhattan','12:00','FALSE','FALSE','https://tinyurl.com/4ewy77bs');

INSERT INTO requests ("elder_id", "elder_img", "req_date", "title", "description", "location", "time", "assigned", "complete","image") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg', '2023-09-26','Accompany Me to the Park','Need to get some exercise in, would love to have a walking partner to help motivate me.','New York','15:00','FALSE','FALSE','https://phillypowered.org/wp-content/uploads/2018/08/YEE_5548-20180621.jpg');


--ACCEPTED REQUEST
INSERT INTO requests ("elder_id", "elder_img", "volunteer_id", "volunteer_img", "req_date", "title", "description", "location", "time", "assigned", "complete", "image") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg','rvzWB9oEqaOEwB8KmnHAtwSiFvE3','https://lh3.googleusercontent.com/a/AGNmyxa1RrJI7q94nLMhLdgH6821Ot4Z8ko0mCpvZ7U_=s576','2024-01-29','Ride from the Airport','I need a ride from the airport, Ill be coming back from Puerto Rico and I just want to make sure that I get home safely... as well as I would need help bring my suitcase upstairs to the 2nd floor.','LGA','16:00','TRUE','FALSE','https://metroairportnews.com/wp-content/uploads/Reinvention-of-LaGuardia-Airport-4.jpg');

INSERT INTO requests ("elder_id", "elder_img", "volunteer_id", "volunteer_img", "req_date", "title", "description", "location", "time", "assigned", "complete", "image") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg','rvzWB9oEqaOEwB8KmnHAtwSiFvE3','https://lh3.googleusercontent.com/a/AGNmyxa1RrJI7q94nLMhLdgH6821Ot4Z8ko0mCpvZ7U_=s576','2023-03-01','Read to Me','Poor Eye Site has cause me to stop doing what I love ... READING. I have a couple of books that I would love to read but unfortunately they arent on Audible. Someone please help','Queens','14:00','TRUE','FALSE','https://tinyurl.com/4xwamkjw');

INSERT INTO requests ("elder_id", "elder_img", "volunteer_id", "volunteer_img", "req_date", "title", "description", "location", "time", "assigned", "complete","image") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg','rvzWB9oEqaOEwB8KmnHAtwSiFvE3','https://lh3.googleusercontent.com/a/AGNmyxa1RrJI7q94nLMhLdgH6821Ot4Z8ko0mCpvZ7U_=s576','2023-06-20', 'Mutual Dinner Date','Looking for someone to go to dinner with tired of being home alone and would just like some company when I go out.','Brooklyn','19:00','TRUE','FALSE','https://tinyurl.com/3j4caf8b');

INSERT INTO requests ("elder_id", "elder_img", "volunteer_id", "volunteer_img", "req_date", "title", "description", "location", "time", "assigned", "complete","image") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg','rvzWB9oEqaOEwB8KmnHAtwSiFvE3','https://lh3.googleusercontent.com/a/AGNmyxa1RrJI7q94nLMhLdgH6821Ot4Z8ko0mCpvZ7U_=s576','2023-07-07','General Atlantic','I will be carrying alot of items into the General Atlantic office and I need some support getting in and out of the building. Due to it being technology I will need somoene who is gentile and cautious so that nothing breaks','Manhattan','15:00','TRUE','FALSE','https://tinyurl.com/mr45bver');

INSERT INTO requests ("elder_id", "elder_img", "volunteer_id", "volunteer_img", "req_date", "title", "description", "location", "time", "assigned", "complete","image") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg','rvzWB9oEqaOEwB8KmnHAtwSiFvE3','https://lh3.googleusercontent.com/a/AGNmyxa1RrJI7q94nLMhLdgH6821Ot4Z8ko0mCpvZ7U_=s576','2023-08-14','Capstone','Presenting my project that supports elderly people, since I am one I understand the struggle. And would like to try it out during my capstone.','Manhattan','15:00','TRUE','TRUE','https://tinyurl.com/5n7v5yfw');

INSERT INTO requests ("elder_id", "elder_img", "volunteer_id", "volunteer_img", "req_date", "title", "description", "location", "time", "assigned", "complete", "image") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg','rvzWB9oEqaOEwB8KmnHAtwSiFvE3','https://lh3.googleusercontent.com/a/AGNmyxa1RrJI7q94nLMhLdgH6821Ot4Z8ko0mCpvZ7U_=s576','2023-04-02', 'Clean Up After New Years','We may be older but we still like to party.After New Years I will be in need of cleaning help. Bring recycling down as well as garbage.','Brooklyn','10:00','TRUE','FALSE','https://tinyurl.com/3uy7cnnw');

INSERT INTO requests ("elder_id", "elder_img", "volunteer_id", "volunteer_img", "req_date", "title", "description", "location", "time", "assigned", "complete", "image") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg','rvzWB9oEqaOEwB8KmnHAtwSiFvE3','https://lh3.googleusercontent.com/a/AGNmyxa1RrJI7q94nLMhLdgH6821Ot4Z8ko0mCpvZ7U_=s576','2023-12-20','Present Wrapping','The Holidays are  just around the corner and with my arthritis in my hands I really would appreciate some help with wrapping presents.', 'Manhattan', '14:00','TRUE', 'TRUE','https://tinyurl.com/ycykes5k');

-- COMPLETED REQUEST
INSERT INTO requests ("elder_id", "elder_img", "volunteer_id", "volunteer_img", "req_date", "title", "description", "location", "time", "assigned", "complete","image") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg','rvzWB9oEqaOEwB8KmnHAtwSiFvE3','https://lh3.googleusercontent.com/a/AGNmyxa1RrJI7q94nLMhLdgH6821Ot4Z8ko0mCpvZ7U_=s576','2023-10-26','Grocery Shopping','Looking for some help with Grocery shopping. In need of some additional help bring up the bags to the 3rd Floor','New York','03:00PM-05:00PM','TRUE','TRUE','https://static01.nyt.com/images/2016/11/06/education/06view360-sub/06view360-sub-superJumbo.jpg');

INSERT INTO requests ("elder_id", "elder_img", "volunteer_id", "volunteer_img", "req_date", "title", "description", "location", "time", "assigned", "complete","image") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg','rvzWB9oEqaOEwB8KmnHAtwSiFvE3','https://lh3.googleusercontent.com/a/AGNmyxa1RrJI7q94nLMhLdgH6821Ot4Z8ko0mCpvZ7U_=s576','2023-10-26','Grocery Shopping','Looking for some help with Grocery shopping. In need of some additional help bring up the bags to the 3rd Floor','New York','03:00PM-05:00PM','TRUE','TRUE','https://static01.nyt.com/images/2016/11/06/education/06view360-sub/06view360-sub-superJumbo.jpg');

-- REVIEWS
INSERT INTO reviews ("reviewer_id","reviewer_img","reviewed_id", "post_date", "request_id", "description") VALUES
('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg','rvzWB9oEqaOEwB8KmnHAtwSiFvE3','2023-01-15','9','She was super sweet and kind but the amount of work given took way longer than the estimated time... I was there over 3 hours more the scheduled');

-- INSERT INTO reviews ("reviewer_id","reviewer_img","reviewed_id", "post_date", "request_id", "description") VALUES
-- ('dDN86F8p2SdUo7pDHTrJ9gIJM8Q2','https://t3.ftcdn.net/jpg/03/77/95/28/240_F_377952865_FrXT27NycHrqn04xVvz8qTjzPhqTyHb4.jpg','rvzWB9oEqaOEwB8KmnHAtwSiFvE3','2023-01-15','21','She was super sweet and kind but the amount of work given took way longer than the estimated time... I was there over 3 hours more the scheduled');



-- Stretch Goal
-- INSERT INTO ratings ("rating","request_id","rating_user_id","rated_user_id") VALUES
-- ('5','1','rrWVL4lSJvOQgw6kOz7qWCp1N463','') ;

-- INSERT INTO reviews ("reviewer_id","description","post_date","request_id") VALUES
-- ('rrWVL4lSJvOQgw6kOz7qWCp1N463','It was great helping TEST OLDMAN out with this','2022-12-04','1') ;

-- INSERT INTO reviews ("reviewer_id","description","post_date","request_id") VALUES
-- ('','TEST VOLUNTEER was a great help, I greatly appreciate their assistance','2022-12-04','1') ;





