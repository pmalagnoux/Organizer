
CREATE TABLE contact (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(500) NOT NULL,
    last_name VARCHAR(500),
    mail VARCHAR(500)
)

CREATE TABLE type (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(500) NOT NULL,
)

CREATE TABLE tag (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    content  VARCHAR(500) NOT NULL,
)

CREATE TABLE file (
    id  INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(500) NOT NULL,
    extension VARCHAR(500),
    location VARCHAR(500) NOT NULL,
    id_contact INT(6) UNSIGNED,
    id_type INT(6) UNSIGNED,
     FOREIGN KEY (id_contact) REFERENCES contact(id),
     FOREIGN KEY (id_type) REFERENCES type(id)
)

CREATE TABLE perimeter (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    content  VARCHAR(500) NOT NULL,
)

CREATE TABLE perimeter_contact (
    id_contact INT(6) UNSIGNED,
    id_perimeter INT(6) UNSIGNED,
    FOREIGN KEY (id_contact) REFERENCES contact(id),
    FOREIGN KEY (id_perimeter) REFERENCES perimeter(id)
)

CREATE TABLE file_tag (
    id_file INT(6) UNSIGNED,
    id_tag INT(6) UNSIGNED,
    FOREIGN KEY (id_file) REFERENCES file(id),
    FOREIGN KEY (id_tag) REFERENCES tag(id)
)