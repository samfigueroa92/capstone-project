\c task_capstone

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type", "state") VALUES

('14d3ba1b-b313-409e-ad4b-3a7e205d2a47', 'Test', 'Oldman', '1950-11-16', '123 FAKER STREET', 'Unit 24', 'New York', '10108','5555555555','fakeoldman@gmail.com', 'testPhoto', 'Elderly', 'NY') RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type", "state") VALUES

('14d3ba1b-b313-409e-ad4b-3a7e205d2a89', 'Test','Volunteer','1990-01-01','123 EVEN FAKER STREET', 'Apt 42', 'New York', '10108', '5555555554','fakevolunteer@gmail.com', 'testPhoto', 'Volunteer', 'NY') RETURNING *;


INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type", "state") VALUES

('14d3ba1b-b313-409e-ad4b-3a7e205d2a89', 'Test','Volunteer','1990-01-01','123 EVEN FAKER STREET', 'Apt 42', 'New York', '10108', '5555555554','fakevolunteer@gmail.com', 'testPhoto', 'Volunteer', 'NY') RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto","languages", "user_type", "state") VALUES

('7OSUXCjXySh97xYcidAn4Ura1sG2', 'Cassandra', 'Oliver', '2022-10-01', '123 Fake Ave','','Brooklyn','10220','2028703049', 'cassandraoliver91@gmail.com', 'https://media-exp1.licdn.com/dms/image/D5603AQGGZ-qNh8vcJA/profile-displayphoto-shrink_800_800/0/1670167152785?e=1675900800&v=beta&t=irHW96Z4AMj5yWQluHHkGTCslbsG7wqdswIwa2gGVDA','Spanish', 'Drivers License','NY' ) RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto","language", "user_type", "state") VALUES

('APFIkXHuzfdpoe7GAXtc6nhFIXB3','Jede','Brahma','2022-12-03', '547 Grand Street','3','Brooklyn','11211','9173730755','brahmajede@gmail.com','https://media-exp1.licdn.com/dms/image/C4D03AQG8F3w6vmkavQ/profile-displayphoto-shrink_400_400/0/1596603061780?e=1675900800&v=beta&t=YhloUuCKNq9xuKThClwMZyyIzG_8VT-keZi24vs7Ik4','English','Senior','Passport', 'NY' ) RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto","language", "user_type", "state") VALUES

('befMUMBrp3dCTI0EfL4LmFRPE2m2','Lucas','Somerling', '2038-11-16', '136281 Himalayan Rock Salt Quarry', '1','Staten Island','18221','215664211','lucasdaman@gmail.com','https://media-exp1.licdn.com/dms/image/C4E03AQFeo2w8_jMXOQ/profile-displayphoto-shrink_400_400/0/1658926484758?e=1675900800&v=beta&t=3cuuk5TfOHJvlNUoOMpzRATzfa5QXBB7Oj8ZwObM6oU','English','Volunteer','NY') RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "language","user_type", "state") VALUES

('Bt8Za9ZtYhTUFdFtd70xHQOsXpr1','Tom','LaTulipe','2022-11-29','228 Purdy Hill Road','A','Fort Town','06468','2039038675','tlatulipe@gmail.com','https://media-exp1.licdn.com/dms/image/C4D03AQEUYyUqQXTZpQ/profile-displayphoto-shrink_400_400/0/1643244593566?e=1675900800&v=beta&t=2qykFvGjNbvAe8QGGyTekou139dgFCmuiO-0r9qfAxw', 'English','Volunteer','CT')RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "language", "user_type", "state") VALUES

('cFlHjGMtgaeqiZ0nXRy3zuFwcG93','Kenyetta','Griffin','1982-05-21', '56 N. Oxford Walk', '5B','Brooklyn','11205','3473145054','gmemonei@gmail.com', 'https://media-exp1.licdn.com/dms/image/D4E35AQFb053S2knviQ/profile-framedphoto-shrink_400_400/0/1666280921690?e=1670857200&v=beta&t=cIZVs5zsPNpjF7A87FE9WnDdwCz6lBdLDHiz5zMRs14','English', 'Volunteer','NY')RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type","language", "state") VALUES

('g4BbNOx8fzQJd2rXAORqsGjKKDD2','Auredy','Sanchez','1991-10-18','1212 FullStack Ave.','1111','New York','55522','2223331010','auredysanchez@gmail.com','https://media-exp1.licdn.com/dms/image/C4D03AQEew_wm5o6nVg/profile-displayphoto-shrink_400_400/0/1606350923773?e=1675900800&v=beta&t=oONLzwjoTcrWGlGEp5hXqcolodldVUob9tnfKzFPoOE','Volunteer','Spanish','NY')RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type","language", "state") VALUES

('l5WHcZxrujV5tAGs6g3jKEfMK472','Kalilah','Clarke','1992-11-26','966 Eastern Ave.','','New York','10665','9992586465','kalilahclarke@pursuit.org','','Volunteer','English','NY')RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type","language", "state") VALUES
('mDxD3DWCXdNyxPu0tO8LxvI6j203', 'Tim','McKiernan','1985-12-06', '1234 Whatever Drive','4','Bronx','NY','11111','1234567890','tim@pursuit.org','https://media-exp1.licdn.com/dms/image/C4D03AQEWmXUHScBZkQ/profile-displayphoto-shrink_100_100/0/1581017635510?e=1675900800&v=beta&t=TBplBF6s_vY-HrrKVkE_7Kmb4GKAAgU1RQuY6VHB9_Q','Volunteer','English','NY')RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type","language", "state") 

('MsadegvvjNZhvtM76bnkL2Jpjkn2', 'Shawn', 'Faber','1984-07-05','555 42nd St.','','Manhattan','11111','1234567890','sfaber02@gmail.com','https://media-exp1.licdn.com/dms/image/C4E03AQGiJxKboSpVgQ/profile-displayphoto-shrink_800_800/0/1643244349442?e=1675900800&v=beta&t=-Zs1NfgZB46ofTFaADISpBjUhADSOBbrS1lppK0XWKU','Volunteer','English','NY')RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type","language", "state") 
('nT7piDTswmNax8Osco30IoX4MrW2','Hiram','Binklesmith','1970-12-01', '227 Partridge Circle','','Smicksburg','16256','8142534421','hiramb@gmail.com','https://media-exp1.licdn.com/dms/image/C5603AQEy_8IXPghI4g/profile-displayphoto-shrink_400_400/0/1626088859096?e=1675900800&v=beta&t=xgz2KHSWeFhZqXEhvM_rQYOGIMTRIr3HZeNCEICqL80','Senior','English')RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type","language", "state") 
('oz9uogR1XAWt2uytWsnN1LsR3hd2','Mason','Murder','2022-12-14','','1 Main Strret','New York','10002','3478816355','masonmei@pursuit.org','https://media-exp1.licdn.com/dms/image/C4E03AQE0emRDS5992Q/profile-displayphoto-shrink_800_800/0/1642638698679?e=1675900800&v=beta&t=321BTnfKIlttPJ8vJ5lsFw3dcMTkckDDP4Gu5EU1YFE','Senior','English','NY')RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type","language", "state") 
('rrWVL4lSJvOQgw6kOz7qWCp1N463','Vaughn','Greene','1992-01-06','5600 Paddington Pl.','204','Spotsylvania','22553','9179355199','vgreen.me@com','','Senior','English','VA')RETURNING *;

INSERT INTO users ("uuid", "firstname", "lastname", "dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type","language", "state") 
('uYH1wI4KmteJ9jnCVyaSIlNaZlq2','Spencer','Simon', '1997-07-07','14999 Gratiot Ave.','','Detroit','48205','7185304759','spencer.san@gmail.com','https://media-exp1.licdn.com/dms/image/D4E35AQGKpRZO32VOew/profile-framedphoto-shrink_800_800/0/1642885598424?e=1670860800&v=beta&t=W1HjkgN7qR6rxBf0V6Kr22pJj_7JYpSdgjAcU1NQ94I','Volunteer','English','MI')RETURNING *;




INSERT INTO requests ("elder_id", "volunteer_id", "req_date", "title", "description", "location", "time", "assigned", "complete") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a47','14d3ba1b-b313-409e-ad4b-3a7e205d2a89','2022-12-20', 'General Help', 'I need help with a few things around the house right before Christmas', 'Bronx', '12pm-3pm', 'FALSE','FALSE') RETURNING *;

INSERT INTO requests ("elder_id", "volunteer_id", "req_date", "title", "description", "location", "time", "assigned", "complete") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a47', 'l5WHcZxrujV5tAGs6g3jKEfMK472', '2022-12-20', 'Christmas Tree Help', 'Looking for some assistance is putting together an artificial Christmas tree','Brooklyn','12pm-5pm', 'FALSE','FALSE') RETURNING *;

INSERT INTO requests ("elder_id", "req_date", "title", "description", "location", "time", "assigned", "complete") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a47','2022-12-06', 'I HATE IKEA', 'I got a new dresser from Ikea, and I hate putting these things together. It would be nice to have someone give me a hand with this.','Manhattan','10am-7pm','TRUE','FALSE') RETURNING *;

INSERT INTO requests ("elder_id", "req_date", "title", "description", "location", "time", "assigned", "complete") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a47', '2022-12-10','Dead Closet Light', 'A light in my closet blew, and I am unable to reach it. Looking for someone that could handle this small thing for me.','Bronx','10am','FALSE','FALSE') RETURNING *;

INSERT INTO requests ("elder_id", "volunteer_id", "req_date", "title", "description", "location", "time", "assigned", "complete") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a47','l5WHcZxrujV5tAGs6g3jKEfMK472','2022-12-01','Grocery Assistance','I need a few grocery items, but am currently recovering from knee surgery for a few more days. If someone would be kind enough to run this errand for me, I would be extremely grateful.','Queens','4pm','FALSE','FALSE') RETURNING *;

INSERT INTO requests ("elder_id", "req_date", "title", "description", "location", "time", "assigned", "complete") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a47', '2023-01-04','Holiday Cleanup','Looking for a little help removing some Christmas decorations','Manhattan','7am','FALSE','FALSE') RETURNING *;






INSERT INTO ratings ("rating","request_id","rating_user_id","rated_user_id") VALUES
('5','1','14d3ba1b-b313-409e-ad4b-3a7e205d2a89','14d3ba1b-b313-409e-ad4b-3a7e205d2a47') RETURNING *;

INSERT INTO reviews ("reviewer_id","description","post_date","request_id") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a89','It was great helping TEST OLDMAN out with this','2022-12-04','1') RETURNING *;

INSERT INTO reviews ("reviewer_id","description","post_date","request_id") VALUES
('14d3ba1b-b313-409e-ad4b-3a7e205d2a47','TEST VOLUNTEER was a great help, I greatly appreciate their assistance','2022-12-04','1') RETURNING *;



-- INSERT INTO requests ("elder_id", "volunteer_id", "req_date", "description", "location", "time", "assigned", "complete") VALUES
-- ('14d3ba1b-b313-409e-ad4b-3a7e205d2a47','','','','','','','') RETURNING *;
