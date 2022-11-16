DROP DATABASE IF EXISTS task_capstone;
CREATE DATABASE task_capstone;

\c task_capstone;

CREATE TABLE users_elderly (
    id SERIAL PRIMARY KEY, 
    firstname TEXT,
    lastname TEXT,
    dob DATE,
    languages TEXT,
    address TEXT,
    unit TEXT,
    city TEXT,
    zipcode VARCHAR(255),
    phonenumber VARCHAR(255),
    email TEXT,
    verified BOOLEAN,
    profilephoto TEXT
);

CREATE TABLE users_volunteers (
    id SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    languages TEXT,
    address TEXT,
    unit TEXT,
    city TEXT,
    zipcode VARCHAR(255),
    phonenumber VARCHAR(255),
    email TEXT,
    verified BOOLEAN,
    profilephoto TEXT
);

CREATE TABLE requests (
    id SERIAL PRIMARY KEY,
    elder INT references users_elderly(id),
    description TEXT,
    req_date DATE,
    volunteer INT references users_volunteers(id),
    location TEXT,
    time TEXT,
    assigned BOOLEAN DEFAULT false
),

