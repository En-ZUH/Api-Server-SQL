DROP TABLE IF EXISTS clothes;

    CREAT TABLE clothes(
        id SERIAL PRIMARY KEY,
        name varchar(255),
        price INT
    );

DROP TABLE IF EXISTS food;

CREAT TABLE food(
        id SERIAL PRIMARY KEY,
        name varchar(255),
        price INT
    );
