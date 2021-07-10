'use strict';

const pool = require('../models/pool');

class Interface {
    constructor(table, name) {
        this.table = table;
        this.name = name;

    }

    get(id) {
        if (id)
            // return pool.query(`SELECT * FROM ${this.name} (name,price) WHERE id=$1;`, [id]);
            return pool.query('SELECT * FROM food WHERE id=$1;', [id]);

        else
            return pool.query(`SELECT * FROM food`);
    }

    create(object) {
        const document = `INSERT INTO food (name,price) VALUES ($1,$2) RETURNING *;`;
        const safeValues = [object.name, object.price];

        return pool.query(document, safeValues);
    }

    update(id, object) {
        const document = `UPDATE  food SET name=$1, price=$2 WHERE id=$3 RETURNING *;`;
        const safeValues = [object.name, object.price, id];

        return pool.query(document, safeValues);

    }

    delete(id) {
        return pool.query(`DELETE FROM food WHERE id=$1 RETURNING *;`, [id]);
    }
}

module.exports = Interface;
