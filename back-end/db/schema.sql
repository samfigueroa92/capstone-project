DROP DATABASE IF EXISTS task_capstone;
CREATE DATABASE task_capstone;

\c task_capstone;


CREATE TABLE users (
    uuid TEXT UNIQUE NOT NULL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    dob DATE NOT NULL,
    address TEXT NOT NULL,
    unit TEXT,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zipcode VARCHAR(5),
    phonenumber VARCHAR(10),
    email TEXT NOT NULL,
    verified BOOLEAN default false,
    user_type TEXT NOT NULL,
    profilephoto TEXT,
    languages TEXT,
    verification_type TEXT
);

CREATE TABLE requests (
    id SERIAL PRIMARY KEY,
    elder INT references users(uuid),
    volunteer INT references users(uuid),
    req_date DATE NOT NULL,
    title TEXT,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    time TEXT,
    assigned BOOLEAN DEFAULT false,
    complete BOOLEAN DEFAULT false,
    image TEXT
);

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    rating INT NOT NULL,
    request_id INT references requests(id),
    rating_user INT references users(uuid),
    rated_user INT references users(uuid)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer INT references users(uuid),
    description TEXT NOT NULL,
    post_date DATE NOT NULL,
    request_id INT references requests(id)
);

