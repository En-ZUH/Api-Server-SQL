'use strict';

const pool = require('./pool');

class Interface {
    constructor(table, name) {
        this.table = table;
        this.name = name;
    }

    get(_id) {
        if (_id)
            return pool.query(`SELECT * FROM ${this.name} (name,price) WHERE id=$1;`, [id]);
        else
            return pool.query(`SELECT * FROM ${this.name}`);
    }

    creat(object) {
        const document = `INSERT INTO ${this.name} (name,price) VALUES ($1,$2) RETURNING *;`;
        const safeValues = [object.name, object.price];

        return pool.query(document, safeValues);
    }

    update(_id, object) {
        const document = `UPDATE  ${this.name} SET name=$1, price=$2 WGERE id=$3 RETURNING *;`;
        const safeValues = [object.name, object.price, _id];

        return pool.query(document, safeValues);

    }

    delete(_id) {
        return pool.query(`DELETE FROM ${this.name} WHERE id=$1 RETURNING *;`, [_id]);
    }
}

module.exports = Interface;
