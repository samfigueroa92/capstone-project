DROP DATABASE IF EXISTS task_capstone;
CREATE DATABASE task_capstone;

\c task_capstone;


create table users (
    id SERIAL PRIMARY KEY,
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
    user_type TEXT NOT NULL
    profilephoto TEXT NOT NULL,
    languages TEXT,
);

CREATE TABLE requests (
    id SERIAL PRIMARY KEY,
    elder INT references users(id),
    volunteer INT references users(id),
    req_date DATE NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    time TEXT,
    assigned BOOLEAN DEFAULT false
);

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    rating INT NOT NULL,
    request_id INT references requests(id),
    rating_user INT references users(id),
    rated_user INT references users(id)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user INT references users(id),
    description TEXT NOT NULL,
    post_date DATE NOT NULL,
    request_id INT references requests(id)
)

