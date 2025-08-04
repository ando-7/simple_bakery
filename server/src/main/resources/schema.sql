-- noinspection SqlNoDataSourceInspectionForFile

CREATE TABLE IF NOT EXISTS Position(
     id SERIAL PRIMARY KEY,
     title VARCHAR(100) NOT NULL,
     salary NUMERIC(10, 2) NOT NULL,
     location VARCHAR(55),
     employment_type VARCHAR(55),
     date_created TIMESTAMP NOT NULL,
     date_updated TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Product(
      id SERIAL PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      price NUMERIC(10, 2) NOT NULL,
      image_path TEXT,
      date_created TIMESTAMP NOT NULL,
      date_updated TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Applicant(
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      email VARCHAR(55) NOT NULL,
      cv TEXT NOT NULL,
      position_id INT NOT NULL,

      CONSTRAINT fk_position
          FOREIGN KEY (position_id) REFERENCES Position(id)
);