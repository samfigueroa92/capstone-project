DROP DATABASE IF EXISTS task_capstone;
CREATE DATABASE task_capstone;

\c task_capstone;

CREATE TABLE users_elderly (
    id SERIAL PRIMARY KEY, 
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    dob DATE NOT NULL,
    languages TEXT,
    address TEXT NOT NULL,
    unit TEXT,
    city TEXT NOT NULL,
    zipcode VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(255) NOT NULL,
    email TEXT NOT NULL,
    verified BOOLEAN default false,
    profilephoto TEXT
);

CREATE TABLE users_volunteers (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    languages TEXT,
    address TEXT NOT NULL,
    unit TEXT,
    city TEXT NOT NULL,
    zipcode VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(255) NOT NULL,
    email TEXT NOT NULL,
    verified BOOLEAN default false,
    profilephoto TEXT
);

CREATE TABLE requests (
    id SERIAL PRIMARY KEY,
    elder INT references users_elderly(id),
    description TEXT NOT NULL,
    req_date DATE NOT NULL,
    volunteer INT references users_volunteers(id),
    location TEXT NOT NULL,
    time TEXT,
    assigned BOOLEAN DEFAULT false
);

CREATE TABLE reviews_elder (
    id SERIAL PRIMARY KEY,
    volunteer INT references users_volunteers(id),
    description TEXT NOT NULL,
    post_date DATE,
    request_id INT references requests(id)
);

CREATE TABLE reviews_volunteer (
    id SERIAL PRIMARY KEY,
    elder INT references users_elderly(id),
    description TEXT NOT NULL,
    post_date DATE,
    request_id INT references requests(id)
);

CREATE TABLE ratings_elder (
    id SERIAL PRIMARY KEY,
    rating INT NOT NULL,
    request_id INT references users_elderly(id)
);

CREATE TABLE ratings_volunteer (
    id SERIAL PRIMARY KEY,
    rating INT NOT NULL,
    request_id INT references users_volunteers(id)
);